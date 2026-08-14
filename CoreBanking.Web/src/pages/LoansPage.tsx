import React, { useState } from 'react';
import { 
  Landmark, 
  Calculator, 
  Clock, 
  DollarSign, 
  Sparkles, 
  Calendar,
  FileText
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const LoansPage: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [termMonths, setTermMonths] = useState(36);
  const [interestRate] = useState(5.5); // Annual interest rate

  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 100 / 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1)
  );
  const totalRepayment = emi * termMonths;
  const totalInterest = totalRepayment - loanAmount;

  const activeLoans = [
    {
      id: 'LN-88410',
      title: 'Commercial Equipment Financing',
      facility: 'Term Loan A',
      principal: 150000,
      remaining: 82450.00,
      nextEmiAmount: 3850.00,
      dueDate: 'Sep 01, 2026',
      rate: '4.75% Fixed',
      progress: 45,
      paidInstallments: 18,
      totalInstallments: 48,
    },
    {
      id: 'LN-99214',
      title: 'Corporate Real Estate Expansion',
      facility: 'Commercial Mortgage',
      principal: 500000,
      remaining: 380000.00,
      nextEmiAmount: 5200.00,
      dueDate: 'Sep 15, 2026',
      rate: '5.25% Fixed',
      progress: 24,
      paidInstallments: 12,
      totalInstallments: 60,
    }
  ];

  const repaymentSchedule = [
    { no: 1, due: 'Sep 01, 2026', principal: '$3,180.00', interest: '$670.00', total: '$3,850.00', status: 'Pending' },
    { no: 2, due: 'Oct 01, 2026', principal: '$3,195.00', interest: '$655.00', total: '$3,850.00', status: 'Upcoming' },
    { no: 3, due: 'Nov 01, 2026', principal: '$3,210.00', interest: '$640.00', total: '$3,850.00', status: 'Upcoming' },
    { no: 4, due: 'Dec 01, 2026', principal: '$3,225.00', interest: '$625.00', total: '$3,850.00', status: 'Upcoming' },
  ];

  return (
    <div className="space-y-8 animate-fade">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 card-shadow">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Loans & Credit Facilities</h1>
          <p className="text-xs text-slate-500 mt-1">Corporate credit lines, commercial mortgages & EMI repayment schedules</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <FileText size={15} /> Download Credit Agreement
          </Button>
          <Button size="sm">
            <Sparkles size={15} /> Apply For New Line
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Principal Drawn</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Landmark size={18} />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">$650,000.00</h2>
          <span className="text-xs text-slate-400 mt-2">Across 2 Active Facilities</span>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Remaining Balance</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <DollarSign size={18} />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">$462,450.00</h2>
          <span className="text-xs text-emerald-600 font-semibold mt-2">29% Total Debt Repaid</span>
        </Card>

        <Card className="flex flex-col justify-between bg-slate-900 text-white border-0 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Next Monthly EMI Due</span>
            <div className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center">
              <Calendar size={18} />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">$9,050.00</h2>
          <div className="flex items-center justify-between text-xs text-slate-300 mt-2 pt-2 border-t border-slate-700">
            <span>Due Sep 01, 2026</span>
            <span className="text-emerald-400 font-bold">Auto-Debit On</span>
          </div>
        </Card>
      </div>

      {/* Main Grid: Active Facilities & Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Facilities */}
        <div className="lg:col-span-2 space-y-5">
          <h3 className="text-lg font-bold text-slate-900">Active Credit Facilities</h3>

          <div className="space-y-4">
            {activeLoans.map((loan) => (
              <Card key={loan.id} className="relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-slate-400">{loan.id}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">{loan.facility}</span>
                    </div>
                    <h4 className="text-lg font-extrabold text-slate-900 mt-0.5">{loan.title}</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 self-start sm:self-auto">
                    {loan.rate}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5 text-xs">
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wider">Original Principal</span>
                    <span className="text-sm font-bold text-slate-800">${loan.principal.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wider">Remaining Principal</span>
                    <span className="text-sm font-bold text-slate-900">${loan.remaining.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wider">Monthly EMI</span>
                    <span className="text-sm font-bold text-blue-600">${loan.nextEmiAmount.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase tracking-wider">Next Due Date</span>
                    <span className="text-sm font-bold text-slate-800">{loan.dueDate}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <span>Repayment Progress ({loan.paidInstallments} / {loan.totalInstallments} EMIs)</span>
                    <span className="font-bold text-slate-900">{loan.progress}% Paid</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: `${loan.progress}%` }}></div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end gap-3">
                  <Button variant="outline" size="sm">View Repayment Schedule</Button>
                  <Button size="sm">Pay EMI Early</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Live EMI Calculator */}
        <div>
          <Card className="bg-slate-900 text-white border-0 shadow-xl sticky top-24">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Calculator size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Commercial EMI Simulator</h3>
                <p className="text-xs text-slate-400">Instant credit line cost preview</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1 text-slate-300">
                  <span>Facility Amount</span>
                  <span className="text-blue-400 font-bold">${loanAmount.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="5000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Repayment Tenure (Months)</label>
                <select
                  value={termMonths}
                  onChange={(e) => setTermMonths(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-2.5 text-xs text-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value={12}>12 Months (1 Year)</option>
                  <option value={24}>24 Months (2 Years)</option>
                  <option value={36}>36 Months (3 Years)</option>
                  <option value={48}>48 Months (4 Years)</option>
                  <option value={60}>60 Months (5 Years)</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Interest Rate (Benchmark)</span>
                  <span className="text-emerald-400 font-semibold">{interestRate}% p.a.</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Total Interest Payable</span>
                  <span className="text-white font-semibold">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-700">
                  <span className="font-bold text-white">Estimated Monthly EMI</span>
                  <span className="text-lg font-extrabold text-teal-400">${emi.toLocaleString()} / mo</span>
                </div>
              </div>

              <Button className="w-full" size="md">
                Apply For ${loanAmount.toLocaleString()} Credit Line
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Repayment Schedule Table */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Upcoming Repayment Schedule</h3>
            <p className="text-xs text-slate-500">Amortization installments for Equipment Financing (LN-88410)</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-y border-slate-200/80 font-bold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="py-3 px-6">Installment #</th>
                <th className="py-3 px-6">Due Date</th>
                <th className="py-3 px-6">Principal Amount</th>
                <th className="py-3 px-6">Interest Amount</th>
                <th className="py-3 px-6 text-right">Total Installment</th>
                <th className="py-3 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {repaymentSchedule.map((row) => (
                <tr key={row.no} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-6 font-bold text-slate-900">Installment #{row.no}</td>
                  <td className="py-3.5 px-6 text-slate-500 font-medium">{row.due}</td>
                  <td className="py-3.5 px-6 font-semibold text-slate-800">{row.principal}</td>
                  <td className="py-3.5 px-6 text-slate-500">{row.interest}</td>
                  <td className="py-3.5 px-6 text-right font-extrabold text-slate-900">{row.total}</td>
                  <td className="py-3.5 px-6 text-center">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                      row.status === 'Pending'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      <Clock size={12} /> {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default LoansPage;
