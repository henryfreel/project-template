# Project Template

A static HTML/CSS website deployed via Netlify.

## Project Structure

```
├── index.html          # Main HTML page
├── css/
│   ├── reset.css       # CSS reset / normalize
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript entry point
├── assets/
│   ├── images/         # Image files
│   └── fonts/          # Custom font files
├── netlify.toml        # Netlify deployment config
└── .gitignore
```

## Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node (npx)
npx serve .
```

## Deployment

This project deploys automatically to Netlify when changes are pushed to the `main` branch on GitHub.

1. Push to GitHub
2. Connect the repo in [Netlify](https://app.netlify.com)
3. Set publish directory to `.` (root)
4. Every push to `main` triggers a deploy
