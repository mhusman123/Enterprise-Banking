import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  Plus, 
  Wifi, 
  Globe, 
  Smartphone, 
  DollarSign,
  Sliders
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const CardsPage: React.FC = () => {
  const [showCvv, setShowCvv] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cardsList = [
    {
      id: 'CRD-9011',
      name: 'Corporate Black Obsidian',
      holder: 'MUHAMMAD USMAN',
      number: '4892 •••• •••• 9011',
      cvv: '849',
      exp: '08/29',
      type: 'PayPak / Visa Infinite Corporate',
      limit: 5000000,
      used: 1245080.00,
      gradient: 'from-slate-950 via-slate-900 to-slate-800 border-slate-700',
      textColor: 'text-amber-400'
    },
    {
      id: 'CRD-4412',
      name: 'Executive Emerald Debit',
      holder: 'MUHAMMAD USMAN',
      number: '5219 •••• •••• 4412',
      cvv: '102',
      exp: '11/28',
      type: 'PayPak Debit',
      limit: 2500000,
      used: 389000.00,
      gradient: 'from-emerald-950 via-teal-900 to-emerald-900 border-teal-700',
      textColor: 'text-emerald-300'
    }
  ];

  const currentCard = cardsList[activeCardIndex];

  return (
    <div className="space-y-8 animate-fade dark:text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 card-shadow transition-colors">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Payment Cards & Security (Pakistan)</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">PayPak & UnionPay / Visa debit controls, limits & PIN management</p>
        </div>
        <Button size="sm">
          <Plus size={16} /> Issue New Virtual Card
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Visual Card Display & Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card Selector Tabs */}
          <div className="flex items-center gap-2 p-1 bg-slate-200/60 rounded-xl text-xs font-bold">
            {cardsList.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCardIndex(idx)}
                className={`flex-1 py-2 rounded-lg transition-all ${activeCardIndex === idx ? 'bg-white text-slate-900 card-shadow font-extrabold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {c.name.split(' ')[1]} Card
              </button>
            ))}
          </div>

          {/* Realistic Metallic Bank Card */}
          <div className={`relative w-full aspect-[1.586/1] rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${currentCard.gradient} text-white shadow-2xl border flex flex-col justify-between overflow-hidden select-none`}>
            {/* Background Texture & Glow */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">CoreBank Corporate (SBP)</span>
                <span className={`text-xs font-extrabold tracking-wider ${currentCard.textColor}`}>{currentCard.type}</span>
              </div>
              <Wifi size={24} className="text-slate-300/80 rotate-90" />
            </div>

            {/* Chip & Contactless */}
            <div className="relative z-10 flex items-center gap-4 my-2">
              <div className="w-11 h-8 rounded-md bg-gradient-to-tr from-amber-200 to-amber-400 border border-amber-300/80 flex items-center justify-center shadow-inner">
                <div className="w-7 h-5 border border-amber-800/30 rounded"></div>
              </div>
            </div>

            {/* Number & Details */}
            <div className="relative z-10 space-y-3">
              <div className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-white drop-shadow">
                {currentCard.number}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-2 border-t border-white/10">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-sans">Cardholder Name</span>
                  <span className="font-bold tracking-wider text-white">{currentCard.holder}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-sans">Expires</span>
                  <span className="font-bold text-white">{currentCard.exp}</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-sans">CVV Security</span>
                  <span className="font-bold text-teal-300">{showCvv ? currentCard.cvv : '•••'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Security Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <Button 
              variant={isLocked ? 'danger' : 'outline'} 
              size="sm" 
              className="w-full"
              onClick={() => setIsLocked(!isLocked)}
            >
              {isLocked ? <Lock size={15} /> : <Unlock size={15} />}
              <span>{isLocked ? 'Locked' : 'Lock Card'}</span>
            </Button>

            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={() => setShowCvv(!showCvv)}
            >
              {showCvv ? <EyeOff size={15} /> : <Eye size={15} />}
              <span>{showCvv ? 'Hide CVV' : 'View CVV'}</span>
            </Button>

            <Button variant="outline" size="sm" className="w-full">
              <Sliders size={15} />
              <span>Reset PIN</span>
            </Button>
          </div>
        </div>

        {/* Card Settings & Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card Limits Summary */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Monthly Spending Limits</h3>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded-lg">
                Limit Reset in 16 Days
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-600 dark:text-slate-300">
                  <span>Spent This Month (Rs. {currentCard.used.toLocaleString()})</span>
                  <span className="font-bold text-slate-900 dark:text-white">Rs. {currentCard.limit.toLocaleString()} Limit</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${(currentCard.used / currentCard.limit) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Remaining Allowance</span>
                  <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                    Rs. {(currentCard.limit - currentCard.used).toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider">Daily 1-Link ATM Limit</span>
                  <span className="text-base font-bold text-slate-800 dark:text-slate-200">Rs. 250,000.00</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Security Controls Toggle Switches */}
          <Card>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
              Security & Merchant Controls
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Online & E-Commerce Payments</p>
                    <p className="text-xs text-slate-400">Allow card purchases on web & app platforms</p>
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 accent-blue-600 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Contactless NFC / Apple Pay</p>
                    <p className="text-xs text-slate-400">Tap to pay at physical POS terminals</p>
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 accent-blue-600 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <DollarSign size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">ATM Cash Withdrawals</p>
                    <p className="text-xs text-slate-400">Enable physical ATM cash disbursements</p>
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 accent-blue-600 cursor-pointer" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
