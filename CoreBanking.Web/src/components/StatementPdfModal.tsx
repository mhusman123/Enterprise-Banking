import React from 'react';
import { Building2, ShieldCheck, Printer, X, CheckCircle2 } from 'lucide-react';
import Button from './Button';

interface StatementPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StatementPdfModal: React.FC<StatementPdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const transactions = [
    { date: '2026-08-14', ref: 'TXN-98421', party: 'Engro Corporation Ltd.', category: 'Client Transfer', type: 'Credit', amount: '+Rs. 2,450,000.00', balance: 'Rs. 27,932,075.00' },
    { date: '2026-08-13', ref: 'TXN-98420', party: 'K-Electric Power Supply', category: 'Utilities', type: 'Debit', amount: '-Rs. 184,000.00', balance: 'Rs. 25,482,075.00' },
    { date: '2026-08-12', ref: 'TXN-98419', party: 'NayaPay Merchant Payout', category: 'Merchant Earnings', type: 'Credit', amount: '+Rs. 892,040.00', balance: 'Rs. 25,666,075.00' },
    { date: '2026-08-10', ref: 'TXN-98418', party: 'Packages Limited Commercial Lease', category: 'Real Estate', type: 'Debit', amount: '-Rs. 450,000.00', balance: 'Rs. 24,774,035.00' },
    { date: '2026-08-08', ref: 'TXN-98417', party: 'Systems Limited Dividend Pay', category: 'Investment Yield', type: 'Credit', amount: '+Rs. 315,000.00', balance: 'Rs. 25,224,035.00' },
    { date: '2026-08-05', ref: 'TXN-98416', party: 'LMC Software Solutions', category: 'SaaS Infrastructure', type: 'Debit', amount: '-Rs. 98,000.00', balance: 'Rs. 24,909,035.00' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto animate-fade">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full p-6 sm:p-10 border border-slate-200 dark:border-slate-800 card-shadow-lg space-y-6 my-8 text-slate-900 dark:text-slate-100">
        {/* Modal Action Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-600" size={22} />
            <h3 className="text-lg font-extrabold">Official Account Statement Preview</h3>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <Printer size={15} /> Print / Save as PDF
            </Button>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1">
              <X size={22} />
            </button>
          </div>
        </div>

        {/* PRINTABLE DOCUMENT AREA */}
        <div id="printable-statement" className="bg-white text-slate-900 p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm space-y-8 select-text">
          {/* Header & Bank Branding */}
          <div className="flex items-start justify-between border-b-2 border-slate-900 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <Building2 size={26} />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">CoreBank Limited</h1>
                <p className="text-xs text-slate-500 font-semibold">State Bank of Pakistan Regulated Scheduled Bank</p>
                <p className="text-[11px] text-slate-400">Head Office: I.I. Chundrigar Road, Karachi, Pakistan</p>
              </div>
            </div>

            {/* Official Bank Stamp Badge */}
            <div className="text-center p-3 rounded-2xl border-2 border-emerald-600 bg-emerald-50/50 text-emerald-800 rotate-2">
              <div className="flex items-center justify-center gap-1 font-black text-xs uppercase tracking-wider">
                <CheckCircle2 size={14} className="text-emerald-600" />
                VERIFIED & STAMPED
              </div>
              <p className="text-[9px] font-mono text-emerald-700 mt-0.5">SBP CLEARING HOUSE SEAL #4892-PK</p>
            </div>
          </div>

          {/* Account Details & Holder Info */}
          <div className="grid grid-cols-2 gap-6 text-xs bg-slate-50 p-5 rounded-xl border border-slate-200/80">
            <div className="space-y-1">
              <p className="text-slate-400 uppercase font-bold tracking-wider text-[10px]">Account Holder Details</p>
              <p className="text-base font-extrabold text-slate-900">MUHAMMAD USMAN</p>
              <p className="text-slate-600">CNIC #: <span className="font-mono font-bold text-slate-900">42101-9876543-1</span></p>
              <p className="text-slate-600">Address: Executive Suite 402, Main Boulevard, Gulberg III, Lahore</p>
            </div>

            <div className="space-y-1 text-right">
              <p className="text-slate-400 uppercase font-bold tracking-wider text-[10px]">Statement Information</p>
              <p className="text-sm font-bold text-slate-900">Account #: <span className="font-mono">PK36 HABB 0001 2345 6789 4892</span></p>
              <p className="text-slate-600">Account Type: <span className="font-bold text-slate-900">HBL Corporate Premier Checking</span></p>
              <p className="text-slate-600">Statement Period: <span className="font-bold text-slate-900">July 01, 2026 – Aug 16, 2026</span></p>
            </div>
          </div>

          {/* Balance Summary Box */}
          <div className="grid grid-cols-4 gap-4 p-4 rounded-xl bg-slate-900 text-white text-center text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Opening Balance</span>
              <span className="text-sm font-extrabold">Rs. 24,909,035.00</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Total Credits</span>
              <span className="text-sm font-extrabold text-emerald-400">+Rs. 3,657,040.00</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Total Debits</span>
              <span className="text-sm font-extrabold text-rose-400">-Rs. 634,000.00</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Closing Liquidity</span>
              <span className="text-base font-black text-amber-300">Rs. 27,932,075.00</span>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">Itemized Audit Ledger</h4>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-y border-slate-300 text-slate-700 font-bold uppercase text-[10px]">
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Reference #</th>
                  <th className="py-2.5 px-3">Beneficiary / Party</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3 text-right">Amount (PKR)</th>
                  <th className="py-2.5 px-3 text-right">Running Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {transactions.map((tx, idx) => (
                  <tr key={idx} className="text-slate-800">
                    <td className="py-2.5 px-3 font-mono">{tx.date}</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">{tx.ref}</td>
                    <td className="py-2.5 px-3 font-bold">{tx.party}</td>
                    <td className="py-2.5 px-3 text-slate-500">{tx.category}</td>
                    <td className={`py-2.5 px-3 text-right font-bold ${tx.type === 'Credit' ? 'text-emerald-700' : 'text-slate-900'}`}>
                      {tx.amount}
                    </td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">{tx.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer & Signature */}
          <div className="pt-8 border-t border-slate-300 flex items-center justify-between text-[10px] text-slate-500">
            <div>
              <p className="font-bold text-slate-700">COMPUTER GENERATED OFFICIAL STATEMENT</p>
              <p>This document is cryptographically verified by CoreBank SBP Clearing Gateway.</p>
            </div>

            <div className="text-center space-y-1">
              <div className="w-32 border-b border-slate-400 mx-auto"></div>
              <p className="font-bold text-slate-800">Authorized Banking Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
