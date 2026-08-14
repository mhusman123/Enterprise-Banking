using CoreBanking.Domain.Entities;
using CoreBanking.Domain.Interfaces;

namespace CoreBanking.Infrastructure.Persistence.Repositories;

public class TransactionRepository : ITransactionRepository
{
    private readonly ApplicationDbContext _context;

    public TransactionRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    // TODO: Implement repository methods
    public Task<Transaction?> GetByIdAsync(Guid id) => throw new NotImplementedException();
    public Task<IEnumerable<Transaction>> GetByAccountIdAsync(Guid accountId, int page = 1, int pageSize = 20) => throw new NotImplementedException();
    public Task AddAsync(Transaction transaction) => throw new NotImplementedException();
}
