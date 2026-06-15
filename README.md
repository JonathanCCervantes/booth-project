# 📸 The Booth Project — Website

A clean, modern website for **The Booth Project** photo booth rental business in Metro Manila. Built with Vite + React + Tailwind CSS.

---

## 🚀 Getting Started

### What You'll Need First (Free Tools)

Before anything else, install these on your computer:

1. **Node.js** (the engine that runs everything)
   - Go to [nodejs.org](https://nodejs.org) → Click the big green **"LTS"** button → Install it
   - To check it worked: open Terminal (Mac) or Command Prompt (Windows) and type `node -v` → You should see a version number

2. **Git** (for uploading to GitHub)
   - Go to [git-scm.com](https://git-scm.com) → Download → Install (keep all defaults)

3. **A code editor** (optional but helpful for editing text)
   - [VS Code](https://code.visualstudio.com) — free, beginner-friendly

---

## 📥 Installing the Website on Your Computer

Open your Terminal / Command Prompt, then run these commands **one by one**:

```bash
# 1. Go to your Desktop (or wherever you want the project)
cd Desktop

# 2. Download this project (replace the URL with your GitHub repo link)
git clone https://github.com/YOUR-USERNAME/booth-project.git

# 3. Enter the project folder
cd booth-project

# 4. Install all the pieces the website needs
npm install
```

---

## 👀 Previewing the Website Locally

```bash
npm run dev
```

Then open your browser and go to: **http://localhost:5173**

You'll see your website live! Changes you make to files will update instantly.

To stop it, press `Ctrl + C` in the terminal.

---

## ✏️ How to Customize the Website

### 🖼️ Replacing the Logo

1. Save your logo file (PNG or SVG) into the `/src/assets/` folder
2. Open `/src/components/Navbar.jsx`
3. Find the comment that says `REPLACE YOUR LOGO HERE`
4. Follow the instructions in the comment

### 🖼️ Replacing Section Images

**Hero Background Image:**
- Open `/src/components/Hero.jsx`
- Find the comment `REPLACE YOUR HERO IMAGE HERE`
- Follow the 3-step instructions there

**Booth Photo (Inclusions section):**
- Open `/src/components/Inclusions.jsx`
- Find `REPLACE THE BOOTH IMAGE HERE`
- Follow the instructions

**Gallery Photos:**
- Put your event photos in `/src/assets/gallery/`
- Open `/src/components/Gallery.jsx`
- Find `REPLACE GALLERY IMAGES HERE`
- Import and add your photos following the instructions

### 📧 Updating Contact Information

Open `/src/components/Booking.jsx` and edit these lines near the top:

```js
const BUSINESS_EMAIL = 'theboothproject@gmail.com'  // ← Your email
const BUSINESS_PHONE = '0908 103 1814'               // ← Your number
const BUSINESS_LOCATION = 'Pasig City, Metro Manila' // ← Your location
const FACEBOOK_URL = 'https://facebook.com/...'      // ← Your FB page
const TIKTOK_URL = 'https://tiktok.com/@...'         // ← Your TikTok
```

### 💰 Updating Prices or Packages

Open `/src/components/Packages.jsx` and find the `packages` array. Each package has a `price` field — just change the number.

---

## 📤 Deploying (Making It Live on the Internet)

### Option 1: GitHub Pages (Free)

1. Push your code to GitHub (see below)
2. Go to your repo → **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Create a file at `.github/workflows/deploy.yml` and paste:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Your site will go live at: `https://YOUR-USERNAME.github.io/booth-project`

### Option 2: Netlify (Free, Easier)

1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Click **"Add new site"** → **"Import from Git"**
3. Connect your GitHub → Select this repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy** — done! You get a free URL instantly.

---

## 📤 Uploading Changes to GitHub

```bash
# 1. Stage all your changes
git add .

# 2. Save a snapshot with a message
git commit -m "Updated photos and contact info"

# 3. Push to GitHub
git push
```

---

## 📁 File Structure (What Each File Does)

```
booth-project/
├── index.html               ← The main HTML file (don't touch)
├── package.json             ← Lists all dependencies (don't touch)
├── vite.config.js           ← Build tool config (don't touch)
├── tailwind.config.js       ← Styling config (don't touch)
│
├── src/
│   ├── main.jsx             ← App entry point (don't touch)
│   ├── App.jsx              ← Assembles all sections (don't touch)
│   ├── index.css            ← Global styles (don't touch)
│   │
│   ├── assets/              ← ⭐ PUT YOUR IMAGES HERE
│   │   └── gallery/         ← ⭐ PUT YOUR GALLERY PHOTOS HERE
│   │
│   └── components/          ← Each section of the website
│       ├── Navbar.jsx       ← Top navigation + logo
│       ├── Hero.jsx         ← Big headline section
│       ├── Inclusions.jsx   ← Why Choose Us / perks grid
│       ├── Packages.jsx     ← Pricing cards
│       ├── Gallery.jsx      ← Photo gallery
│       └── Booking.jsx      ← Contact form + footer
```

---

## ❓ Common Issues

**"npm: command not found"**
→ Node.js isn't installed. Go back to the "What You'll Need First" section.

**"Port 5173 is already in use"**
→ Another dev server is running. Either stop it or the new one will auto-pick another port.

**Images not showing up**
→ Make sure the file is inside `/src/assets/` and the import path in the component matches the filename exactly (including capitalization).

**Form doesn't send**
→ The form uses `mailto:` which opens your email app. Make sure you have a default email app set up (Gmail, Outlook, etc).

---

## 🙋 Need Help?

Open a GitHub Issue on this repo or reach out to your developer.
