# 🚀 Galactic Database - Star Wars Starship Explorer

A stunning, futuristic web application for exploring Star Wars starships with real-time data from the SWAPI (Star Wars API). Built with React and styled with a cinematic sci-fi aesthetic featuring holographic effects, animated backgrounds, and smooth transitions.

![Star Wars](https://img.shields.io/badge/Star%20Wars-FFE81F?style=for-the-badge&logo=star-wars&logoColor=black)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🔍 **Real-time Search** - Instant search functionality with debounced API calls
- 🖼️ **Smart Image Loading** - Automatic fallback system for starship images from multiple sources
- 🎨 **Cinematic UI** - Holographic effects, scan line animations, and gradient overlays
- 📱 **Responsive Design** - Fully responsive layout that works on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🌌 **Animated Backgrounds** - Dynamic plasma and hyperspace effects
- 💫 **Smooth Transitions** - Elegant animations and hover effects throughout

## 🎬 Live Demo

**[View Live Demo](#)** 

## 📸 Screenshots

![](/public/images/GIF1.gif)

## 🛠️ Technologies Used

- **React 18** - Modern React with Hooks
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework with custom theme
- **SWAPI** - The Star Wars API for starship data
- **Google Fonts** - Orbitron & Rajdhani fonts for sci-fi aesthetic

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn


## 📁 Project Structure

```
galactic-database/
├── src/
│   ├── assets/
│   │   └── fallback-ship.jpg    # Fallback image for starships
│   ├── App.jsx                  # Main application component
│   └── index.css                # Global styles and Tailwind config
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Key Features Breakdown

### Smart Image Component
- Attempts to load images from multiple CDN sources
- Automatic fallback to default image if all sources fail
- Smooth loading transitions with skeleton screens

### Search Functionality
- Debounced search input (500ms delay)
- Searches across all starship properties
- Automatic pagination handling

### Visual Effects
- Holographic scan line animation
- Gradient text effects
- Corner brackets for futuristic framing
- Glow and shadow effects on hover
- Animated background blobs

## 🎯 Data Fields Displayed

- Ship Name & Model
- Crew Capacity
- Passenger Capacity
- Maximum Atmospheric Speed
- Cargo Capacity
- Manufacturer
- Starship Class
- Hyperdrive Rating

## 🌐 API Reference

This project uses the [Star Wars API (SWAPI)](https://swapi.dev/):
- Endpoint: `https://swapi.dev/api/starships/`
- No authentication required
- Free and open source

## 🎨 Custom Color Palette

```css
--color-void: #0b0d17        /* Deep space background */
--color-space: #1a1d29       /* Secondary background */
--color-plasma: #4facfe      /* Primary accent (cyan) */
--color-warning: #ffe81f     /* Highlights (yellow) */
--color-empire: #ff0033      /* Borders (red) */
--color-hyperspace: #00f2fe  /* Hover effects (turquoise) */
```

## 🔧 Customization

### Changing Colors
Edit the color variables in `src/index.css` under the `@theme` section.

### Adding More Data Fields
Add new `DataField` components in the ship details section of `App.jsx`.

### Modifying Animations
Adjust animation durations and effects in `src/index.css` and inline styles in components.

## 🙏 Acknowledgments

- Star Wars API (SWAPI) for providing the data
- Multiple Star Wars image repositories on GitHub
- Google Fonts for the Orbitron and Rajdhani typefaces
- The Star Wars universe created by George Lucas

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)



---

*May the Force be with you!* 