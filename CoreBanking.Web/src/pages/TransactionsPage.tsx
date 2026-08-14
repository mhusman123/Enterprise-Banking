import React, { useState } from 'react';
import { 
  Send, 
  Search, 
  CheckCircle2, 
  Clock, 
  FileSpreadsheet
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const TransactionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [transferType, setTransferType] = useState<'wire' | 'deposit' | 'withdraw'>('wire');

  const allLedger = [
    { id: 'TXN-98421', party: 'Acme Global Logistics Inc.', ref: 'INV-2026-88', date: 'Aug 14, 2026 - 10:45 AM', type: 'Credit', category: 'Client Transfer', account: 'Checking (•••• 4892)', amount: '+$24,500.00', status: 'Settled' },
    { id: 'TXN-98420', party: 'Amazon Web Services Inc.', ref: 'AWS-99120', date: 'Aug 13, 2026 - 04:12 PM', type: 'Debit', category: 'Infrastructure', account: 'Checking (•••• 4892)', amount: '-$1,840.00', status: 'Settled' },
    { id: 'TXN-98419', party: 'Stripe Payments Payout', ref: 'STR-77291', date: 'Aug 12, 2026 - 02:30 PM', type: 'Credit', category: 'Merchant Earnings', account: 'Checking (•••• 4892)', amount: '+$8,920.40', status: 'Settled' },
    { id: 'TXN-98418', party: 'WeWork Office Lease', ref: 'LS-33910', date: 'Aug 10, 2026 - 09:15 AM', type: 'Debit', category: 'Real Estate', account: 'Checking (•••• 4892)', amount: '-$4,500.00', status: 'Settled' },
    { id: 'TXN-98417', party: 'TechCorp Dividend Pay', ref: 'DIV-1002', date: 'Aug 08, 2026 - 11:00 AM', type: 'Credit', category: 'Investment', account: 'Savings (•••• 7120)', amount: '+$3,150.00', status: 'Settled' },
    { id: 'TXN-98416', party: 'Salesforce Commercial Subscription', ref: 'SF-10492', date: 'Aug 05, 2026 - 03:20 PM', type: 'Debit', category: 'SaaS Software', account: 'Checking (•••• 4892)', amount: '-$980.00', status: 'Settled' },
    { id: 'TXN-98415', party: 'Treasury Bond Interest Yield', ref: 'BND-2026', date: 'Aug 01, 2026 - 08:00 AM', type: 'Credit', category: 'Yield Interest', account: 'Savings (•••• 7120)', amount: '+$1,450.00', status: 'Settled' },
    { id: 'TXN-98414', party: 'Delta Airlines Corporate Travel', ref: 'FLT-8841', date: 'Jul 29, 2026 - 01:10 PM', type: 'Debit', category: 'Travel & Expense', account: 'Checking (•••• 4892)', amount: '-$620.50', status: 'Pending' },
  ];

  const filtered = allLedger.filter(tx => {
    const matchesTab = activeTab === 'All' 
      || (activeTab === 'Deposits' && tx.type === 'Credit') 
      || (activeTab === 'Withdrawals' && tx.type === 'Debit');
    const matchesSearch = tx.party.toLowerCase().includes(searchQuery.toLowerCase()) 
      || tx.id.toLowerCase().includes(searchQuery.toLowerCase()) 
      || tx.ref.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 card-shadow">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Transaction Ledger</h1>
          <p className="text-xs text-slate-500 mt-1">Audit-grade records of all deposits, withdrawals & wire transfers</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <FileSpreadsheet size={15} /> Export CSV
          </Button>
          <Button size="sm" onClick={() => setShowTransferModal(true)}>
            <Send size={15} /> New Transfer
          </Button>
        </div>
      </div>

      {/* Table Card */}
      <Card className="p-0 overflow-hidden">
        {/* Search & Filter Bar */}
        <div className="p-5 border-b border-slate-200/80 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50">
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search counterparty, reference ID..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-xl text-xs font-semibold text-slate-600 shrink-0">
            {['All', 'Deposits', 'Withdrawals'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === tab ? 'bg-white text-slate-900 card-shadow font-bold' : 'hover:text-slate-900'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 min-w-[800px]">
            <thead className="bg-slate-50 border-b border-slate-200/80 font-bold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="py-3.5 px-6">Transaction ID</th>
                <th className="py-3.5 px-6">Beneficiary / Party</th>
                <th className="py-3.5 px-6">Category</th>
                <th className="py-3.5 px-6">Source Account</th>
                <th className="py-3.5 px-6">Date & Time</th>
                <th className="py-3.5 px-6 text-right">Amount</th>
                <th className="py-3.5 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filtered.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-mono font-semibold text-slate-900">{tx.id}</td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-bold text-slate-900">{tx.party}</p>
                      <p className="text-[11px] text-slate-400 font-mono">Ref: {tx.ref}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 font-medium">{tx.account}</td>
                  <td className="py-4 px-6 text-slate-500">{tx.date}</td>
                  <td className={`py-4 px-6 text-right font-extrabold text-sm ${tx.type === 'Credit' ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {tx.amount}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                      tx.status === 'Settled'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {tx.status === 'Settled' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
          <span>Showing <strong>{filtered.length}</strong> recorded transactions</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 card-shadow-lg space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-900">Initiate Funds Transfer</h3>
              <button onClick={() => setShowTransferModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            {/* Transfer Mode Selector */}
            <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-bold text-center">
              <button
                onClick={() => setTransferType('wire')}
                className={`py-2 rounded-lg transition-all ${transferType === 'wire' ? 'bg-white text-blue-600 card-shadow' : 'text-slate-600'}`}
              >
                Wire Transfer
              </button>
              <button
                onClick={() => setTransferType('deposit')}
                className={`py-2 rounded-lg transition-all ${transferType === 'deposit' ? 'bg-white text-blue-600 card-shadow' : 'text-slate-600'}`}
              >
                Deposit
              </button>
              <button
                onClick={() => setTransferType('withdraw')}
                className={`py-2 rounded-lg transition-all ${transferType === 'withdraw' ? 'bg-white text-blue-600 card-shadow' : 'text-slate-600'}`}
              >
                Withdrawal
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Source Account</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-sm font-medium focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                  <option value="4892">Corporate Premier Checking (Balance: $148,920.50)</option>
                  <option value="7120">High-Yield Treasury Savings (Balance: $85,400.00)</option>
                </select>
              </div>

              {transferType === 'wire' && (
                <Input label="Recipient IBAN / Account Number" placeholder="e.g. US89 CBKP 9011 8830 1922" />
              )}

              <Input label="Transfer Amount ($)" placeholder="0.00" type="number" />
              <Input label="Payment Reference / Memo" placeholder="e.g. Invoice #2026-88" />
            </div>

            <div className="flex items-center gap-3 pt-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowTransferModal(false)}>Cancel</Button>
              <Button className="flex-1" onClick={() => setShowTransferModal(false)}>Execute Payment</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
