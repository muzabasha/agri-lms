# AI/ML in Agriculture - Interactive Learning Platform

A comprehensive Learning Management System (LMS) for teaching Artificial Intelligence and Machine Learning in Agriculture.

## Features

- **15 Interactive Topics** across 4 modules
- **Continuous Storytelling** following Maya's journey from farmer to AI innovator
- **Google Colab Integration** for hands-on Python coding
- **Progress Tracking** with localStorage persistence
- **Responsive Design** works on desktop, tablet, and mobile
- **Dark Mode** support
- **Zero Dependencies** - runs entirely in the browser

## Quick Start

### Local Development

1. Clone this repository
2. Open `index.html` in your browser
3. Start learning!

No build process or server required - it's a static site.

### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select "Deploy from branch"
4. Choose `main` branch and `/` (root) folder
5. Click Save
6. Your site will be available at `https://[username].github.io/[repo-name]`

## Project Structure

```
agri-lms/
├── index.html          # Main entry point
├── css/
│   └── main.css        # All styles
├── js/
│   ├── app.js          # App initialization
│   ├── content.js      # Course content
│   ├── story.js        # Storytelling narrative
│   ├── router.js       # SPA routing
│   └── progress.js     # Progress tracking
├── data/               # Additional data files
├── presentations/      # Slide decks
└── assets/            # Images and icons
```

## Course Modules

### Module 1: Fundamentals of AI and Python
- Introduction to AI/ML & Agriculture
- Math Foundations & Data Collection
- Python Programming Basics (Parts 1 & 2)

### Module 2: Python & ML Fundamentals
- Data Science Libraries (NumPy, Pandas)
- Data Visualization (Matplotlib, Seaborn)  
- ML Fundamentals & Regression
- Classification & Model Evaluation

### Module 3: AI/ML Applications in Agriculture
- Predictive Analytics (Yield, Weather, Soil)
- Disease &Pest Management (Computer Vision)
- Soil & Resource Management (Clustering)
- Market & Weather Analysis (Time Series)

### Module 4: Capstone Project & Evaluation
- Project Planning & Design
- Implementation & Development
- Evaluation & Presentation

## Storytelling

The platform features a continuous narrative following **Maya**, a farmer who discovers AI/ML and transforms her farm. Each topic advances her story, making learning engaging and relatable. 

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No framework dependencies
- **LocalStorage API** - Progress persistence
- **Hash-based Routing** - SPA navigation
- **Font Awesome** - Icons
- **Google Colab** - Code execution environment

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - Free to use for educational purposes

## Contact

For questions or feedback about the course content, please open an issue.

---

**Built with ❤️ for farmers and students learning AI/ML in Agriculture**
