using CoreBanking.Domain.Entities;

namespace CoreBanking.Domain.Interfaces;

public interface ITransactionRepository
{
    Task<Transaction?> GetByIdAsync(Guid id);
    Task<IEnumerable<Transaction>> GetByAccountIdAsync(Guid accountId, int page = 1, int pageSize = 20);
    Task AddAsync(Transaction transaction);
}
