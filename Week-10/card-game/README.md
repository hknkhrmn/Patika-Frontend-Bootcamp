# 🏀 NBA Star Memory Game

A fast-paced, interactive memory card game built with **React**. Test your memory by matching the greatest NBA stars across different difficulty levels.

## 🚀 Features

* **Three Difficulty Levels:** * **EASY:** 12 cards (4x3 grid) - Perfect for a quick warm-up.
    * **MEDIUM:** 24 cards (6x4 grid) - The standard challenge.
    * **HARD:** 50 cards (10x5 grid) - Only for true Hall of Famers.
* **NBA Aesthetics:** Custom UI featuring official NBA team colors (Blue, Red, and Gold).
* **Performance Tracking:** Real-time stats for **Move Count** and **Elapsed Time**.
* **Immersive Animations:** Smooth 3D card-flip effects using CSS `transform-style: preserve-3d`.
* **Responsive Grid:** Dynamic layout that adjusts based on the selected difficulty.

## 🛠️ Tech Stack

* **Core:** React (Functional Components & Hooks)
* **State Management:** `useReducer` for complex game logic and transitions.
* **Lifecycle:** `useEffect` for timer synchronization and match checking.
* **Styling:** CSS3 (Advanced Grid & Flexbox)

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/nba-memory-game.git](https://github.com/yourusername/nba-memory-game.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Asset Setup:**
    Ensure your player images are located in `public/images/` and named `card1.jpg` through `card25.jpg`.
4.  **Launch the game:**
    ```bash
    npm run dev
    ```

## 🎮 How to Play

1.  **Select Level:** Choose between EASY, MEDIUM, or HARD at the top menu.
2.  **Start Match:** Click the **"START MATCH"** button to shuffle and deal the cards.
3.  **Find Pairs:** Click a card to flip it, then find its match. 
4.  **Win:** Match all pairs in the shortest time possible to secure your spot as the **MVP!**

---
*Developed with ❤️ for NBA fans and React learners.*