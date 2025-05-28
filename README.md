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

## 🛠️ Backend Setup (NutriScan Diary/History API)

The backend server handles storing and retrieving nutrition diary entries and history.

**Prerequisites:**
*   Node.js (v14 or newer recommended) and npm
*   MongoDB (local instance or a cloud-hosted one like MongoDB Atlas free tier)

**Steps to Run Locally:**

1.  **Navigate to the server directory** (after cloning the repository):
    ```bash
    cd server
    ```

2.  **Configure Environment Variables:**
    *   Create a `.env` file by copying the example:
        ```bash
        cp .env.example .env
        ```
    *   Edit the `server/.env` file with your MongoDB connection string and preferred port:
        ```
        MONGODB_URI=your_mongodb_connection_string_here
        PORT=3000 
        ```
        (Replace `your_mongodb_connection_string_here` with your actual MongoDB URI. `PORT` is optional and defaults to 3000 if not set.)

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Start the Backend Server:**
    ```bash
    npm start
    ```
    You should see console messages like "Server running on port 3000" and "MongoDB Connected...". Keep this server running while you use the app.

---

## 📁 Project Structure

```
nutriscan/
├── server/                 # Node.js backend for diary/history
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── models/
│   │   └── DiaryEntry.js   # Mongoose schema for diary entries
│   ├── routes/
│   │   └── api.js          # API routes (/api/diary, /api/history)
│   ├── .env.example        # Example environment variables for backend
│   ├── package.json        # Backend dependencies
│   └── server.js           # Main backend server file
├── api/
│   └── analyze.js      # Serverless function for Gemini food analysis (e.g., for Vercel deployment)
├── index.html          # Main UI with Tailwind, pixel styles, and frontend JavaScript
├── README.md           # This file
└── .env                # Local API key for Gemini (for /api/analyze, if used locally or during Vercel dev)
```

---

## 🚀 Running the Full Application Locally

1.  **Set up and start the Backend Server** as described in the "Backend Setup" section above.
2.  **Set up your Gemini API Key** in a `.env` file in the project root if you intend to use the food analysis feature (this uses `/api/analyze.js` which is typically for serverless deployment but might be run by some local dev servers like `vercel dev`).
    ```env
    GEMINI_API_KEY=your_gemini_api_key
    ```
3.  **Open `index.html`**: Open the `index.html` file (in the project root) directly in your web browser.
    *   The application will now use the local backend (running on `http://localhost:3000` by default) to save and load your nutrition diary and history.
    *   The food analysis feature ("Scan Food" tab) via `/api/analyze` is separate from the diary backend.

---

## 📸 How to Use (Frontend)

Once the backend is running and `index.html` is open in your browser:

| Function       | How to Use                                          |
|----------------|-----------------------------------------------------|
| Take photo     | Click “Take Photo” → Capture → Confirm → (Analysis via Gemini) → Save to Diary |
| Upload image   | Click “Upload Image” → Select file → (Analysis via Gemini) → Save to Diary |
| Type manually  | Type description (e.g., `cheeseburger`) → Click ✈️ → (Analysis via Gemini) → Save to Diary |
| View diary     | Click “Nutrition Diary” tab (fetches from local backend) |
| View history   | Click “History” → Use search (fetches from local backend) |

---

## 🧪 Sample Inputs

Try entering:

- `fried chicken with rice`
- `avocado toast with egg`
- `牛肉炒飯`
- `鮪魚沙拉三明治`

---

## 🔒 Security

- **Gemini API Key**: Stored in `.env` at the root for the `/api/analyze` function (typically for serverless deployment) or Vercel environment variables. Not directly exposed to the client if deployed correctly.
- **Diary Data**: Stored in your MongoDB database via the local backend server. Ensure your MongoDB instance is secured.
- The frontend `index.html` makes requests to `http://localhost:3000/api` (by default) for diary/history operations.

---

## 💡 Future Plans

- [ ] Connect to Firebase/Supabase for cloud diary storage  
- [ ] Daily nutrition goal tracking  
- [ ] Voice command support

---

## 🙌 Author

