import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Send, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  const accountCards = [
    { id: '1', name: 'Corporate Premier Checking (HBL)', number: 'PK36 HABB 4892', balance: 14892050.50, type: 'Checking', status: 'Active', growth: '+4.2%' },
    { id: '2', name: 'Meezan High-Yield Islamic Savings', number: 'PK68 MEZN 7120', balance: 8540000.00, type: 'Savings', status: 'Active', growth: '+5.1%' },
    { id: '3', name: 'Allied Money Market Treasury', number: 'PK12 ABLP 9011', balance: 4500025.00, type: 'Investment', status: 'Active', growth: '+3.8%' },
  ];

  const recentLedger = [
    { id: 'TXN-98421', party: 'Engro Corporation Ltd.', ref: 'INV-2026-88', date: 'Today, 10:45 AM', type: 'Credit', category: 'Client Transfer', amount: '+Rs. 2,450,000.00', status: 'Settled' },
    { id: 'TXN-98420', party: 'K-Electric Power Supply', ref: 'KE-99120', date: 'Yesterday, 04:12 PM', type: 'Debit', category: 'Utilities', amount: '-Rs. 184,000.00', status: 'Settled' },
    { id: 'TXN-98419', party: 'NayaPay Merchant Payout', ref: 'NYP-77291', date: 'Aug 12, 02:30 PM', type: 'Credit', category: 'Merchant Earnings', amount: '+Rs. 892,040.00', status: 'Settled' },
    { id: 'TXN-98418', party: 'Packages Limited Commercial Lease', ref: 'PKG-33910', date: 'Aug 10, 09:15 AM', type: 'Debit', category: 'Real Estate', amount: '-Rs. 450,000.00', status: 'Settled' },
    { id: 'TXN-98417', party: 'Systems Limited Dividend Pay', ref: 'DIV-1002', date: 'Aug 08, 11:00 AM', type: 'Credit', category: 'Investment Yield', amount: '+Rs. 315,000.00', status: 'Settled' },
  ];

  return (
    <div className="space-y-8 animate-fade">
      {/* Top Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 card-shadow">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
            MU
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Welcome back, Muhammad Usman</h1>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck size={12} /> Verified SBP
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Corporate Banking Portal • CNIC #42101-9876543-1 • Account #CB-8849-PK</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => navigate('/accounts')}>
            <Building2 size={15} />
            <span>Manage Accounts</span>
          </Button>
          <Button size="sm" onClick={() => navigate('/transactions')}>
            <Send size={15} />
            <span>Send Payment</span>
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Net Liquidity</span>
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                PKR
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Rs. 27,932,075</h2>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <TrendingUp size={14} /> +8.4% this month
            </span>
            <span className="text-slate-400">PKR Equivalent</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Monthly Inflow</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ArrowDownLeft size={18} />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Rs. 3,657,040</h2>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-emerald-600 font-semibold">12 Deposits Settled</span>
            <span className="text-slate-400">Aug 2026</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Monthly Outflow</span>
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <ArrowUpRight size={18} />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Rs. 634,000</h2>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-600 font-medium">8 Raast / Interbank Transfers</span>
            <span className="text-slate-400">Aug 2026</span>
          </div>
        </Card>

        <Card className="flex flex-col justify-between bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-lg">
          <div>
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Active Credit Line</span>
              <div className="w-8 h-8 rounded-xl bg-white/10 text-teal-400 flex items-center justify-center">
                <Sparkles size={18} />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Rs. 50,000,000</h2>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-300">
            <span>Pre-approved Commercial</span>
            <span className="text-teal-400 font-semibold">0.0% Drawn</span>
          </div>
        </Card>
      </div>

      {/* Main Grid: Chart & Accounts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liquidity History Visualizer */}
        <Card className="lg:col-span-2 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Liquidity Trend & Net Position</h3>
              <p className="text-xs text-slate-500">Historical asset curve over recent billing cycles (PKR)</p>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-medium text-slate-600">
              {['7 Days', '30 Days', 'This Month', '1 Year'].map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPeriod(p)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${selectedPeriod === p ? 'bg-white text-slate-900 font-bold card-shadow' : 'hover:text-slate-900'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Area Chart Mock Visual */}
          <div className="w-full h-56 relative pt-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="30" x2="500" y2="30" stroke="#E2E8F0" strokeDasharray="3 3" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="#E2E8F0" strokeDasharray="3 3" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="#E2E8F0" strokeDasharray="3 3" />
              
              <path
                d="M 0,110 Q 75,90 150,95 T 300,50 T 420,35 T 500,20 L 500,150 L 0,150 Z"
                fill="url(#chartGradient)"
              />

              <path
                d="M 0,110 Q 75,90 150,95 T 300,50 T 420,35 T 500,20"
                fill="none"
                stroke="#2563EB"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <circle cx="420" cy="35" r="5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
            <div><span className="block font-semibold text-slate-900">M1</span>Rs. 21.0M</div>
            <div><span className="block font-semibold text-slate-900">M2</span>Rs. 23.5M</div>
            <div><span className="block font-semibold text-slate-900">M3</span>Rs. 25.8M</div>
            <div><span className="block font-semibold text-blue-600 font-bold">M4 (Current)</span>Rs. 27.9M</div>
          </div>
        </Card>

        {/* Linked Accounts Mini List */}
        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Primary Accounts</h3>
            <button 
              onClick={() => navigate('/accounts')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              View All <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-3">
            {accountCards.map((acc) => (
              <div 
                key={acc.id}
                onClick={() => navigate('/accounts')}
                className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-slate-500">{acc.type}</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{acc.growth}</span>
                </div>
                <p className="text-sm font-bold text-slate-900 truncate">{acc.name}</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/50">
                  <span className="text-xs text-slate-400 font-mono">{acc.number}</span>
                  <span className="text-sm font-extrabold text-slate-900">Rs. {acc.balance.toLocaleString('en-PK', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/accounts')}>
            + Open Additional Account
          </Button>
        </Card>
      </div>

      {/* Ledger Table */}
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Recent Transaction History</h3>
            <p className="text-xs text-slate-500">Real-time ledger posted across all Pakistani bank accounts & Raast</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate('/transactions')}>
              <Filter size={14} /> Filter
            </Button>
            <Button variant="secondary" size="sm" onClick={() => navigate('/transactions')}>
              View Full Statement
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto -mx-6">
          <table className="w-full text-left text-xs text-slate-600 min-w-[700px]">
            <thead className="bg-slate-50 border-y border-slate-200/80 font-bold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="py-3 px-6">Reference ID</th>
                <th className="py-3 px-6">Counterparty / Beneficiary</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Date & Time</th>
                <th className="py-3 px-6 text-right">Amount (PKR)</th>
                <th className="py-3 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentLedger.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-6 font-mono font-semibold text-slate-900">{tx.id}</td>
                  <td className="py-3.5 px-6 font-bold text-slate-900">{tx.party}</td>
                  <td className="py-3.5 px-6">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-slate-500">{tx.date}</td>
                  <td className={`py-3.5 px-6 text-right font-extrabold text-sm ${tx.type === 'Credit' ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {tx.amount}
                  </td>
                  <td className="py-3.5 px-6 text-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
