# 🏦 CoreBank — NextGen Enterprise Banking Platform

[![Framework](https://img.shields.io/badge/.NET-10.0.400-512BD4?logo=dotnet)](https://dotnet.microsoft.com/)
[![Frontend](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Architecture](https://img.shields.io/badge/Architecture-Clean%20Architecture%20%2B%20CQRS-22c55e)](#project-architecture)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A high-performance, audit-grade enterprise digital banking platform built with **.NET 10** following **Clean Architecture** and **CQRS (Command Query Responsibility Segregation)** principles, coupled with an ultra-sleek commercial banking frontend built using **React 18, Vite, TypeScript, and Tailwind CSS v4**.

---

## 📌 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Technology Stack & Core Skills](#-technology-stack--core-skills)
- [Project Architecture](#-project-architecture)
- [Directory & Folder Structure](#-directory--folder-structure)
- [How to Run in Visual Studio Code](#-how-to-run-in-visual-studio-code)
- [VS Code Debugging Configuration](#-vs-code-debugging-configuration)
- [Roadmap & Coming Soon](#-roadmap--coming-soon)

---

## 🌟 Project Overview

CoreBank is an end-to-end digital banking system designed to handle real-time account ledgers, commercial credit facilities, multi-currency treasury reserves, and virtual card controls with banking-grade compliance and UI design.

The platform separates business logic from infrastructure using a strict **4-layer Clean Architecture** pattern, providing clear extension points for transaction processing, interest accruals, background automated EMI deductions via Hangfire, and structured logging via Serilog.

---

## ✨ Key Features

### 💻 Executive Banking Frontend
- **Overview Analytics Dashboard**: Real-time liquidity metrics, visual SVG area charts for historical net position, quick transfer trigger, and recent transaction ledgers.
- **Institutional Bank Accounts**: Checking, High-Yield Treasury Savings (5.20% APY), Money Market Investment, and Fixed Deposit accounts with IBAN copying and status management.
- **Transaction Ledger**: Filterable table with settled/pending status pills, categories, wire references, and deposit/withdrawal modal wizard.
- **Loans & Commercial Credit**: Active loan facilities progress bar, repayment schedules, and a **Live Interactive EMI Simulator** calculating monthly installments:
  $$\text{EMI} = \frac{P \times r \times (1+r)^n}{(1+r)^n - 1}$$
- **Virtual & Physical Payment Cards**: Metallic 3D card visual renders, lock/unlock card controls, CVV reveal toggle, PIN reset, and monthly spending limit meters.
- **Admin & Compliance Desk**: Platform liquidity stats ($342.8M), system health monitoring, and immutable audit logs.
- **Priority Helpdesk**: 24/7 support channels, searchable FAQs, and priority ticket submission.

### ⚙️ Enterprise .NET 10 Backend
- **Clean Architecture**: 4 distinct projects (`Domain`, `Application`, `Infrastructure`, `API`) with strict zero-dependency core rules.
- **CQRS Pattern**: Decoupled Commands & Queries using `MediatR`.
- **Entity Framework Core 10**: Fluent API configurations with decimal precision, unique indexes, and cascade safety rules.
- **Hangfire Background Jobs**: Automated EMI repayment deductions and daily interest calculation job stubs.
- **Custom Exception Middleware**: Global handling mapping `InsufficientBalanceException` (400) and `AccountFrozenException` (403).
- **Swagger / OpenAPI**: Auto-generated documentation for all 6 API controllers.

---

## 🛠 Technology Stack & Core Skills

### Backend (.NET 10)
- **Language**: C# 13 / .NET 10.0.400 SDK
- **Architecture**: Clean Architecture / Onion Architecture / CQRS
- **Mediation**: MediatR 14.2.0
- **Validation**: FluentValidation
- **ORM**: Entity Framework Core 10 (SQL Server Provider)
- **Background Tasks**: Hangfire 1.8
- **Logging**: Serilog with Console & File Sinks
- **API Documentation**: Swashbuckle / Swagger UI

### Frontend (React + Vite)
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
                       |   CoreBanking.API     |  (Controllers, Swagger, Middleware)
                       +-----------+-----------+
                                   |
                                   v
                       +-----------------------+
                       | CoreBanking.Infrastr. |  (EF Core DbContext, Repositories, Jobs)
                       +-----------+-----------+
                                   |
                                   v
                       +-----------------------+
                       | CoreBanking.Applicat. |  (MediatR Commands, Queries, DTOs)
                       +-----------+-----------+
                                   |
                                   v
                       +-----------------------+
                       |   CoreBanking.Domain  |  (Entities, Enums, Interfaces - ZERO DEPS)
                       +-----------------------+
```

### Clean Architecture Principles Enforced:
1. **Domain Isolation**: `CoreBanking.Domain` has **zero** external library or project dependencies.
2. **Dependency Inversion**: Outer layers (`Infrastructure`, `API`) depend on abstractions defined in inner layers (`Application`, `Domain`).
3. **CQRS Segregation**: Read queries and state-changing commands are completely separated into dedicated MediatR request classes.

---

## 📁 Directory & Folder Structure

```
CoreBankingPlatform/
├── CoreBankingPlatform.slnx                   # .NET 10 Solution File
├── README.md                                  # Comprehensive Documentation
├── .gitignore                                 # Git Ignore Rules
│
├── src/
│   ├── CoreBanking.Domain/                    # Enterprise Business Layer
│   │   ├── Entities/                          # Customer, Account, Transaction, Loan, Card, etc.
│   │   ├── Enums/                             # AccountType, AccountStatus, TransactionType, etc.
│   │   ├── Exceptions/                        # InsufficientBalanceException, AccountFrozenException
│   │   └── Interfaces/                        # Repository Interfaces (IAccountRepository, etc.)
│   │
│   ├── CoreBanking.Application/               # Application Business Logic Layer
│   │   ├── Common/                            # IApplicationDbContext interface
│   │   ├── Accounts/                          # Commands, Queries, DTOs, Handlers
│   │   ├── Transactions/                      # Deposit, Withdraw, Transfer Commands & Handlers
│   │   ├── Loans/                             # Apply, Approve, Disburse, Repay Commands & Handlers
│   │   ├── Cards/                             # Issue, Block Commands & Handlers
│   │   └── Admin/                             # Audit Logs & Dashboard Queries
│   │
│   ├── CoreBanking.Infrastructure/            # External Infrastructure & Persistence
│   │   ├── Persistence/                       # ApplicationDbContext & Entity Configurations
│   │   │   ├── Configurations/                # Fluent API Entity Configurations
│   │   │   └── Repositories/                  # Account, Transaction, Loan, Card Repositories
│   │   ├── Jobs/                              # Hangfire EmiDeductionJob & InterestCalculationJob
│   │   ├── Notifications/                     # Email & Notification Services
│   │   └── Identity/                          # JwtTokenService Implementation
│   │
│   └── CoreBanking.API/                       # Web API Entry Point
│       ├── Controllers/                       # Accounts, Transactions, Loans, Cards, Admin, Customers
│       ├── Middleware/                        # ExceptionHandlingMiddleware
│       ├── Program.cs                         # Dependency Injection, Middleware Pipeline & Swagger
│       └── appsettings.json                   # Connection Strings & App Config
│
├── tests/
│   ├── CoreBanking.UnitTests/                 # Unit Tests (xUnit)
│   └── CoreBanking.IntegrationTests/          # Integration Tests (xUnit)
│
└── CoreBanking.Web/                           # React + Vite + TypeScript Frontend
    ├── index.html                             # Entry HTML with Plus Jakarta Sans & Inter Fonts
    ├── package.json                           # Dependencies (Tailwind v4, Lucide, Axios)
    ├── vite.config.ts                         # Vite config with @tailwindcss/vite plugin
    └── src/
        ├── index.css                          # Custom CSS variables, scrollbars & animations
        ├── api/                               # Axios Client setup
        ├── components/                        # Button, Card, Input, SearchBar, SidebarNav, HeaderTopBar
        ├── pages/                             # Dashboard, Accounts, Transactions, Loans, Cards, Admin, Support, etc.
        └── routes/                            # AppRouter & ProtectedRoute Guards
```

---

## 💻 How to Run in Visual Studio Code

### 📋 Prerequisites
1. **.NET 10 SDK** (v10.0.400 or later)
2. **Node.js** (v20.x or v22.x) and **npm**
3. **Visual Studio Code** with extensions:
   - C# Dev Kit (`ms-dotnettools.csdevkit`)
   - ES7+ React/Redux/React-Native snippets (`dsznajder.es7-react-js-snippets`)

---

### 🚀 Step 1: Clone the Repository
Open your VS Code terminal (`Ctrl + ~`) and run:
```bash
git clone https://github.com/mhusman123/Enterprise-Banking.git
cd Enterprise-Banking
```

---

### ⚙️ Step 2: Run the .NET 10 Backend API

1. Open a terminal in VS Code:
```bash
dotnet restore CoreBankingPlatform.slnx
dotnet build CoreBankingPlatform.slnx
```

2. Run the API project:
```bash
dotnet run --project src/CoreBanking.API
```

3. Open your browser to access the Swagger API Explorer:
   - **Swagger UI**: [http://localhost:5000/swagger](http://localhost:5000/swagger)

---

### 🎨 Step 3: Run the React Frontend

1. Open a **new terminal tab** in VS Code and navigate to `CoreBanking.Web`:
```bash
cd CoreBanking.Web
npm install
npm run dev
```

2. Open your browser:
   - **Web App**: [http://localhost:5173](http://localhost:5173)

---

### 🧪 Step 4: Run Automated Unit & Integration Tests

In the VS Code terminal from the solution root:
```bash
dotnet test CoreBankingPlatform.slnx
```

---

## 🔧 VS Code Debugging Configuration

Create a `.vscode/launch.json` file in the project root to debug both backend and frontend directly in VS Code:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": ".NET API (Launch)",
      "type": "coreclr",
      "request": "launch",
      "preLaunchTask": "build-api",
      "program": "${workspaceFolder}/src/CoreBanking.API/bin/Debug/net10.0/CoreBanking.API.dll",
      "args": [],
      "cwd": "${workspaceFolder}/src/CoreBanking.API",
      "stopAtEntry": false,
      "serverReadyAction": {
        "action": "openUrl",
        "pattern": "Now listening on:\\s+(https?://\\S+)",
        "uriFormat": "%s/swagger"
      }
    },
    {
      "name": "React Frontend (Chrome)",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/CoreBanking.Web/src"
    }
  ]
}
```

---

## 🔮 Roadmap & Coming Soon

Here is what we are planning to implement next:

- [ ] **JWT Authentication & Role Claims**: Implement `JwtTokenService` and attach `[Authorize(Roles = "Admin,Teller")]` to API endpoints.
- [ ] **Database Migrations**: Execute EF Core migrations (`dotnet ef database update`) against local or cloud SQL Server instance.
- [ ] **Full Handler Logic**: Implement CQRS command handlers to perform atomic balance updates using EF Core database transactions.
- [ ] **SignalR Real-Time Alerts**: Broadcast instant push notifications to the React frontend whenever a deposit or wire transfer settles.
- [ ] **Docker & Docker Compose**: Package API and React Web app into multi-container Docker images with SQL Server & Redis.
- [ ] **Redis Caching**: Add Distributed Cache for daily currency exchange rates and stock tickers.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).
