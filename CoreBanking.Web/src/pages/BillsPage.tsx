import React, { useState } from 'react';
import { 
  Zap, 
  Smartphone, 
  Flame, 
  Wifi, 
  CheckCircle2, 
  Search, 
  ArrowRight,
  Receipt,
  FileSpreadsheet
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

interface BillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  billers: { id: string; name: string; code: string; sampleConsumer: string }[];
}

const categories: BillCategory[] = [
  {
    id: 'electricity',
    name: 'Electricity',
    icon: Zap,
    color: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    billers: [
      { id: 'ke', name: 'K-Electric (Karachi)', code: 'KE-1002', sampleConsumer: '0400012984712' },
      { id: 'lesco', name: 'LESCO (Lahore Electric)', code: 'LES-9901', sampleConsumer: '1120492810492' },
      { id: 'iesco', name: 'IESCO (Islamabad Electric)', code: 'IES-4412', sampleConsumer: '0812948120491' },
      { id: 'fesco', name: 'FESCO (Faisalabad Electric)', code: 'FES-7712', sampleConsumer: '0512049120491' },
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile Load & Bundles',
    icon: Smartphone,
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    billers: [
      { id: 'jazz', name: 'Jazz / Warid Top-up', code: 'JAZZ-PK', sampleConsumer: '03001234567' },
      { id: 'telenor', name: 'Telenor Pakistan', code: 'TEL-PK', sampleConsumer: '03451234567' },
      { id: 'zong', name: 'Zong 4G CMPak', code: 'ZONG-PK', sampleConsumer: '03121234567' },
      { id: 'ufone', name: 'Ufone 4G PTCL', code: 'UFO-PK', sampleConsumer: '03331234567' },
    ]
  },
  {
    id: 'gas',
    name: 'Sui Gas Utilities',
    icon: Flame,
    color: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    billers: [
      { id: 'ssgc', name: 'SSGC (Sui Southern Gas)', code: 'SSGC-01', sampleConsumer: '9912049182' },
      { id: 'sngpl', name: 'SNGPL (Sui Northern Gas)', code: 'SNG-02', sampleConsumer: '8812948192' },
    ]
  },
  {
    id: 'internet',
    name: 'Internet & Broadband',
    icon: Wifi,
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    billers: [
      { id: 'ptcl', name: 'PTCL Broadband / Flash Fiber', code: 'PTCL-BB', sampleConsumer: '02135894100' },
      { id: 'stormfiber', name: 'StormFiber FTTH', code: 'SF-FTTH', sampleConsumer: 'SF-99120' },
      { id: 'nayatel', name: 'Nayatel Fiber', code: 'NT-FIB', sampleConsumer: 'NT-88192' },
    ]
  }
];

const mobileBundles = [
  { id: 'b1', name: 'Monthly Super Max', data: '100 GB', mins: '10,000 Mins', validity: '30 Days', price: 1499 },
  { id: 'b2', name: 'Weekly Mega Data', data: '40 GB', mins: '500 Mins', validity: '7 Days', price: 449 },
  { id: 'b3', name: 'Daily Express Load', data: '5 GB', mins: 'Unlimited', validity: '1 Day', price: 99 },
];

const BillsPage: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>('electricity');
  const [selectedBillerId, setSelectedBillerId] = useState<string>('ke');
  const [consumerNum, setConsumerNum] = useState<string>('0400012984712');
  const [selectedAccount, setSelectedAccount] = useState<string>('PK36 HABB 4892');
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [selectedBundleId, setSelectedBundleId] = useState<string>('b1');
  const [showReceipt, setShowReceipt] = useState<boolean>(false);

  const activeCategory = categories.find(c => c.id === selectedCatId) || categories[0];
  const activeBiller = activeCategory.billers.find(b => b.id === selectedBillerId) || activeCategory.billers[0];

  const handleFetchBill = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFetched(true);
  };

  const handlePayBill = () => {
    setShowReceipt(true);
  };

  const getBillAmount = () => {
    if (selectedCatId === 'mobile') {
      const b = mobileBundles.find(x => x.id === selectedBundleId);
      return b ? b.price : 1000;
    }
    return 14850;
  };

  return (
    <div className="space-y-8 animate-fade dark:text-slate-100">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 card-shadow transition-colors">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Utility Bills & Mobile Load</h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">1-LINK POWERED</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Pay K-Electric, Sui Gas, PTCL & Top-up Jazz/Telenor/Zong packages instantly</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Receipt size={15} /> Payment History
          </Button>
        </div>
      </div>

      {/* Category Tabs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCatId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCatId(cat.id);
                setSelectedBillerId(cat.billers[0].id);
                setConsumerNum(cat.billers[0].sampleConsumer);
                setIsFetched(false);
              }}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-white dark:bg-slate-800 border-blue-500 shadow-md ring-2 ring-blue-500/20'
                  : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.color}`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="font-extrabold text-sm text-slate-900 dark:text-white">{cat.name}</p>
                <p className="text-[11px] text-slate-400 font-medium">{cat.billers.length} Biller Companies</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Payment Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="space-y-6 dark:bg-slate-900 dark:border-slate-800">
            <div className="pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                1. Select Biller & Enter Account Details
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Integrated with 1-Link Bill Payment System (State Bank of Pakistan)</p>
            </div>

            <form onSubmit={handleFetchBill} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Select Utility Provider
                </label>
                <select
                  value={selectedBillerId}
                  onChange={(e) => {
                    setSelectedBillerId(e.target.value);
                    const b = activeCategory.billers.find(x => x.id === e.target.value);
                    if (b) setConsumerNum(b.sampleConsumer);
                    setIsFetched(false);
                  }}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {activeCategory.billers.map((b) => (
                    <option key={b.id} value={b.id}>{b.name} ({b.code})</option>
                  ))}
                </select>
              </div>

              <div>
                <Input
                  label={selectedCatId === 'mobile' ? "Mobile Number (11 Digits)" : "Consumer Number / Account ID"}
                  value={consumerNum}
                  onChange={(e) => setConsumerNum(e.target.value)}
                  placeholder={activeBiller.sampleConsumer}
                  required
                />
              </div>

              {selectedCatId === 'mobile' && (
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Select Mobile Package / Bundle
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {mobileBundles.map((bun) => (
                      <div
                        key={bun.id}
                        onClick={() => setSelectedBundleId(bun.id)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          selectedBundleId === bun.id
                            ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 font-bold text-blue-900 dark:text-blue-200'
                            : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <p className="font-extrabold text-sm">{bun.name}</p>
                        <p className="text-emerald-600 dark:text-emerald-400 font-bold mt-1">Rs. {bun.price}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{bun.data} • {bun.validity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Payment Account
                </label>
                <select
                  value={selectedAccount}
                  onChange={(e) => setSelectedAccount(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 text-sm font-medium text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="PK36 HABB 4892">HBL Corporate Checking (Balance: Rs. 27,932,075.00)</option>
                  <option value="PK68 MEZN 7120">Meezan Islamic Savings (Balance: Rs. 14,892,050.50)</option>
                </select>
              </div>

              <Button type="submit" size="md" className="w-full">
                <Search size={16} /> Fetch Bill Details
              </Button>
            </form>
          </Card>
        </div>

        {/* Bill Summary / Receipt Column */}
        <div className="lg:col-span-5 space-y-6">
          {isFetched ? (
            <Card className="bg-slate-900 text-white border-0 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block">1-Link Verification</span>
                  <h4 className="text-lg font-extrabold text-white">{activeBiller.name}</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                  UNPAID
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Consumer Title:</span>
                  <span className="text-white font-bold">MUHAMMAD USMAN</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Consumer ID:</span>
                  <span className="text-white font-mono font-semibold">{consumerNum}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Billing Month:</span>
                  <span className="text-white font-semibold">August 2026</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Due Date:</span>
                  <span className="text-amber-400 font-bold">Aug 28, 2026</span>
                </div>
                <div className="flex justify-between text-slate-400 pt-3 border-t border-slate-800 text-sm">
                  <span className="font-bold text-white">Total Payable Amount:</span>
                  <span className="text-2xl font-extrabold text-emerald-400">
                    Rs. {getBillAmount().toLocaleString()}.00
                  </span>
                </div>
              </div>

              <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white" onClick={handlePayBill}>
                Confirm & Pay Rs. {getBillAmount().toLocaleString()} Now <ArrowRight size={18} />
              </Button>
            </Card>
          ) : (
            <Card className="text-center py-12 space-y-3 dark:bg-slate-900 dark:border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                <Receipt size={28} />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">No Bill Fetched Yet</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                Select your provider and enter consumer number on the left to pull live billing information.
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Success Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 card-shadow-lg space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Payment Successful!</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">1-Link Receipt Ref: #1LK-99401294</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Provider:</span>
                <span className="font-bold text-slate-900 dark:text-white">{activeBiller.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Consumer #:</span>
                <span className="font-mono text-slate-900 dark:text-white">{consumerNum}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Amount Paid:</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">Rs. {getBillAmount().toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Debited From:</span>
                <span className="font-mono text-slate-900 dark:text-white">{selectedAccount}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setShowReceipt(false)}>Close</Button>
              <Button className="flex-1" onClick={() => window.print()}>
                <FileSpreadsheet size={15} /> Print Receipt
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillsPage;
