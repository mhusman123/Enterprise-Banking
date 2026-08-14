using CoreBanking.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoreBanking.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Customer> Customers { get; }
    DbSet<Account> Accounts { get; }
    DbSet<Transaction> Transactions { get; }
    DbSet<Loan> Loans { get; }
    DbSet<LoanRepayment> LoanRepayments { get; }
    DbSet<Card> Cards { get; }
    DbSet<AuditLog> AuditLogs { get; }
    DbSet<Notification> Notifications { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
