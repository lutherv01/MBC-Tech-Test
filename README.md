This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Structure

```
mbc/
├── public/           # Static assets (images, logos, etc.)
├── src/
│   ├── app/          # Next.js app directory (pages, layouts, styles)
│   │   ├── divisi/   # Divisi (division) page
│   │   ├── kontak/   # Contact page
│   │   ├── tentang/  # About/Developer page
│   │   ├── layout.js # Root layout
│   │   └── globals.css # Global styles
│   └── components/   # Reusable React components (Header, Footer, etc.)
├── package.json      # Project dependencies and scripts
├── next.config.mjs   # Next.js configuration
└── ...               # Other config and lock files
```

- **`src/app/`**: Main application pages and layouts.
- **`src/components/`**: Shared UI components.
- **`public/`**: Static files served at the root URL.

## Local Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd mbc
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy on Vercel (Recommended)

- Push your code to GitHub/GitLab/Bitbucket.
- Go to [Vercel](https://vercel.com/import) and import your project.
- Set up environment variables if needed.
- Vercel handles SSL automatically for custom domains.

### Manual Deployment

1. **Build the app:**
   ```bash
   npm run build
   ```
2. **Start the production server:**
   ```bash
   npm start
   ```
3. **For custom domains:**
   - Use a reverse proxy (e.g., Nginx) to serve your app and handle SSL (see below).

## SSL Configuration (Manual/Custom Domain)

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
