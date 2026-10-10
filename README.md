<div align="center">

# 🛒 বাজার দর | BazarDor

**আজকের বাজারের দাম এক নজরে**
*Today's grocery market prices in Bangladesh, at a glance.*

[![Live Demo](https://img.shields.io/badge/Live-Demo-05893e?style=for-the-badge&logo=vercel&logoColor=white)](https://bazar-dor-web-b14-ass-07-by-borshon.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-1d271f?style=for-the-badge&logo=github&logoColor=white)](<YOUR_GITHUB_REPO_LINK>)

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
   with skeleton loaders, toast notifications and a friendly 404 page.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 16** (App Router) | UI, routing, server rendering |
| **TypeScript** | Type-safe code |
| **Tailwind CSS** | Styling and responsiveness |
| **HeroUI v3** | Component library (Card, Button, Form, Input, Select) |
| **Better Auth** | Email/password, Google and GitHub authentication |
| **MongoDB (Atlas)** | User and session storage for Better Auth |
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

Product and category data come from the BazarDor API:
`https://api.abcz.workers.dev/api/bazardor`

## 🚀 Getting Started

**1. Clone and install**

```bash
git clone <YOUR_GITHUB_REPO_LINK>
cd bazardor-ass-07-app
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
```

OAuth callback URLs:

- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

**3. Run the app**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 👤 Author

**Borshon Roy**

---

