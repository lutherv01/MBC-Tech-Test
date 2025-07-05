#MBC Laboratory Landing Page

Pembuatan landing page MBC Laboratory yang menampilkan informasi aktual dan terkini mengenai MBC Laboratory dan dibuat dengan NextJS dan EmailJS yang mana pengunjung dapat meninggalkan pesan yang akan terkirim secara otomatis melalui email.

Site dapat dikunjungi di [ http://www.mbc-tech-test.my.id ]

## Struktur Proyek

```
mbc/
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/ #THIS CONTAINS ASSET (IMAGE)
├── README.md
└── src/
    ├── app/
    │   ├── divisi/
    │   │   └── page.jsx #Halaman Divisi
    │   ├── kontak/
    │   │   └── page.jsx #Halaman Kontak
    │   |── tentang/
    │   |   └── page.jsx #Halaman Tentang atau Developer
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.js
    │   └── page.jsx #Halaman Utama
    └── components/ #Komponen UI Seperti Header, Footer, dan lain sebagainya
        ├── About.jsx
        ├── Footer.jsx
        ├── Header.jsx
        ├── Hero.jsx
        └── VisionMission.jsx
```

## Instalasi

1. **Clone repository:**
   ```bash
   git clone <your-repo-url>
   cd mbc
   ```
2. **Install framework:**
   ```bash
   npm install
   ```
3. **Jalankan proyek secara lokal:**
   ```bash
   npm run dev
   ```

## Deployment

Proyek ini menggunakan vercel sebagai developer.

1. Proyek disimpan pada repository github.
2. Buka vercel dan kaitkan dengan akun github.
3. Import dengan repository yang sesuai.

   ![Import_mbc](@vercel1.png)

Selain itu, proyek ini menggunakan custom domain.

1. Buka 'Project Settings'.
2. Buka 'Domains'.
3. Setelah itu 'Add Domain'.
4. Sesuaikan CNAME dan A, kemudian tunggu beberapa saat.

## SSL Configuration

- **Vercel:** SSL is automatic for all deployments and custom domains.
- **Manual (Nginx example):**

  1. Obtain an SSL certificate (e.g., via [Let's Encrypt](https://letsencrypt.org/)).
  2. Configure Nginx:

     ```nginx
     server {
       listen 443 ssl;
       server_name yourdomain.com;
       ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

       location / {
         proxy_pass http://localhost:3000;
         proxy_set_header Host $host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
       }
     }
     ```

  3. Reload Nginx after changes.

## Backend

- **This project is frontend-only (Next.js/React).**
- For backend/API needs, you can:
  - Use Next.js API routes (add files in `src/app/api/`)
  - Connect to external APIs or a separate backend server
- Email sending uses [EmailJS](https://www.emailjs.com/) (client-side integration, no backend required for contact form).

---

For more details, see the Next.js and Vercel documentation.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
