# Adib Ben Helal — Portfolio

Personal portfolio website built with pure HTML, CSS, and JavaScript.

## Structure
```
portfolio/
├── index.html          ← HTML only
├── css/
│   ├── style.css       ← layout + components
│   ├── animations.css  ← @keyframes
│   └── terminal.css    ← terminals + cmdbar + loader
├── js/
│   ├── data.js         ← all static data (boot lines, commands)
│   ├── nav.js          ← scroll nav + theme toggle
│   ├── animations.js   ← page loader + year
│   ├── terminal.js     ← about terminal + cmd bar logic
│   └── main.js         ← EmailJS init + contact form
├── assets/
│   ├── photo.jpg       ← your profile photo
│   └── cv.pdf          ← your CV
├── CNAME               ← adib.eu.org
├── .gitignore
└── README.md
```

## Deploy
```bash
git init
git add .
git commit -m "init portfolio"
git remote add origin https://github.com/AdibBENHLEL/portfolio.git
git push -u origin main
```
Then enable GitHub Pages in repo Settings → Pages.

## Local dev
```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Live
https://adib.eu.org
