import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row animate-fade font-body">
      {/* Registration Form Column */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-lg space-y-6">
          <div className="md:hidden flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <Building2 size={22} />
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">CoreBank</span>
          </div>

          <Card className="p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Apply for Corporate Account</h2>
              <p className="text-xs text-slate-500 mt-1">Institutional kyc verification & treasury onboarding</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="Muhammad"
                  icon={<User size={16} />}
                  required
                />
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Usman"
                  icon={<User size={16} />}
                  required
                />
              </div>

              <Input
                label="Corporate Email Address"
                type="email"
                placeholder="usman@company.pk"
                icon={<Mail size={16} />}
                required
              />

              <Input
                label="Phone Number (Pakistan)"
                type="tel"
                placeholder="+92 (300) 123-4567"
                icon={<Phone size={16} />}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  icon={<Lock size={16} />}
                  required
                />
                <Input
                  label="Confirm Password"
                  type="password"
                  placeholder="••••••••"
                  icon={<Lock size={16} />}
                  required
                />
              </div>

              <Button type="submit" className="w-full mt-2" size="md">
                Submit Account Application <ArrowRight size={16} />
              </Button>
            </form>

            <div className="text-center text-xs text-slate-500 pt-3 border-t border-slate-100">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700">
                Sign In
              </Link>
            </div>
          </Card>
        </div>
      </div>

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
            <ShieldCheck size={14} /> Instant 5-Min Setup
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight leading-snug">The Next Standard of Digital Banking</h2>
          <p className="text-xs text-slate-300 leading-relaxed">Join over 14,000 corporate clients managing digital liquidity, treasury yields & card controls.</p>
        </div>

        <div className="relative z-10 text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} CoreBank Technologies. State Bank of Pakistan (SBP) Regulated.
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
