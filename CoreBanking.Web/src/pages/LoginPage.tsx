import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row animate-fade font-body">
      {/* Dark Corporate Sidebar */}
      <div className="hidden md:flex md:w-5/12 bg-slate-900 text-white p-12 flex-col justify-between relative overflow-hidden select-none">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center text-white shadow-lg">
            <Building2 size={22} />
          </div>
          <Link to="/" className="text-2xl font-extrabold text-white tracking-tight">CoreBank</Link>
        </div>

        <div className="relative z-10 max-w-sm space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <ShieldCheck size={14} /> Encrypted Login Tunnel
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight leading-snug">Secure Institutional Access Portal</h2>
          <p className="text-xs text-slate-300 leading-relaxed">Access real-time treasury balances, wire disbursements & commercial credit management.</p>
        </div>

        <div className="relative z-10 text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} CoreBank Technologies. 256-Bit SSL Active.
        </div>
      </div>

      {/* Login Form Column */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="md:hidden flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <Building2 size={22} />
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">CoreBank</span>
          </div>

          <Card className="p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Sign In to Workspace</h2>
              <p className="text-xs text-slate-500 mt-1">Enter your registered business email and password</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                label="Corporate Email Address"
                type="email"
                placeholder="john.doe@company.com"
                icon={<Mail size={16} />}
                required
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                icon={<Lock size={16} />}
                required
              />

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded accent-blue-600" />
                  <span>Remember session</span>
                </label>
                <Link to="/forgot-password" className="font-semibold text-blue-600 hover:text-blue-700">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" className="w-full" size="md">
                Sign In to Dashboard <ArrowRight size={16} />
              </Button>
            </form>

            <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
              Don't have a commercial account?{' '}
              <Link to="/register" className="font-bold text-blue-600 hover:text-blue-700">
                Apply for Account
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
