import React, { useState } from 'react';
import { 
  QrCode, 
  Scan, 
  CheckCircle2, 
  ArrowRight,
  Store
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const mockMerchants = [
  { id: 'm1', name: 'Al-Fateh Shopping Mall (Lahore)', code: 'QR-ALF-9921', category: 'Retail Supermarket' },
  { id: 'm2', name: 'Shell Petrol Station (Main Boulevard)', code: 'QR-SHL-4410', category: 'Fuel & Petroleum' },
  { id: 'm3', name: 'K-Electric Customer Center', code: 'QR-KE-1002', category: 'Utility Counter' },
  { id: 'm4', name: 'NayaPay Merchant Kiosk', code: 'QR-NYP-8812', category: 'Merchant Store' },
];

const QrPayPage: React.FC = () => {
  const [tab, setTab] = useState<'scan' | 'my-qr'>('scan');
  const [selectedMerchant, setSelectedMerchant] = useState(mockMerchants[0]);
  const [amount, setAmount] = useState<string>('2500');
  const [pin, setPin] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleSimulateScan = (merchant: typeof mockMerchants[0]) => {
    setSelectedMerchant(merchant);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <div className="space-y-8 animate-fade dark:text-slate-100 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 card-shadow transition-colors">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Raast QR Code Pay</h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800">SBP RAAST INTEGRATED</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Scan merchant QR codes for instant store checkouts or receive money</p>
        </div>

        {/* Selector Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold shrink-0">
          <button
            onClick={() => setTab('scan')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              tab === 'scan' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white card-shadow font-extrabold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Scan size={15} /> Scan Merchant QR
          </button>
          <button
            onClick={() => setTab('my-qr')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              tab === 'my-qr' ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white card-shadow font-extrabold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <QrCode size={15} /> My Raast QR
          </button>
        </div>
      </div>

      {/* Tab 1: Scan Merchant QR */}
      {tab === 'scan' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Camera Scanner Simulation */}
          <div className="md:col-span-6 space-y-4">
            <Card className="p-6 text-center dark:bg-slate-900 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
                Interactive Viewfinder Simulator
              </span>

              <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-3xl bg-slate-950 border-4 border-blue-500/40 p-4 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
                {/* Laser Scanning Line Animation */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#38bdf8] animate-pulse top-1/3"></div>

                <div className="w-44 h-44 bg-white p-3 rounded-2xl flex flex-col items-center justify-center space-y-2 shadow-inner">
                  <QrCode size={120} className="text-slate-900" />
                  <span className="text-[10px] font-mono font-bold text-slate-500">{selectedMerchant.code}</span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Camera Active (Scanning...)</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                <p className="font-bold text-slate-700 dark:text-slate-300 mb-2">Simulate Scanning Demo Merchant:</p>
                <div className="grid grid-cols-2 gap-2">
                  {mockMerchants.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => handleSimulateScan(m)}
                      className={`p-2 rounded-xl text-left border text-[11px] transition-all ${
                        selectedMerchant.id === m.id
                          ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-500 font-bold text-blue-900 dark:text-blue-200'
                          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <p className="truncate font-bold">{m.name.split(' ')[0]}</p>
                      <p className="text-[9px] text-slate-400 truncate">{m.category}</p>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="md:col-span-6 space-y-4">
            <Card className="space-y-6 dark:bg-slate-900 dark:border-slate-800">
              <div className="pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Scanned Merchant</span>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{selectedMerchant.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Store size={20} />
                </div>
              </div>

              <form onSubmit={handlePay} className="space-y-4">
                <Input
                  label="Payment Amount (Rs.)"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="2500"
                  required
                />

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Debit Account
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 text-sm font-medium text-slate-900 dark:text-white outline-none">
                    <option>HBL Corporate Checking (Balance: Rs. 27,932,075.00)</option>
                    <option>Meezan Islamic Savings (Balance: Rs. 14,892,050.50)</option>
                  </select>
                </div>

                <Input
                  label="Enter 4-Digit Security PIN"
                  type="password"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="••••"
                  required
                />

                <Button type="submit" size="lg" className="w-full">
                  Pay Rs. {Number(amount || 0).toLocaleString()} Now <ArrowRight size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      )}

      {/* Tab 2: My Raast QR */}
      {tab === 'my-qr' && (
        <Card className="p-8 text-center space-y-6 max-w-md mx-auto dark:bg-slate-900 dark:border-slate-800">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block">
              State Bank of Pakistan (Raast)
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Muhammad Usman</h3>
            <p className="text-xs text-slate-500 font-mono">IBAN: PK36 HABB 0001 2345 6789 4892</p>
          </div>

          <div className="w-64 h-64 mx-auto p-4 rounded-3xl bg-gradient-to-tr from-slate-950 to-slate-900 text-white flex flex-col items-center justify-center space-y-3 shadow-2xl border border-slate-800">
            <div className="w-48 h-48 bg-white p-3 rounded-2xl flex items-center justify-center">
              <QrCode size={160} className="text-slate-900" />
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">RAAST INSTANT QR ACTIVE</span>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
            Show this QR code to any banking app in Pakistan to receive payments directly into your HBL account.
          </p>

          <Button variant="outline" size="sm" className="w-full" onClick={() => alert('QR Code Image Saved to Downloads!')}>
            Save QR Image to Device
          </Button>
        </Card>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 card-shadow-lg space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">QR Payment Sent!</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Raast Ref: #RST-88910492</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Paid To:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedMerchant.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Amount Paid:</span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">Rs. {Number(amount).toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Source:</span>
                <span className="font-mono text-slate-900 dark:text-white">HBL Checking (PK36 HABB)</span>
              </div>
            </div>

            <Button size="md" className="w-full" onClick={() => setShowSuccess(false)}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QrPayPage;
