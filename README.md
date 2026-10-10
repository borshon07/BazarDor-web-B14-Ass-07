<div align="center">

# 🛒 বাজার দর | BazarDor

**আজকের বাজারের দাম এক নজরে**
*Today's grocery market prices in Bangladesh, at a glance.*

[![Live Demo](https://img.shields.io/badge/Live-Demo-05893e?style=for-the-badge&logo=vercel&logoColor=white)](https://bazar-dor-web-b14-ass-07.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-1d271f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/borshon07/BazarDor-web-B14-Ass-07)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![HeroUI](https://img.shields.io/badge/HeroUI-v3-000000)
![Better Auth](https://img.shields.io/badge/Better_Auth-1d271f)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

</div>

---

## 📖 About

**বাজার দর (BazarDor)** is a Bangla web app that helps people track the daily
prices of everyday essentials such as rice, pulses, oil, vegetables, fish,
meat, eggs, milk and spices. Users can see how prices changed since yesterday,
compare prices across different bazars, and explore each product in detail, all
in one clean and responsive interface.

## ✨ Key Features

1. **📈 Live price overview** – an infinite scrolling price ticker, plus the
   top 6 price risers and top 6 fallers of the day with ▲ / ▼ change badges.
2. **🗂️ Category browsing and sorting** – browse products by category, and sort
   them by default order, price low to high, or price high to low.
3. **🏪 Bazar-wise product details** – minimum, maximum and average price, with
   a table of prices from different bazars (protected, login required).
4. **🔐 Secure authentication** – sign up and sign in with email/password,
   Google or GitHub using Better Auth, plus a profile page where users can
   update their name.
5. **📱 Smooth, responsive experience** – works on mobile, tablet and desktop,
   with a light / dark theme toggle, skeleton loaders, toast notifications and
   a friendly 404 page.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | UI, routing, server rendering |
| **TypeScript** | Type-safe code |
| **Tailwind CSS** | Styling and responsiveness |
| **HeroUI v3** | Component library (Card, Button, Form, Input, Select) |
| **Better Auth** | Email/password, Google and GitHub authentication |
| **MongoDB (Atlas)** | User and session storage for Better Auth |
| **next-themes** | Light / dark theme switching |
| **react-hot-toast** | Toast notifications |
| **Vercel** | Deployment |

## 🗺️ Pages

| Route | Access | Description |
|---|---|---|
| `/` | Public | Hero, price movers and all products |
| `/category/[slug]` | Public | Products of one category |
| `/product/[slug]` | 🔒 Protected | Product details and bazar-wise prices |
| `/signin`, `/signup` | Public | Authentication |
| `/profile` | 🔒 Protected | User information |
| `/profile/update` | 🔒 Protected | Update name |

Logged-out users who open a protected page are redirected to `/signin` with a
toast message. Unknown routes show a custom 404 page.

## 🌐 Data Source

Product and category data come from the BazarDor API:

```
https://openapi.programming-hero.com/api/bazardor
```

| Endpoint | Purpose |
|---|---|
| `/categories` | All categories |
| `/categories/[slug]` | One category |
| `/products` | All products |
| `/products?category=[slug]` | Products of one category |
| `/products/[id]` | One product with bazar-wise prices |

## 🚀 Getting Started

**1. Clone and install**

```bash
git clone https://github.com/borshon07/BazarDor-web-B14-Ass-07.git
cd BazarDor-web-B14-Ass-07
npm install
```

**2. Create a `.env` file** in the project root:

```env
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# optional (defaults to the official BazarDor API)
BAZARDOR_API_URL=https://openapi.programming-hero.com/api/bazardor
```

OAuth callback URLs (local):

- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

**3. Run the app**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📜 Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the code
```

## ☁️ Deployment

The app is deployed on **Vercel**. Add the same environment variables in
Vercel (**Settings → Environment Variables**), then redeploy:

- `BETTER_AUTH_URL` must be the live site URL, with no trailing slash
- Add the production callback URLs to the Google and GitHub OAuth apps:
  - `https://bazar-dor-web-b14-ass-07.vercel.app/api/auth/callback/google`
  - `https://bazar-dor-web-b14-ass-07.vercel.app/api/auth/callback/github`
- Allow Vercel to reach MongoDB Atlas (**Network Access**)

## 📝 Notes

- Accounts with the same email are linked across email/password, Google and
  GitHub sign in.
- Email verification and forgot-password are intentionally not included.

## 👤 Author

**Borshon Roy**

---

<div align="center">

Made with ❤️ for BazarDor

</div>