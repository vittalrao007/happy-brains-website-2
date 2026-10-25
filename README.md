# Happy Brains Pre School & Daycare Website

A warm, pastel-themed, mobile-first website for **Happy Brains Pre School & Daycare**, crafted to faithfully recreate the visual identity, gentle palette, typography, phone calling actions, and WhatsApp enquiries seen in the design reference.

The website is powered by a centralized business details file (`business_details.txt`) and a build-time script that resolves placeholders and outputs a deployable static site.

---

## 📁 Project Structure

```text
├── business_details.txt           # Master configuration file (edit school details here)
├── business_details.template.txt  # Clean template with placeholders
├── package.json                   # Dependencies and build scripts
├── scripts/
│   └── build-site.mjs             # Parses business_details.txt, verifies links, outputs JSON/TS
├── public/
│   ├── assets/
│   │   ├── logo.svg               # School logo vector
│   │   └── ...                    # Static icons & reference assets
├── src/
│   ├── assets/images/             # High-resolution photographic assets
│   ├── components/                # Header, Footer, FloatingWhatsApp, YellowCTA, ConfigDrawer
│   ├── content/                   # Auto-generated businessDetails.json & businessDetails.ts
│   ├── context/                   # BusinessDetailsContext React state provider
│   ├── pages/                     # Home, About, Programs, Daycare, Facilities, Gallery, Admissions, FAQ, Contact, Privacy
│   ├── types/                     # PageId and navigation type definitions
│   ├── App.tsx                    # Main layout and hash router
│   ├── index.css                  # Tailwind styles and pastel theme utilities
│   └── main.tsx                   # React DOM root entry
└── README.md                      # Documentation & deployment guide
```

---

## 🚀 Quick Start Guide

### 1. How to Edit Business Details (`business_details.txt`)

All preschool information is managed centrally in `business_details.txt` at the root of the project:

```ini
# PRESCHOOL IDENTITY
Preschoolname=Happy Brains Pre School
Tagline=Little Steps Today, Bright Futures Tomorrow!
Principalname=Mrs. Sharma

# CONTACT INFORMATION
Preschoolphonenumber=+91 98765 43210
WhatsAppnumber=+91 98765 43210
Emailaddress=admissions@kiddiesworld.edu

# ADDRESS
Addressline1=12th Main Road, 4th Block
Area=Koramangala
City=Bengaluru
State=Karnataka
Pincode=560034
```

- When you change the phone or WhatsApp numbers, the site automatically creates real dialer links (`tel:+919876543210`) and WhatsApp pre-filled chat links (`https://wa.me/919876543210?text=...`).
- When you update programs, operating hours, or address, all page templates reflect your changes instantly.

### 2. How to Add or Replace Logos & Photographs

- **Logo**: Replace `/public/assets/logo.svg` or specify your custom image path in `LogoPath` inside `business_details.txt`.
- **Photos**: Drop new JPG/PNG photos into `/src/assets/images/` and update references in `src/assets/images/index.ts`.

### 3. How to Install Dependencies

Run:
```bash
npm install
```

### 4. How to Run the Website Locally

Start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 5. How to Build the Production Website

To parse `business_details.txt` and produce the production bundle:
```bash
npm run build
```
The finished, standalone website is created in the `dist/` directory.

### 6. How to Identify Unresolved Placeholders

Run the validator script directly anytime:
```bash
node scripts/build-site.mjs
```
The script will output a clean terminal report:
- Total keys parsed
- Active programs, FAQs, and testimonials
- Any remaining bracketed placeholders (such as `[Principalname]` or `[FEE DETAILS]`)

You can also click the **"Config & Placeholders"** button in the bottom-left corner of the website at runtime to inspect the status of every parameter.

### 7. How to Deploy the Website for Free

The output inside `dist/` is 100% static and requires no backend, database, or paid APIs. You can host it for free on:

#### Free Option A: Cloudflare Pages
1. Push this repository to GitHub or GitLab.
2. Sign in to [Cloudflare Pages](https://pages.cloudflare.com/) (free tier).
3. Connect your repository.
4. Set Build command to: `npm run build`
5. Set Build output directory to: `dist`
6. Click **Deploy**. Your website is live worldwide with free SSL and custom domain support!

#### Free Option B: GitHub Pages
1. In your GitHub repository, go to **Settings > Pages**.
2. Select **GitHub Actions** as the source.
3. Use the standard Vite static site deployment action.
4. Set the artifact path to `dist/`.

#### Free Option C: Netlify / Vercel
- Both support free drag-and-drop or Git connection. Build command: `npm run build`, publish directory: `dist`.

### 8. How to Rebuild After Changing Business Details

Whenever you modify `business_details.txt`:
```bash
npm run build
```
Or if you just want to re-generate the data file without rebuilding the full bundle:
```bash
npm run build:details
```

---

## 🎨 Design Reference & Colors

The design closely matches the reference mobile screenshots:
- **Pale Blush Pink**: `#FFF4F1`
- **Soft Sky Blue**: `#DFF2FC`
- **Warm Pastel Yellow**: `#FFC83D` (Call button & accents)
- **Mint Green**: `#DDF5E8`
- **WhatsApp Green**: `#20A464` (Chat button & floating icon)
- **Dark Navy Text / Footer**: `#172A3A`
- **Font**: Plus Jakarta Sans (clean, warm, friendly rounded sans-serif)
