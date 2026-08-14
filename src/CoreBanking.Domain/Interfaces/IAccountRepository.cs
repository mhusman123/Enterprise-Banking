using CoreBanking.Domain.Entities;

namespace CoreBanking.Domain.Interfaces;

public interface IAccountRepository
{
    Task<Account?> GetByIdAsync(Guid id);
    Task<IEnumerable<Account>> GetByCustomerIdAsync(Guid customerId);
    Task<Account?> GetByAccountNumberAsync(string accountNumber);
    Task AddAsync(Account account);
    Task UpdateAsync(Account account);
}
