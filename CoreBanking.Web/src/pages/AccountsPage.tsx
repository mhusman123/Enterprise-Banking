import React, { useState } from 'react';
import { 
  Plus, 
  CreditCard, 
  PiggyBank, 
  Briefcase, 
  Landmark,
  Copy, 
  Download, 
  Lock, 
  Unlock, 
  ArrowUpRight, 
  Check, 
  Sparkles
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const AccountsPage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const accounts = [
    { 
      id: 'ACC-101', 
      type: 'Checking', 
      name: 'Corporate Premier Checking', 
      accountNumber: '4892-1092-8841-4892', 
      iban: 'US89 CBKP 4892 1092 8841 4892',
      balance: 148920.50, 
      currency: 'USD',
      apy: '1.25%',
      status: 'Active', 
      icon: CreditCard,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    { 
      id: 'ACC-102', 
      type: 'Savings', 
      name: 'High-Yield Treasury Reserve', 
      accountNumber: '7120-4491-0029-7120', 
      iban: 'US89 CBKP 7120 4491 0029 7120',
      balance: 85400.00, 
      currency: 'USD',
      apy: '5.20%',
      status: 'Active', 
      icon: PiggyBank,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    { 
      id: 'ACC-103', 
      type: 'Investment', 
      name: 'Money Market Liquidity', 
      accountNumber: '9011-8830-1922-9011', 
      iban: 'US89 CBKP 9011 8830 1922 9011',
      balance: 45000.25, 
      currency: 'USD',
      apy: '4.85%',
      status: 'Active', 
      icon: Briefcase,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    { 
      id: 'ACC-104', 
      type: 'FixedDeposit', 
      name: '12-Month Fixed Yield Term', 
      accountNumber: '3310-9941-2018-3310', 
      iban: 'US89 CBKP 3310 9941 2018 3310',
      balance: 50000.00, 
      currency: 'USD',
      apy: '5.60%',
      status: 'Frozen', 
      icon: Landmark,
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredAccounts = filterType === 'All' 
    ? accounts 
    : accounts.filter(a => a.type === filterType);

  return (
    <div className="space-y-8 animate-fade">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 card-shadow">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Institutional Bank Accounts</h1>
          <p className="text-xs text-slate-500 mt-1">Multi-currency liquidity, checking & treasury yield reserves</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus size={16} />
          <span>Open New Account</span>
        </Button>
      </div>

      {/* Filter Tabs & Distribution */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-xl text-xs font-semibold text-slate-600 shrink-0">
          {['All', 'Checking', 'Savings', 'Investment', 'FixedDeposit'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterType === t ? 'bg-white text-slate-900 card-shadow font-bold' : 'hover:text-slate-900'}`}
            >
              {t === 'FixedDeposit' ? 'Fixed Deposit' : t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-500 bg-white px-4 py-2 rounded-xl border border-slate-200/80 card-shadow">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span>Checking (53%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Savings (30%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <span>Investment (17%)</span>
          </div>
        </div>
      </div>

      {/* Account Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAccounts.map((acc) => {
          const Icon = acc.icon;
          return (
            <Card key={acc.id} className="flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl border ${acc.color}`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{acc.type}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          acc.status === 'Active' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {acc.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">{acc.name}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200/60">
                      <Sparkles size={12} /> {acc.apy} APY
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-2 mb-6 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-400 font-sans">Account No:</span>
                    <span className="font-semibold text-slate-800">{acc.accountNumber}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 pt-1 border-t border-slate-200/50">
                    <span className="text-slate-400 font-sans">IBAN Identifier:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800">{acc.iban}</span>
                      <button 
                        onClick={() => handleCopy(acc.iban, acc.id)}
                        className="text-slate-400 hover:text-blue-600 p-0.5 transition-colors"
                        title="Copy IBAN"
                      >
                        {copiedId === acc.id ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between pt-4 border-t border-slate-100 mb-5">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">Available Balance</span>
                    <span className="text-2xl font-extrabold text-slate-900 tracking-tight">${acc.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {acc.currency}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm">
                    <ArrowUpRight size={14} /> Statement
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download size={14} /> Deposit
                  </Button>
                  <Button variant="secondary" size="sm">
                    {acc.status === 'Active' ? <Lock size={14} /> : <Unlock size={14} />}
                    {acc.status === 'Active' ? 'Freeze' : 'Unfreeze'}
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Open Account Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 card-shadow-lg space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Open Additional Bank Account</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Account Type</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                  <option value="Savings">Savings Reserve (5.20% APY)</option>
                  <option value="Checking">Corporate Checking (1.25% APY)</option>
                  <option value="FixedDeposit">Fixed Term Deposit (5.60% APY)</option>
                </select>
              </div>

              <Input label="Initial Deposit Amount ($)" placeholder="e.g. 5000.00" type="number" />
              <Input label="Account Label / Business Purpose" placeholder="e.g. Payroll Reserve" />
            </div>

            <div className="flex items-center gap-3 pt-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowCreateModal(false)}>Cancel</Button>
              <Button className="flex-1" onClick={() => setShowCreateModal(false)}>Confirm & Open Account</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountsPage;
