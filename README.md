# 🚀 Bilingual 16Personalities Test & Dynamic Cognition Canvas

A premium, interactive, and fully bilingual (English & Sinhala) personality testing and analysis application. This project features a high-fidelity psychometric engine, a real-time morphing neon pentagon canvas, a shareable ID card export engine, romantic compatibility matching, and character battle synergy dashboards.

---

## 🌟 Key Features

### 1. 🌐 100% Bilingual Support (English & Sinhala)
* Seamless real-time hot-swapping between English and Sinhala languages.
* Translates all elements instantly, including questions, detailed descriptions, category badges, quote boxes, and interactive menus.

### 2. 🔘 Interactive 7-Point Likert Scale
* Replaces rigid binary options with a proportional 7-circle Likert scale (Strongly Agree to Strongly Disagree).
* Proportional scoring weights (`+3` to `-3`) calculate highly precise, fine-grained trait percentage splits (e.g. 71% Extravert vs. 29% Introvert).
* Immersive hover/selection neon glows (Emerald for Agree, Coral for Disagree).
* Fully mobile-responsive layout (flex wrap with top-row labels on narrow viewports).

### ⚡ 3. Flexible Test Depth (Quick vs. Deep)
* **Quick Test (30 Questions)**: A fast, 5-minute personality scan utilizing a scientifically balanced question subset (6 per dimension, balanced positive/negative keying).
* **Deep Test (60 Questions)**: A comprehensive, 10-minute detailed profile blueprint containing the full question database.

### 🌀 4. The Morphing Cognition Canvas
* An interactive workspace where users can manually adjust MBTI trait sliders.
* A floating, animated neon polygon rendered on an HTML5 canvas morphs its vertices dynamically.
* Real-time Linear Interpolation (LERP) blends and transitions colors smoothly as personality category boundaries (Analysts, Diplomats, Sentinels, Explorers) are crossed.

### 📇 5. Shareable ID Card Export
* Render and download a high-resolution, custom 800x500px virtual identity card.
* Draws a dark radial background, neon corner accents, avatar illustration, type code, name, and the user's custom morphing pentagon shape.

### ❤️ 6. Romantic Compatibility & Love Matches
* Recommends the ideal Male and Female romantic partners for each of the 16 types.
* Displays a detailed bilingual relationship chemistry description.
* Interconnected navigation: click on any match card to instantly view that partner's personality profile.

### ⚔️ 7. Character Battle & Synergy
* Calculate synergy scores between your profile and popular real/fictional figures (Steve Jobs, Sherlock Holmes, Anime characters, etc.).
* Visualizes shared cognitive overlaps using overlapping glassmorphic Venn diagrams.

---

## 📂 Project Structure

```bash
16 Personalities/
├── test.html       # The compiled, single-file production web application
├── css/
│   └── style.css   # Modular styling rules, animations, and CSS custom properties
├── js/
│   ├── data.js     # Question database, category info, and bilingual translations
│   └── script.js   # Application logic, Canvas animations, and UI controllers
├── sync.js         # Node.js bundler script to compile style.css and js/ files into test.html
└── README.md       # Project documentation (this file)
```

---

## 🛠️ Technology Stack

* **Frontend**: HTML5, Vanilla CSS3 (Custom properties, CSS animations, Flexbox/Grid layouts).
* **Scripting**: Modern Vanilla Javascript (ES6+, requestAnimationFrame rendering, HTML5 Canvas API, LERP transitions).
* **Zero External Dependencies**: The application runs completely client-side in any modern web browser without requiring external libraries, frameworks, or database servers.

---

## 🚀 Development Workflow

The project is structured with modular files for easy maintenance, which are bundled into a standalone `test.html` file for deployment.

### 1. Run Locally
Open `test.html` directly in any web browser:
```bash
# Double click test.html or open it in your browser
```

### 2. Make Modifications
* Edit core styling and design tokens in `css/style.css`.
* Edit questions, translations, or personality database entries in `js/data.js`.
* Edit animation loops, scoring algorithms, or canvas features in `js/script.js`.

### 3. Compile/Bundle Changes
Compile the modular styles and scripts back into the standalone `test.html` file by running the bundling script using Node.js:
```bash
node sync.js
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE details for more information.
