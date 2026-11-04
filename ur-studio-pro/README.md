# UR Studio — Project Refresh

A reorganized Arabic-first storefront, a local operations/finance dashboard prototype, and a starter Express/SQLite API.

## Project structure

```text
ur-studio-pro/
├── index.html
├── admin.html
├── assets/css/{styles.css,polish.css,admin.css}
├── assets/js/{app.js,admin.js}
├── backend/{package.json,.env.example,server.js,create-admin.js}
├── database/schema.sql
└── README.md
```

## Run the storefront and dashboard preview

```bash
cd ur-studio-pro
python -m http.server 5500
```

Open `http://localhost:5500` for the storefront and `http://localhost:5500/admin.html` for the dashboard preview.

The dashboard preview shares browser `localStorage` with the storefront, so orders created in that same browser appear there. It can record expenses, update order workflow, mark a transfer as confirmed, calculate summary figures, and export orders as CSV.

## Important: demo dashboard vs real financial system

The static dashboard is a **local prototype**, not a secure accounting system. Its records are stored in the current browser only and are not synchronized across devices or users. It has no real administrator login. Do not use it as the source of truth for real customer accounts, payment confirmation, or business bookkeeping.

The `backend/` directory is a separate API starter with password hashing (bcrypt), server-side SQLite sessions, customer/admin roles, protected admin endpoints, SQLite tables for users/orders/transactions/expenses/audit history, payment states, and audit records. The storefront has **not yet been wired to this API**. Before production, connect the frontend to these endpoints, remove the demo admin link, add CSRF protection and origin restrictions appropriate to deployment, configure HTTPS and a strong session secret, back up the database, and test the full payment lifecycle. Confirm payments only after checking the provider/bank record; a customer's checkbox or WhatsApp message is not proof of receipt.

## Start the API

Requires Node.js 20+ and build tools supported by `better-sqlite3`.

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set a long random `SESSION_SECRET`. Then create an administrator from environment variables:

```bash
ADMIN_NAME="UR Studio Admin" ADMIN_EMAIL="admin@example.com" ADMIN_PASSWORD="use-a-unique-password-at-least-12-characters" node create-admin.js
```

Start with `npm start`. Health check: `http://localhost:3000/api/health`.

## Main API routes

| Method | Route | Access |
|---|---|---|
| POST | `/api/auth/register` | Public |
| POST | `/api/auth/login` | Public |
| POST | `/api/auth/logout` | Signed in |
| GET | `/api/auth/me` | Signed in |
| POST | `/api/orders` | Customer |
| GET | `/api/orders/mine` | Customer |
| GET | `/api/admin/summary` | Admin |
| GET | `/api/admin/orders` | Admin |
| PATCH | `/api/admin/orders/:id/payment` | Admin |
| POST | `/api/admin/orders/:id/collect` | Admin (additional installment) |
| PATCH | `/api/admin/orders/:id/status` | Admin |
| POST | `/api/admin/expenses` | Admin |
| GET | `/api/admin/expenses` | Admin |

## Configuration

The storefront settings are near the top of `assets/js/app.js` in `CONFIG` (WhatsApp number, deposit percentage, payment methods). Package prices and features are in `PLANS`. Check these before publishing. Never put private API keys, passwords, or admin credentials in frontend files.

## Notes

- The supplied original storefront was retained as the design/content base, then separated into HTML, CSS, and JavaScript files.
- The existing customer sign-in in the static storefront remains a browser-only demo. Replace it with the API session flow before production.
- This is a starter project, not a claim of completed payment-gateway integration, tax/accounting compliance, or production security review.
