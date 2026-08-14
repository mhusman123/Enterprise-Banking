import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowLeftRight, 
  Landmark, 
  CreditCard, 
  ShieldAlert, 
  HelpCircle, 
  LogOut, 
  Menu, 
  X, 
  Bell, 
  Search, 
  PlusCircle,
  ShieldCheck,
  Building2,
  ChevronRight
} from 'lucide-react';
import Button from './Button';

export const SidebarNav: React.FC<{ isMobileOpen?: boolean; onCloseMobile?: () => void }> = ({ 
  isMobileOpen = false, 
  onCloseMobile 
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const mainNav = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Accounts', path: '/accounts', icon: Wallet },
    { name: 'Transactions', path: '/transactions', icon: ArrowLeftRight },
    { name: 'Loans & EMI', path: '/loans', icon: Landmark },
    { name: 'Cards', path: '/cards', icon: CreditCard },
  ];

  const adminNav = [
    { name: 'Admin Console', path: '/admin', icon: ShieldAlert },
    { name: 'Support & Help', path: '/support', icon: HelpCircle },
  ];

  const navContent = (
    <div className="flex flex-col h-full bg-[#0F172A] text-slate-300 w-64 border-r border-slate-800 select-none">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
        <NavLink to="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Building2 size={22} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg text-white tracking-tight">CoreBank</span>
              <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/30">PRO</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Enterprise Banking</p>
          </div>
        </NavLink>
        {onCloseMobile && (
          <button onClick={onCloseMobile} className="lg:hidden text-slate-400 hover:text-white p-1">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Nav Links */}
      <div className="flex-1 px-3 py-6 space-y-6 overflow-y-auto">
        <div>
          <p className="px-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">Core Banking</p>
          <div className="space-y-1">
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onCloseMobile}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight size={14} className="text-white/70" />}
                </NavLink>
              );
            })}
          </div>
        </div>

        <div>
          <p className="px-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">Management</p>
          <div className="space-y-1">
            {adminNav.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onCloseMobile}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight size={14} className="text-white/70" />}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Security Badge Card */}
        <div className="mx-1 p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
            <ShieldCheck size={16} />
            <span>256-Bit SSL Encrypted</span>
          </div>
          <p className="text-slate-400 leading-relaxed text-[11px]">Direct connection with core ledger node active.</p>
        </div>
      </div>

      {/* User Footer */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-900/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow">
                JD
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900"></span>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-white truncate">John Doe</p>
              <p className="text-xs text-slate-400 truncate">Account #4892</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/login')}
            title="Sign Out"
            className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:block h-screen sticky top-0 shrink-0 z-30">
        {navContent}
      </aside>

      {/* Mobile Slideover Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={onCloseMobile} />
          <div className="relative z-10 animate-slide-r">
            {navContent}
          </div>
        </div>
      )}
    </>
  );
};

export const HeaderTopBar: React.FC<{ onOpenMobileMenu?: () => void }> = ({ onOpenMobileMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = (path: string) => {
    switch (path) {
      case '/dashboard': return { title: 'Overview & Analytics', subtitle: 'Real-time account liquidity & summary' };
      case '/accounts': return { title: 'Bank Accounts', subtitle: 'Manage checking, savings & deposit accounts' };
      case '/transactions': return { title: 'Transaction Ledger', subtitle: 'Comprehensive audit trail of funds transfer' };
      case '/loans': return { title: 'Loans & Financing', subtitle: 'Active credit lines, EMI calculations & schedules' };
      case '/cards': return { title: 'Payment Cards', subtitle: 'Virtual & physical debit/credit card controls' };
      case '/admin': return { title: 'Admin & Audit Logs', subtitle: 'System administration & compliance records' };
      case '/support': return { title: 'Help & Customer Desk', subtitle: '24/7 Priority support & financial inquiry' };
      default: return { title: 'Core Banking', subtitle: 'Enterprise financial management' };
    }
  };

  const currentInfo = getPageTitle(location.pathname);

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex items-center justify-between gap-4 card-shadow">
      <div className="flex items-center gap-4 min-w-0">
        <button 
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <Menu size={22} />
        </button>
        <div className="min-w-0">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight truncate">{currentInfo.title}</h1>
          <p className="text-xs text-slate-500 hidden sm:block truncate">{currentInfo.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {/* Quick Search */}
        <div className="relative hidden md:block w-64">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search account, reference..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Quick Action Transfer */}
        <Button size="sm" onClick={() => navigate('/transactions')}>
          <PlusCircle size={15} />
          <span className="hidden sm:inline">Transfer Money</span>
        </Button>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
          <Bell size={19} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white"></span>
        </button>

        {/* Live Badge */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Live Node</span>
        </div>
      </div>
    </header>
  );
};

const NavBar: React.FC = () => {
  return null;
};

export default NavBar;
