# Quick Start Guide

## 🚀 Get the Demo Running in 3 Steps

### Step 1: Open in Cursor
1. Open Cursor IDE
2. File → Open Folder
3. Select the `aesthetic-gardener-demo` folder

### Step 2: Install Dependencies
Open the terminal in Cursor (View → Terminal) and run:
```bash
npm install
```

This will take 1-2 minutes to install all necessary packages.

### Step 3: Start the Dev Server
```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

## 🎬 Showing the Demo

### Best Way to Present
1. **Full screen** the browser (F11)
2. **Start scrolling slowly** from the top
3. **Point out animations** as they happen
4. **Hover over cards** in the Services section to show interactivity
5. **Hover over gallery images** to show the overlay effect

### Side-by-Side Comparison
Have two browser windows open:
- Left: His current site (https://www.aestheticgardener.net/)
- Right: Your demo (http://localhost:3000)

Switch between them to show the transformation!

## 🛠️ Making Quick Changes

### Change Colors
Edit: `tailwind.config.ts`
- Lines 12-40 have the color definitions

### Change Text
Edit: `components/Hero.tsx`, `components/Services.tsx`, etc.
- All the text content is in these component files

### Change Images
- All images are from Unsplash currently
- Just replace the URL in the component files
- Format: `https://images.unsplash.com/photo-...`

## ⚠️ Common Issues

### "Cannot find module"
Run: `npm install` again

### Port 3000 already in use
Either:
- Kill the other process using port 3000, or
- Run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Changes not showing
- Save the file (Cmd+S / Ctrl+S)
- Refresh the browser
- Sometimes restart the dev server (Ctrl+C, then `npm run dev`)

## 📋 Pre-Meeting Checklist

Before meeting with the client:
- [ ] Dev server is running
- [ ] Site loads without errors
- [ ] You've practiced scrolling through it
- [ ] You know how to explain each section
- [ ] You have DEMO_NOTES.md open for reference
- [ ] Your pricing is ready
- [ ] You can confidently talk about "what's next"

## 💡 Pro Tips

1. **Practice first**: Run through the demo alone a few times
2. **Have notes ready**: Keep DEMO_NOTES.md open on another screen
3. **Be ready to make changes**: If they want to see different colors or text, you can do it live!
4. **Confidence is key**: You built something impressive - own it!

## 🎯 The Money Shot

The moment that usually gets the "wow":
- **Scroll to the Hero section** and let the animations play
- **Then hover over the Service cards** to show the lift effect
- **Then show the Gallery** and hover over images

These three moments show polish and professionalism that their current site doesn't have.

---

**You're ready! Now go close this deal! 💪**
