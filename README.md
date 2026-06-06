# Namaste Haifa – QR Ordering System

## Files

| File | Purpose |
|------|---------|
| `index.html` | Customer menu (QR points here) |
| `kitchen.html` | Kitchen display – live orders, mark done |
| `orders.html` | Front staff – bills per table, clear when paid |
| `qr-generator.html` | Print QR codes for all tables |
| `menu.js` | Menu data (edit to update menu) |
| `firebase-config.js` | **Fill this in with your Firebase keys** |

## Setup

### 1. Firebase

1. Go to https://console.firebase.google.com
2. Create a new project (free Spark plan)
3. Enable **Realtime Database** → Start in test mode
4. Go to Project Settings → Your apps → Add web app
5. Copy the config object into `firebase-config.js`

**Set Realtime Database rules** (Rules tab):
```json
{
  "rules": {
    "orders": {
      ".read": true,
      ".write": true
    }
  }
}
```

### 2. Deploy to GitHub Pages

1. Create a new GitHub repo: `namaste-haifa-ordering`
2. Push all files to the `main` branch
3. Go to repo Settings → Pages → Source: `main` branch
4. Your URL: `https://yourusername.github.io/namaste-haifa-ordering`

### 3. Generate QR Codes

1. Open `qr-generator.html` in a browser
2. Enter your live GitHub Pages URL
3. Click Print

### 4. Staff Bookmarks

Pin these tabs on the kitchen tablet and front desk tablet:
- Kitchen: `https://yourusername.github.io/namaste-haifa-ordering/kitchen.html`
- Front desk: `https://yourusername.github.io/namaste-haifa-ordering/orders.html`

## PIN

Default staff PIN: `0000` — change in `firebase-config.js`

## Updating the Menu

Edit `menu.js`, push to GitHub. Changes go live in ~1 minute.
