import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  CreditCard, 
  ArrowRight, 
  Globe2, 
  Zap, 
  Sparkles,
  Award
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-body selection:bg-blue-600 selection:text-white">
      {/* Top Header Nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 card-shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Building2 size={22} />
            </div>
            <div>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight block leading-none">CoreBank</span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Enterprise Platform</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button size="sm" onClick={() => navigate('/register')}>
              Open Account <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32 px-6">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 animate-fade">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <Sparkles size={14} /> NextGen Commercial Banking Engine
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Institutional Liquidity & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">Enterprise Banking</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Manage multi-currency treasury reserves, automated wire settlements, and commercial credit lines on an audit-grade digital core.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto px-8" onClick={() => navigate('/register')}>
              Access Portal Now <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 text-white border-slate-700 hover:bg-slate-800" onClick={() => navigate('/login')}>
              Explore Demo Workspace
            </Button>
          </div>

          {/* Compliance Ticker */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-slate-800 text-slate-400 text-xs">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span>SBP Regulated Banking</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award size={18} className="text-blue-400" />
              <span>1-Link & PayPak Partner</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe2 size={18} className="text-teal-400" />
              <span>Raast Instant Settlement</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap size={18} className="text-amber-400" />
              <span>99.99% Core Ledger Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-2 mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Platform Features</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Designed for Modern Financial Operations</h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">Complete Clean Architecture stack powering real-time account ledgers, credit lines, and card provisioning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="space-y-3 p-8 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Building2 size={24} />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">Multi-Account Liquidity</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Checking, High-Yield Treasury Savings, and Money Market accounts with real-time APY yield calculators.
            </p>
          </Card>

          <Card className="space-y-3 p-8 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">Commercial Credit & EMI</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Instant loan simulations, automated monthly EMI deduction background jobs, and amortization schedules.
            </p>
          </Card>

          <Card className="space-y-3 p-8 hover:border-blue-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <CreditCard size={24} />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900">Virtual & Physical Cards</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Instant virtual card issuance, spending limit controls, PIN resets, and lock controls.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-xs border-t border-slate-800 mt-auto">
        <p>&copy; {new Date().getFullYear()} CoreBank Platform. Built with .NET 10 & React. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
