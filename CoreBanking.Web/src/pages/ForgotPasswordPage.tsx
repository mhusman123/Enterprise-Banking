import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Building2, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

const ForgotPasswordPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 animate-fade font-body">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
            <Building2 size={22} />
          </div>
          <span className="text-2xl font-extrabold text-slate-900 tracking-tight">CoreBank</span>
        </div>

        <Card className="p-8 space-y-6">
          <Link to="/login" className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={14} className="mr-1" />
            Back to Sign In
          </Link>

          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Account Recovery</h2>
            <p className="text-xs text-slate-500 mt-1">We will dispatch password reset instructions to your registered business email.</p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
              <h3 className="text-base font-extrabold text-emerald-900">Reset Email Dispatched</h3>
              <p className="text-xs text-emerald-700">Check your inbox for a secure token link. Link expires in 15 minutes.</p>
              <Button size="sm" variant="outline" className="w-full" onClick={() => setSubmitted(false)}>Resend Email</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Registered Business Email"
                type="email"
                placeholder="usman@company.pk"
                icon={<Mail size={16} />}
                required
              />
              <Button type="submit" className="w-full" size="md">
                Send Reset Token
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
