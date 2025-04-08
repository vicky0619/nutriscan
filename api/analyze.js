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
  
    const prompt = `根據這段描述：「${description}」，估算食物的營養成分，請回傳 JSON 格式，欄位為 foodName, calories, protein, carbs, fat`;
  
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
      const result = JSON.parse(text);
  
      return res.status(200).json(result);
    } catch (err) {
      console.error("Gemini API error:", err);
      return res.status(500).json({ error: "Gemini API call failed." });
    }
  }
  