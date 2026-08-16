import React, { useState } from 'react';
import { 
  Send, 
  Search, 
  FileText
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { StatementPdfModal } from '../components/StatementPdfModal';

const TransactionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [transferType, setTransferType] = useState<'wire' | 'deposit' | 'withdraw'>('wire');

  const allLedger = [
    { id: 'TXN-98421', party: 'Engro Corporation Ltd.', ref: 'INV-2026-88', date: 'Aug 14, 2026 - 10:45 AM', type: 'Credit', category: 'Client Transfer', account: 'Checking (PK36 HABB 4892)', amount: '+Rs. 2,450,000.00', status: 'Settled' },
    { id: 'TXN-98420', party: 'K-Electric Power Supply', ref: 'KE-99120', date: 'Aug 13, 2026 - 04:12 PM', type: 'Debit', category: 'Utilities', account: 'Checking (PK36 HABB 4892)', amount: '-Rs. 184,000.00', status: 'Settled' },
    { id: 'TXN-98419', party: 'NayaPay Merchant Payout', ref: 'NYP-77291', date: 'Aug 12, 2026 - 02:30 PM', type: 'Credit', category: 'Merchant Earnings', account: 'Checking (PK36 HABB 4892)', amount: '+Rs. 892,040.00', status: 'Settled' },
    { id: 'TXN-98418', party: 'Packages Limited Commercial Lease', ref: 'PKG-33910', date: 'Aug 10, 2026 - 09:15 AM', type: 'Debit', category: 'Real Estate', account: 'Checking (PK36 HABB 4892)', amount: '-Rs. 450,000.00', status: 'Settled' },
    { id: 'TXN-98417', party: 'Systems Limited Dividend Pay', ref: 'DIV-1002', date: 'Aug 08, 2026 - 11:00 AM', type: 'Credit', category: 'Investment Yield', account: 'Savings (PK68 MEZN 7120)', amount: '+Rs. 315,000.00', status: 'Settled' },
    { id: 'TXN-98416', party: 'LMC Software Solutions', ref: 'LMC-10492', date: 'Aug 05, 2026 - 03:20 PM', type: 'Debit', category: 'SaaS Infrastructure', account: 'Checking (PK36 HABB 4892)', amount: '-Rs. 98,000.00', status: 'Settled' },
    { id: 'TXN-98415', party: 'State Bank Treasury Profit Yield', ref: 'SBP-2026', date: 'Aug 01, 2026 - 08:00 AM', type: 'Credit', category: 'Yield Profit', account: 'Savings (PK68 MEZN 7120)', amount: '+Rs. 145,000.00', status: 'Settled' },
    { id: 'TXN-98414', party: 'PIA Corporate Air Travel', ref: 'PIA-8841', date: 'Jul 29, 2026 - 01:10 PM', type: 'Debit', category: 'Travel & Expense', account: 'Checking (PK36 HABB 4892)', amount: '-Rs. 62,050.00', status: 'Pending' },
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
    <div className="space-y-8 animate-fade dark:text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 card-shadow transition-colors">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Transaction Ledger (PKR)</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Audit-grade records of all Raast, interbank & wire transfers</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={() => setShowPdfModal(true)}>
            <FileText size={15} /> Official Statement (PDF)
          </Button>
          <Button size="sm" onClick={() => setShowTransferModal(true)}>
            <Send size={15} /> New Transfer
          </Button>
        </div>
      </div>
      <StatementPdfModal isOpen={showPdfModal} onClose={() => setShowPdfModal(false)} />

      {/* Table Card */}
      <Card className="p-0 overflow-hidden">
        {/* Search & Filter Bar */}
        <div className="p-5 border-b border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-800/40">
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search counterparty, reference ID..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 shrink-0">
            {['All', 'Deposits', 'Withdrawals'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white card-shadow font-bold' : 'hover:text-slate-900 dark:hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300 min-w-[800px]">
            <thead className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-800 font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <tr>
                <th className="py-3.5 px-6">Transaction ID</th>
                <th className="py-3.5 px-6">Beneficiary / Party</th>
                <th className="py-3.5 px-6">Category</th>
                <th className="py-3.5 px-6">Source Account</th>
                <th className="py-3.5 px-6">Date & Time</th>
                <th className="py-3.5 px-6 text-right">Amount (PKR)</th>
                <th className="py-3.5 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
              {filtered.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-6 font-mono font-semibold text-slate-900 dark:text-white">{tx.id}</td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{tx.party}</p>
                      <p className="text-[11px] text-slate-400 font-mono">Ref: {tx.ref}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                      {tx.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-500 dark:text-slate-400 font-medium">{tx.account}</td>
                  <td className="py-4 px-6 text-slate-500 dark:text-slate-400">{tx.date}</td>
                  <td className={`py-4 px-6 text-right font-extrabold text-sm ${tx.type === 'Credit' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
                    {tx.amount}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold border ${
                      tx.status === 'Settled' ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' : 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                    }`}>
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
              <h3 className="text-lg font-bold text-slate-900">Initiate Funds Transfer (Pakistani Banks)</h3>
              <button onClick={() => setShowTransferModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            {/* Transfer Mode Selector */}
            <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl text-xs font-bold">
              <button 
                onClick={() => setTransferType('wire')} 
                className={`flex-1 py-2 rounded-lg transition-all ${transferType === 'wire' ? 'bg-white text-slate-900 card-shadow font-extrabold' : 'text-slate-600'}`}
              >
                Raast / Wire Transfer
              </button>
              <button 
                onClick={() => setTransferType('deposit')} 
                className={`flex-1 py-2 rounded-lg transition-all ${transferType === 'deposit' ? 'bg-white text-slate-900 card-shadow font-extrabold' : 'text-slate-600'}`}
              >
                Cash Deposit
              </button>
              <button 
                onClick={() => setTransferType('withdraw')} 
                className={`flex-1 py-2 rounded-lg transition-all ${transferType === 'withdraw' ? 'bg-white text-slate-900 card-shadow font-extrabold' : 'text-slate-600'}`}
              >
                Cash Withdrawal
              </button>
            </div>

            <div className="space-y-4">
              {transferType === 'wire' && (
                <>
                  <Input label="Beneficiary Pakistani IBAN" placeholder="e.g. PK36 HABB 0001 2345 6789 0102" required />
                  <Input label="Beneficiary Account Title" placeholder="e.g. Tariq Mahmood" required />
                  <Input label="Transfer Amount (Rs.)" placeholder="e.g. 250000.00" type="number" required />
                  <Input label="Payment Reference / Note" placeholder="e.g. Invoice #2026-99" />
                </>
              )}

              {transferType === 'deposit' && (
                <>
                  <Input label="Target Account IBAN" placeholder="PK36 HABB 0001 2345 6789 4892" required />
                  <Input label="Deposit Amount (Rs.)" placeholder="50000.00" type="number" required />
                </>
              )}

              {transferType === 'withdraw' && (
                <>
                  <Input label="Source Account IBAN" placeholder="PK36 HABB 0001 2345 6789 4892" required />
                  <Input label="Withdrawal Amount (Rs.)" placeholder="10000.00" type="number" required />
                </>
              )}
            </div>

            <div className="flex items-center gap-3 pt-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowTransferModal(false)}>Cancel</Button>
              <Button className="flex-1" onClick={() => setShowTransferModal(false)}>Submit Transaction</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
