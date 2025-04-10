# NutriScan 🍔  
**AI-Powered Retro Food Tracker | Gemini Vision-based Nutrition Analysis**

---

## 🌐 Live Demo

🔗 [nutriscan-vision.vercel.app](https://nutriscan-woad.vercel.app)
![Website](https://i.imgur.com/noU0QRM.png)

---

## 🥗 Project Overview

**NutriScan** is a retro-style food tracking web app powered by Google Gemini AI. Users can either **upload a food photo**, **take one via webcam**, or **enter a food description**, and the app will intelligently estimate **calories**, **protein**, **carbs**, and **fat** content. Each result can be saved to a **daily food diary**, all within a nostalgic pixel-art interface.

---

## ✨ Features

- 📷 **Image Analysis**: Uses Gemini Pro Vision to analyze food photos  
- ✍️ **Text Analysis**: Instantly analyzes nutrition from food descriptions  
- 💾 **Food Diary**: Tracks and summarizes daily nutrient intake  
- 🕹️ **Retro UI**: 8-bit pixel design inspired by old-school consoles

---

## 🚀 Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/vicky0619/nutriscan.git
cd nutriscan
```

### 2. Set up environment variable

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Make sure your `.gitignore` includes:

```
.env
```

### 3. Deploy with Vercel

```bash
vercel
```

Or connect your GitHub repo directly to [Vercel](https://vercel.com/).

---

## 📁 Project Structure

```
nutriscan/
├── api/
│   └── analyze.js      # Gemini text/image API integration
├── index.html          # Main UI with Tailwind and pixel styles
├── public/             # Static assets
└── .env                # Local API key (never pushed)
```



---

## 📸 How to Use

| Function       | How to Use                                          |
|----------------|-----------------------------------------------------|
| Take photo     | Click “Take Photo” → Capture → Confirm              |
| Upload image   | Click “Upload Image” → Select file                  |
| Type manually  | Type description (e.g., `cheeseburger`) → Click ✈️ |
| View diary     | Click “Nutrition Diary” tab                         |
| View history   | Click “History” → Use search                        |

---

## 🧪 Sample Inputs

Try entering:

- `fried chicken with rice`
- `avocado toast with egg`
- `牛肉炒飯`
- `鮪魚沙拉三明治`

---

## 🔒 Security

- API key is stored in `.env` and never exposed to the client
- Food diary is saved in `localStorage` (client only)

---

## 💡 Future Plans

- [ ] Connect to Firebase/Supabase for cloud diary storage  
- [ ] Daily nutrition goal tracking  
- [ ] Voice command support

---

## 🙌 Author

Made with ❤️ by [@vicky0619](https://github.com/vicky0619)  
Gemini integration by ChatGPT 💬

---

## 📝 License

MIT License

---

# NutriScan 🍔  
**支援圖片與文字輸入的 AI 食物營養分析器｜復古像素風界面**

---

## 🥗 專案簡介

NutriScan 是一款整合 Google Gemini AI 的食物分析工具。使用者可透過拍照、上傳圖片或文字描述，即可快速分析食物的 **熱量、蛋白質、碳水化合物、脂肪** 含量，並記錄於每日飲食日記中。整體風格走懷舊 8-bit 像素路線，功能實用又有趣！

---

## ✨ 功能亮點

- 📷 **圖片分析**：使用 Gemini Vision 分析食物照片  
- ✍️ **文字分析**：輸入描述，AI 即時分析營養成分  
- 💾 **日記記錄**：每日累積並查看攝取總量  
- 🕹️ **復古 UI**：經典 80s 像素風格，超有感

---

## 🚀 開始使用

### 1. 複製專案

```bash
git clone https://github.com/vicky0619/nutriscan.git
cd nutriscan
```

### 2. 設定環境變數 `.env`

```env
GEMINI_API_KEY=你的 Gemini API 金鑰
```

`.gitignore` 請記得加入 `.env` 防止外洩。

---

### 3. 部署到 Vercel

```bash
vercel
```

或將 GitHub 專案直接連接 Vercel 也可以。

---

## 📁 專案結構說明

```
nutriscan/
├── api/
│   └── analyze.js      # Gemini API（支援圖片與文字）
├── index.html          # 主畫面（Tailwind + 像素風）
└── .env                # API 金鑰（不會上傳）
```

---

## 📸 使用方式

| 功能        | 操作方式                                     |
|-------------|----------------------------------------------|
| 拍照分析    | 點擊「Take Photo」→ 拍照 → 確認 → 分析       |
| 上傳圖片    | 點擊「Upload Image」→ 選圖 → 自動分析        |
| 手動輸入    | 輸入描述（如 `漢堡加蛋`）→ 點紙飛機按鈕送出 |
| 查看日記    | 點選上方「Nutrition Diary」分頁              |
| 查看紀錄    | 點選「History」分頁，可搜尋                   |

---

## 🧪 範例輸入推薦

- `炒飯加煎蛋`
- `beef with noodles`
- `tuna and salad`
- `熱狗與薯條`

---

## 🛡️ 安全性

- 所有 API 金鑰僅儲存於伺服器端 `.env`
- 資料不會上傳至後台，皆保存在瀏覽器 `localStorage`

---

## 💡 待辦與未來功能

- [ ] 接 Firebase 儲存資料庫  
- [ ] 加入每日攝取目標與建議  
- [ ] 語音辨識輸入功能

