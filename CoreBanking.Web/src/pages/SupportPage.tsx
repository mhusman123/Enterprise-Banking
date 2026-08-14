import React, { useState } from 'react';
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MessageSquare, 
  ChevronDown, 
  CheckCircle2, 
  Send,
  ShieldCheck,
  Search
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const SupportPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    { q: "What is the procedure for initiating international SWIFT wire transfers?", a: "Navigate to Transactions -> New Transfer -> Wire Transfer. Input the beneficiary's international IBAN and BIC/SWIFT code. High-value wires over $100,000 undergo automated compliance review and settle within 1-2 business days." },
    { q: "How are interest yields calculated on High-Yield Treasury Savings accounts?", a: "Yields are accrued daily based on the end-of-day ledger balance and posted automatically on the 1st of every month. Interest rates follow the Federal Benchmark APY." },
    { q: "What security measures protect corporate accounts against unauthorized access?", a: "All sessions utilize 256-Bit SSL encryption, multi-factor authentication (MFA), hardware security module (HSM) key rotation, and automated machine learning anomaly detection for out-of-pattern transfers." },
    { q: "How do I request spending limit increases for corporate cards?", a: "Corporate card managers can adjust limits instantly via the Cards tab, or submit a request directly through this support desk for permanent facility upgrades." },
  ];

  return (
    <div className="space-y-8 animate-fade max-w-6xl mx-auto">
      {/* Search Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 card-shadow-lg relative overflow-hidden text-center space-y-4">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <ShieldCheck size={14} /> 24/7 Priority Financial Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">How can we assist your business today?</h1>
          <p className="text-sm text-slate-300">Search our knowledge base or open a direct ticket with our senior banking officers.</p>
        </div>

        <div className="relative max-w-xl mx-auto z-10 pt-2">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text"
            placeholder="Search transfer limits, wire procedures, APY yields..."
            className="w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>
      </div>

      {/* Support Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="text-center space-y-3 hover:border-slate-300 transition-all cursor-pointer">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <Phone size={22} />
          </div>
          <h3 className="font-extrabold text-slate-900 text-base">Priority Phone Desk</h3>
          <p className="text-xs text-slate-500">24/7 Institutional Support Line</p>
          <p className="text-sm font-bold text-blue-600 font-mono">+1 (800) 555-CORE-BANK</p>
        </Card>

        <Card className="text-center space-y-3 hover:border-slate-300 transition-all cursor-pointer">
          <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <Mail size={22} />
          </div>
          <h3 className="font-extrabold text-slate-900 text-base">Official Banking Desk</h3>
          <p className="text-xs text-slate-500">Guaranteed response within 4 hours</p>
          <p className="text-sm font-bold text-emerald-600 font-mono">support@corebank.com</p>
        </Card>

        <Card className="text-center space-y-3 hover:border-slate-300 transition-all cursor-pointer">
          <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto">
            <MessageSquare size={22} />
          </div>
          <h3 className="font-extrabold text-slate-900 text-base">Encrypted Live Chat</h3>
          <p className="text-xs text-slate-500">Secure session with assigned banker</p>
          <Button size="sm" variant="outline" className="w-full">Start Secure Chat</Button>
        </Card>
      </div>

      {/* Grid: FAQs & Ticket Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {/* FAQs */}
        <div className="space-y-4">
          <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <HelpCircle className="text-blue-600" size={20} /> Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-slate-200/80 card-shadow transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-sm text-slate-900 hover:text-blue-600">
                  {faq.q}
                  <ChevronDown size={18} className="text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  <p className="pt-2">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Ticket Form */}
        <div>
          <Card className="space-y-4">
            <div className="pb-3 border-b border-slate-100">
              <h2 className="text-lg font-extrabold text-slate-900">Submit Priority Support Ticket</h2>
              <p className="text-xs text-slate-500">Direct dispatch to dedicated compliance officer</p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 size={36} className="text-emerald-600 mx-auto" />
                <h3 className="text-base font-extrabold text-emerald-900">Ticket Submitted Successfully</h3>
                <p className="text-xs text-emerald-700">Ticket reference ID #TKT-99120. A banking officer will respond to your registered email shortly.</p>
                <Button size="sm" variant="outline" onClick={() => setSubmitted(false)}>Submit Another Ticket</Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid grid-cols-2 gap-3">
                  <Input label="First Name" defaultValue="John" required />
                  <Input label="Last Name" defaultValue="Doe" required />
                </div>
                <Input label="Corporate Email" type="email" defaultValue="john.doe@company.com" required />
                <Input label="Subject / Inquiry Topic" placeholder="e.g. SWIFT Wire Limit Upgrade" required />

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Detailed Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide relevant transaction references or details..."
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-900 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  <Send size={15} /> Dispatch Support Ticket
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
