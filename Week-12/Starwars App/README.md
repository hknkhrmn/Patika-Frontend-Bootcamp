# 🚀 Galactic Database

A Star Wars starship explorer built with **React** and the **SWAPI (Star Wars API)**.  
Browse, search, and view detailed information about starships across the galaxy.

---

## ✨ Features

- 🔍 **Live Search** — Search starships by name  
- 🛰️ **Full Dataset Fetching** — Automatically loads *all* pages from SWAPI  
- 🖼️ **Smart Image System**
  - Tries multiple image sources
  - Smooth loading animation
  - Automatic fallback image if no source works
- 📄 **Detailed View Panel**
  - Crew
  - Passengers
  - Speed
  - Cargo Capacity
  - Model Name
- ⚡ **Optimized UX**
  - Debounced search
  - Loading indicators
  - Smooth image transitions

---

## 🧠 How the Image System Works

Each starship image is loaded using this order:

1. Star Wars Guide GitHub  
2. Star Wars Visual Guide GitHub  
3. Star Wars Wiki GitHub  
4. **Local fallback image** (stored in the project)

If all sources fail, a fallback image ensures the UI never breaks.

---

## 🛠️ Tech Stack

- **React**
- **SWAPI (Star Wars API)**
- CSS Utility Styling
- GitHub-hosted image sources

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/galactic-database.git
cd galactic-database
npm install
npm run dev