Made with ❤️ by [@vicky0619](https://github.com/vicky0619)  


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

(注意：以下後端設定主要用於本機開發。若要將後端部署到雲端，需另行設定，例如使用 Docker 容器、Heroku 或其他 Node.js 託管服務。)

```bash
vercel
```
Vercel部署主要針對前端 `index.html` 及無伺服器函數 `api/analyze.js`。本地後端(`server/`目錄)需要另外部署或在本機運行。

---

## 🛠️ 本機後端設定 (NutriScan 日記/歷史記錄 API)

此後端伺服器負責儲存和讀取營養日記條目和歷史記錄。

**先決條件:**
*   Node.js (建議 v14 或更新版本) 和 npm
*   MongoDB (本地實例或雲端託管，如 MongoDB Atlas 免費版)

**本機運行步驟:**

1.  **進入 server 目錄** (複製專案後):
    ```bash
    cd server
    ```

2.  **設定環境變數:**
    *   複製範例文件以建立 `.env` 檔案：
        ```bash
        cp .env.example .env
        ```
    *   編輯 `server/.env` 檔案，填入您的 MongoDB 連線字串和偏好的埠號：
        ```
        MONGODB_URI=你的_mongodb_連線字串_在此
        PORT=3000
        ```
        (將 `你的_mongodb_連線字串_在此` 替換成您實際的 MongoDB URI。`PORT` 是可選的，如果未設定，預設為 3000。)

3.  **安裝依賴套件:**
    ```bash
    npm install
    ```

4.  **啟動後端伺服器:**
    ```bash
    npm start
    ```
    您應該會在控制台看到類似 "Server running on port 3000" 和 "MongoDB Connected..." 的訊息。在使用應用程式時，請保持此伺服器運行。

---

## 📁 專案結構說明

```
nutriscan/
├── server/                 # Node.js 後端 (日記/歷史 API)
│   ├── config/
│   │   └── db.js           # MongoDB 連線設定
│   ├── models/
│   │   └── DiaryEntry.js   # DiaryEntry Mongoose Schema
│   ├── routes/
│   │   └── api.js          # API 路由 (/api/diary, /api/history)
│   ├── .env.example        # 後端環境變數範例
│   ├── package.json        # 後端依賴
│   └── server.js           # 後端主程式
├── api/
│   └── analyze.js      # Gemini 食物分析 Serverless Function (Vercel 部署用)
├── index.html          # 前端主頁 (Tailwind + 像素風 + 前端邏輯)
├── README.md           # 本說明檔案
└── .env                # Gemini API 金鑰 (根目錄, 若本機測試 /api/analyze 或 Vercel 開發環境)
```

---

## 🚀 本機完整運行應用程式

1.  **設定並啟動後端伺服器**：請參考上方的「本機後端設定」部分。
2.  **設定 Gemini API 金鑰**：如果您打算使用食物分析功能，請在專案根目錄的 `.env` 檔案中設定您的 Gemini API 金鑰 (這會用於 `/api/analyze.js`，它通常用於無伺服器部署，但某些本地開發服務器如 `vercel dev` 也可能運行它)。
    ```env
    GEMINI_API_KEY=你的_Gemini_API_金鑰
    ```
3.  **開啟 `index.html`**：直接在您的網頁瀏覽器中開啟專案根目錄下的 `index.html` 檔案。
    *   應用程式現在將使用本機後端 (預設運行於 `http://localhost:3000`) 來儲存和載入您的營養日記與歷史記錄。
    *   食物分析功能 ("Scan Food" 分頁) 透過 `/api/analyze` 運作，與日記後端是分開的。

---

## 📸 使用方式 (前端)

在後端伺服器運行且 `index.html` 已在瀏覽器中開啟後：

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

- **Gemini API 金鑰**: 儲存於根目錄的 `.env` 檔案中，供 `/api/analyze` 無伺服器函數使用 (通常用於 Vercel 等平台部署時的環境變數)。若正確部署，不會直接暴露給客戶端。
- **日記資料**: 透過本機後端伺服器儲存於您的 MongoDB 資料庫。請確保您的 MongoDB 實例安全。
- 前端 `index.html` 會向本機後端的 `http://localhost:3000/api` (預設) 發送請求以進行日記/歷史操作。

---

## 💡 待辦與未來功能

- [ ] 接 Firebase 儲存資料庫  
- [ ] 加入每日攝取目標與建議  
- [ ] 語音辨識輸入功能

