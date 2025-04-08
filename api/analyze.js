export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { description, imageData } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
  
    if (!apiKey) {
      return res.status(500).json({ error: "API key not configured." });
    }
  
    let url = "";
    let body = {};
  
    if (imageData) {
      // 👁️ Gemini Vision 圖片分析
      url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro-vision:generateContent?key=${apiKey}`;
      body = {
        contents: [{
          parts: [
            {
              inlineData: {
                mimeType: "image/png",
                data: imageData.replace(/^data:image\/(png|jpeg);base64,/, "")
              }
            },
            {
              text: `
  請分析這張食物照片，並估算其營養成分（每份熱量、蛋白質、碳水、脂肪）。請以以下純 JSON 格式回覆，不要加任何說明文字：
  
  {
    "foodName": "string",
    "calories": number,
    "protein": number,
    "carbs": number,
    "fat": number
  }
  `
            }
          ]
        }]
      };
    } else if (description) {
      // ✍️ 文字分析
      url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      body = {
        contents: [{
          parts: [{
            text: `
  請根據這段描述「${description}」，估算其營養成分。請回傳以下純 JSON 格式，不加任何說明文字：
  
  {
    "foodName": "string",
    "calories": number,
    "protein": number,
    "carbs": number,
    "fat": number
  }
  `
          }]
        }]
      };
    } else {
      return res.status(400).json({ error: "Missing input" });
    }
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
  
      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  
      if (!text) {
        return res.status(500).json({ error: "Gemini 沒有回傳內容", raw: data });
      }
  
      try {
        const match = text.match(/{[\s\S]+}/);
        if (!match) throw new Error("找不到 JSON 區塊");
  
        const result = JSON.parse(match[0]);
        return res.status(200).json(result);
      } catch (err) {
        console.error("解析失敗：", err);
        return res.status(500).json({ error: "JSON parse failed", raw: text });
      }
    } catch (err) {
      console.error("Gemini API error:", err);
      return res.status(500).json({ error: "Gemini 呼叫失敗", detail: err });
    }
  }
  