# 🏦 CoreBank — NextGen Pakistani Enterprise Digital Banking Platform

[![Framework](https://img.shields.io/badge/.NET-10.0.400-512BD4?logo=dotnet)](https://dotnet.microsoft.com/)
[![Frontend](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Database](https://img.shields.io/badge/Database-Neon%20PostgreSQL-00e599?logo=postgresql)](https://neon.tech/)
[![Payment](https://img.shields.io/badge/Payment-PayFast%20%2F%201--Link%20Sandbox-22c55e)](#-payfast--1-link-sandbox-integration)
[![Architecture](https://img.shields.io/badge/Architecture-Clean%20Architecture%20%2B%20CQRS-22c55e)](#-project-architecture)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A high-performance, audit-grade commercial digital banking platform built with **.NET 10** following **Clean Architecture** and **CQRS** principles, coupled with a localized commercial banking web app built using **React 18, Vite, TypeScript, and Tailwind CSS v4**. Fully localized for **Pakistan** (Pakistani Rupee `PKR` / `Rs.`, SBP regulation, 1-Link network, Raast QR, and HBL/Meezan/ABL/MCB bank integrations).

---

## 📌 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Technology Stack & Core Skills](#-technology-stack--core-skills)
- [Project Architecture](#-project-architecture)
- [Pakistani Localization & Banking Ecosystem](#-pakistani-localization--banking-ecosystem)
- [Neon PostgreSQL & PayFast Sandbox Integration](#-neon-postgresql--payfast-sandbox-integration)
- [Directory & Folder Structure](#-directory--folder-structure)
- [How to Run in Visual Studio Code](#-how-to-run-in-visual-studio-code)
- [Free Cloud Deployment Instructions](#-free-cloud-deployment-instructions)
- [Roadmap & Coming Soon](#-roadmap--coming-soon)

---

## 🌟 Project Overview

CoreBank is an end-to-end Pakistani digital banking platform designed to handle real-time account ledgers, SBP-regulated commercial credit lines, KIBOR-benchmarked loans, Raast QR payments, 1-Link utility bill payments, and PayFast sandbox checkouts.

The system separates business logic from infrastructure using a strict **4-layer Clean Architecture** pattern, providing extension points for transaction processing, JWT role authorization, real-time SignalR notifications, QuestPDF vector statement generation, and PostgreSQL cloud persistence via Neon.tech.

---

## ✨ Key Features

### 💻 Executive Banking Frontend (React 18 + Vite + Tailwind v4)
- **Overview Analytics Dashboard (`/dashboard`)**: Real-time PKR net liquidity metrics, visual SVG area charts, quick transfer triggers, and recent transaction ledgers.
- **Institutional Bank Accounts (`/accounts`)**: HBL Corporate Checking, Meezan Islamic Savings (12.4% APY), Allied Money Market Liquidity (ABL), and MCB Mahana Amdani Term Deposits with SBP IBAN copy buttons (`PK36 HABB...`).
- **Utility Bill Payments & Mobile Recharge (`/bills`)**: 
  - Electricity: K-Electric (Karachi), LESCO, IESCO, FESCO.
  - Sui Gas Utilities: SSGC & SNGPL.
  - Telecom & Mobile Load: Jazz/Warid, Telenor, Zong 4G, Ufone 4G bundle selectors.
  - Live 1-Link consumer bill lookup simulation & instant payment receipts.
- **Raast QR Code Pay (`/qr-pay`)**:
  - Interactive camera viewfinder scanning simulator for merchant checkout (Al-Fateh Mall, Shell, K-Electric, NayaPay).
  - Personal SBP Raast QR code generator to receive instant payments.
- **Official Stamped PDF Statement Generator**:
  - State Bank of Pakistan (SBP) verified stamp badge, customer CNIC (#42101-9876543-1), itemized transaction ledger, and QuestPDF vector print engine.
- **Dark / Light Mode Theme Toggle**:
  - High-contrast custom theme toggle with `localStorage` persistence.
- **Virtual & Physical Payment Cards (`/cards`)**: PayPak, UnionPay & Visa metallic card renders, spending limit controls, CVV reveal, and PIN reset.
- **Admin & Compliance Console (`/admin`)**: Institutional liquidity stats, system health monitoring, and immutable audit logs.

### ⚙️ Enterprise .NET 10 Backend (C# 13)
- **Clean Architecture**: 4 distinct projects (`Domain`, `Application`, `Infrastructure`, `API`) with strict zero-dependency core rules.
- **CQRS Pattern**: Decoupled Commands & Queries using `MediatR`.
- **Neon PostgreSQL Cloud Integration**: Entity Framework Core 10 using `Npgsql.EntityFrameworkCore.PostgreSQL` with automatic database migrations on startup.
- **PayFast & 1-Link Sandbox Engine**: Real sandbox checkout integration (`Merchant ID: 10043702`, `Merchant Key: d7nxjs2n7qdk6`) returning approval codes (`APPRV-XXXX`).
- **JWT Authentication & Roles**: HMAC-SHA256 token generator supporting `Customer`, `BranchManager`, and `Admin` role claims.
- **SignalR Live Notifications**: Real-time WebSocket hub (`/hubs/notifications`) pushing instant debit alerts to clients.
- **QuestPDF Document Engine**: Generates official vector PDF receipts and monthly bank statements.
- **Permanent Swagger UI**: Auto-generated interactive API documentation served always at `/swagger`.

---

## 🛠 Technology Stack & Core Skills

### Backend (.NET 10)
- **Language**: C# 13 / .NET 10.0.400 SDK
- **Architecture**: Clean Architecture / Onion Architecture / CQRS
- **Database**: Neon Serverless PostgreSQL (`Npgsql.EntityFrameworkCore.PostgreSQL`)
- **Payment Sandbox**: PayFast Gateway (`https://sandbox.payfast.co.za`) & 1-Link Network
- **Security**: JWT Bearer Authentication & Role-Based Authorization
- **Real-Time Pushes**: ASP.NET Core SignalR
- **PDF Engine**: QuestPDF (Community License)
- **Mediation**: MediatR 14.2.0
- **Validation**: FluentValidation
- **Logging**: Serilog with Console & File Sinks
- **API Documentation**: Swashbuckle / Swagger UI (`/swagger`)

### Frontend (React 18 + Vite)
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React Icons
- **HTTP Client**: Axios

---

## 🏗 Project Architecture

```
                       +-----------------------+
                       |   CoreBanking.API     |  (Controllers, Swagger, SignalR Hubs, JWT)
                       +-----------+-----------+
                                   |
                                   v
                       +-----------------------+
                       | CoreBanking.Infrastr. |  (Neon PostgreSQL EF Core, PayFast, QuestPDF)
                       +-----------+-----------+
                                   |
                                   v
                       +-----------------------+
                       | CoreBanking.Applicat. |  (MediatR Commands, Queries, Interfaces)
                       +-----------+-----------+
                                   |
                                   v
                       +-----------------------+
                       |   CoreBanking.Domain  |  (Entities, Enums, Interfaces - ZERO DEPS)
                       +-----------------------+
```

---

## 🇵🇰 Pakistani Localization & Banking Ecosystem

- **Currency**: Pakistani Rupee (`PKR` / `Rs.`).
- **Banks & IBAN Formats**:
  - HBL: `PK36 HABB 0001 2345 6789 4892`
  - Meezan Bank: `PK68 MEZN 0002 9918 2041 7120`
  - Allied Bank (ABL): `PK12 ABLP 0005 8830 1922 9011`
  - MCB Bank: `PK90 MCBB 0022 9941 2018 3310`
- **Customer CNIC Profile**: `Muhammad Usman` (`CNIC #42101-9876543-1`).
- **Counterparties**: Engro Corporation Ltd., K-Electric, NayaPay, Packages Limited, Systems Limited, PIA.
- **Regulation**: State Bank of Pakistan (SBP) & 1-Link Network compliance.

---

## 🔌 Neon PostgreSQL & PayFast Sandbox Integration

### 1. Neon PostgreSQL Connection (`appsettings.json`)
```json
"ConnectionStrings": {
  "NeonPostgres": "Host=ep-bold-field-axu5e0l3-pooler.c-4.us-east-2.aws.neon.tech;Database=neondb;Username=neondb_owner;Password=npg_e8cUPjKXV1nt;SSL Mode=Require;Trust Server Certificate=true"
}
```

### 2. PayFast Sandbox Configuration (`appsettings.json`)
```json
"PayFast": {
  "MerchantId": "10043702",
  "MerchantKey": "d7nxjs2n7qdk6",
  "SandboxUrl": "https://sandbox.payfast.co.za/eng/process"
}
```

---

## 📂 Directory & Folder Structure

```
CoreBankingPlatform/
├── Dockerfile                         # Production Dockerfile for Render / Koyeb
├── CoreBankingPlatform.slnx           # .NET 10 Solution File
├── src/
│   ├── CoreBanking.Domain/            # Entities: Account, Transaction, User, Loan, Card
│   ├── CoreBanking.Application/       # MediatR Handlers, Interfaces (IJwtTokenGenerator, IPayFastSandboxService)
│   ├── CoreBanking.Infrastructure/    # EF Core DbContext, Neon Postgres, PayFast, QuestPDF
│   └── CoreBanking.API/               # Controllers, SignalR NotificationHub, JWT Auth, Swagger
├── tests/
│   ├── CoreBanking.UnitTests/         # Unit Tests (100% Passed)
│   └── CoreBanking.IntegrationTests/  # Integration Tests (100% Passed)
└── CoreBanking.Web/                   # React 18 + Vite + Tailwind v4 Frontend
    ├── src/
    │   ├── components/                # NavBar, Card, Input, Button, StatementPdfModal
    │   ├── context/                   # ThemeContext (Dark/Light mode)
    │   ├── pages/                     # Dashboard, Accounts, Transactions, Bills, QrPay, Loans, Cards, Admin, Support
    │   └── routes/                    # AppRouter
```

---

## 💻 How to Run in Visual Studio Code

### Prerequisites
- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Node.js v18+](https://nodejs.org/)

### 1. Run the Backend API (.NET 10)
Open VS Code terminal:
```powershell
dotnet run --project src/CoreBanking.API --urls "http://localhost:5000;https://localhost:5001"
```
- **Live Swagger API**: 👉 **[http://localhost:5000/swagger](http://localhost:5000/swagger)**

### 2. Run the Frontend (React + Vite)
Open a second VS Code terminal:
```powershell
cd CoreBanking.Web
npm install
npm run dev
```
- **Live Web App**: 👉 **[http://localhost:5173](http://localhost:5173)**

---

## ☁️ Free Cloud Deployment Instructions

### 🚀 Deploy Backend for FREE (MonsterASP.net / Render / Cloudflare Tunnel)
1. **MonsterASP.net (NO Credit Card Required)**:
   - Register free account at [MonsterASP.net](https://www.monsterasp.net).
   - Publish project: `dotnet publish src/CoreBanking.API/CoreBanking.API.csproj -c Release -o ./publish`.
   - Zip & upload `./publish` folder via MonsterASP control panel.
2. **Cloudflare Tunnel (0 Signups)**:
   - Run `dotnet run --project src/CoreBanking.API --urls "http://localhost:5000"`.
   - Expose: `npx localtunnel --port 5000` or `cloudflared tunnel --url http://localhost:5000`.

### ⚡ Deploy Frontend on Vercel
1. Push repository to GitHub `https://github.com/mhusman123/Enterprise-Banking`.
2. Import project into [Vercel.com](https://vercel.com).
3. Set **Root Directory** to `CoreBanking.Web`.
4. Click **Deploy**.

---

## 🚀 Roadmap & Coming Soon

- [x] Full Pakistani Rupee (`PKR`) & SBP IBAN Localization
- [x] Utility Bill Payments & Mobile Load (`/bills`)
- [x] Raast QR Code Scanner & Merchant Checkout (`/qr-pay`)
- [x] Official SBP Stamped PDF Statement Generator
- [x] Dark / Light Mode Theme Switcher
- [x] Neon PostgreSQL Cloud Database Integration
- [x] PayFast & 1-Link Sandbox Integration
- [x] JWT Authentication & Role Permissions
- [x] SignalR Real-time Notification Hub
- [x] QuestPDF Document Engine
- [ ] Live Biometric NADRA Verification Simulation
- [ ] Multi-Bank Open API Interoperability (HBL, Meezan, ABL)

---

## 📄 License
Distributed under the **MIT License**. See `LICENSE` for more information.
