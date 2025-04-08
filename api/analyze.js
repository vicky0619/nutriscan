// api/analyze.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { description } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
  
    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured." });
    }
  
    const prompt = `
    請根據這段食物描述「${description}」，估算其營養成分並用「純 JSON 格式」回覆，不加任何註解或說明。

    格式如下（數字單位為數值，不含單位）：
    {
    "foodName": "string",
    "calories": number,
    "protein": number,
    "carbs": number,
    "fat": number
    }
    請務必回傳可被 JSON.parse() 成功解析的純 JSON 結構。
    `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      console.error("Gemini 回傳格式不對：", JSON.stringify(data, null, 2));
      return res.status(500).json({ error: "Gemini 沒有傳回有效文字", raw: data });
    }
    
    try {
      const result = JSON.parse(text);
      return res.status(200).json(result);
    } catch (err) {
      console.error("JSON parse failed:", err);
      console.log("原始 Gemini 回傳內容：", text);
      return res.status(500).json({ error: "無法解析 Gemini 回傳的 JSON", raw: text });
    }
  } catch (err) {
    console.error("Fetch failed:", err);
    return res.status(500).json({ error: "無法連接到 Gemini API", raw: err.message });
  }
}