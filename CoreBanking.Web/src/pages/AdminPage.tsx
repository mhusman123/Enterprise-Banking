import React from 'react';
import { 
  Users, 
  FileText, 
  Search, 
  Server, 
  Lock, 
  Terminal,
  Filter
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const AdminPage: React.FC = () => {

  const auditLogs = [
    { id: 'LOG-9941', time: '2026-08-14 10:45:12', user: 'sysadmin_lead', action: 'Approved Commercial Mortgage #LN-99214', ip: '10.240.88.19', severity: 'Info' },
    { id: 'LOG-9940', time: '2026-08-14 09:30:00', user: 'compliance_officer', action: 'Flagged Wire Transfer #TXN-98421 for AML Review', ip: '10.240.88.42', severity: 'Warning' },
    { id: 'LOG-9939', time: '2026-08-14 08:15:22', user: 'cron_scheduler', action: 'Automated EMI Deduction Job Completed (148 Loans Processed)', ip: 'localhost', severity: 'Info' },
    { id: 'LOG-9938', time: '2026-08-13 16:50:11', user: 'sec_admin', action: 'Rotated JWT Private Signing Keys', ip: '10.240.88.01', severity: 'Critical' },
    { id: 'LOG-9937', time: '2026-08-13 14:12:44', user: 'teller_mgr', action: 'Unfrozen Account #4892-1092-8841', ip: '10.240.88.15', severity: 'Info' },
  ];

  return (
    <div className="space-y-8 animate-fade dark:text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 card-shadow transition-colors">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">System Admin & Compliance Console</h1>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">RESTRICTED ROLE</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Platform liquidity monitoring, customer account oversight & security audit logs</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Terminal size={15} /> System Diagnostics
          </Button>
          <Button variant="danger" size="sm">
            <Lock size={15} /> Emergency Freeze Node
          </Button>
        </div>
      </div>

      {/* Core Platform Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Active Customers</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Users size={18} />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">14,890</h2>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-2">+120 Verified This Week</span>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Managed Deposits</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
              PKR
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Rs. 34.28B</h2>
          <span className="text-xs text-slate-400 mt-2">100% Statutory Liquidity Ratio (SBP)</span>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Active Credit Facilities</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <FileText size={18} />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">4,120</h2>
          <span className="text-xs text-slate-400 mt-2">0.12% Non-Performing Loan Rate</span>
        </Card>

        <Card className="flex flex-col justify-between bg-slate-900 text-white border-0 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Node Cluster Status</span>
            <div className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center">
              <Server size={18} />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">99.99%</h2>
          <div className="flex items-center justify-between text-xs text-slate-300 mt-2 pt-2 border-t border-slate-700">
            <span>Latency: 14ms</span>
            <span className="text-emerald-400 font-bold">Raast Node Healthy</span>
          </div>
        </Card>
      </div>

      {/* Main Grid: Management & Audit Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Customer Controls */}
        <Card className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">Customer Account Oversight</h3>

          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search CNIC, account or title..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Pending Identity Approvals</p>
                <p className="text-slate-500 dark:text-slate-400">14 Customer applications awaiting KYC review</p>
              </div>
              <span className="px-2 py-1 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 rounded-md font-bold">14</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900 dark:text-white">AML Risk Alerts</p>
                <p className="text-slate-500 dark:text-slate-400">3 Large wire transfers queued for manual signoff</p>
              </div>
              <span className="px-2 py-1 bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 rounded-md font-bold">3</span>
            </div>
          </div>
        </Card>

        {/* Audit Logs Table */}
        <Card className="lg:col-span-2 p-0 overflow-hidden">
          <div className="p-4 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Immutable Audit Trail</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Real-time log of administrative and system operations</p>
            </div>
            <Button variant="outline" size="sm">
              <Filter size={14} /> Filter Severity
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
              <thead className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-slate-800 font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="py-3 px-5">Log ID</th>
                  <th className="py-3 px-5">Timestamp</th>
                  <th className="py-3 px-5">User Account</th>
                  <th className="py-3 px-5">Action Performed</th>
                  <th className="py-3 px-5 text-center">Severity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-3.5 px-5 font-mono font-semibold text-slate-900 dark:text-white">{log.id}</td>
                    <td className="py-3.5 px-5 text-slate-500 dark:text-slate-400 font-mono text-[11px]">{log.time}</td>
                    <td className="py-3.5 px-5 font-bold text-slate-800 dark:text-slate-200">{log.user}</td>
                    <td className="py-3.5 px-5 text-slate-700 dark:text-slate-300">{log.action}</td>
                    <td className="py-3.5 px-5 text-center">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        log.severity === 'Critical'
                          ? 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                          : log.severity === 'Warning'
                          ? 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                          : 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                      }`}>
                        {log.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;
