using CoreBanking.Domain.Entities;
using CoreBanking.Domain.Interfaces;

namespace CoreBanking.Infrastructure.Persistence.Repositories;

public class AccountRepository : IAccountRepository
{
    private readonly ApplicationDbContext _context;

    public AccountRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    // TODO: Implement repository methods
    public Task<Account?> GetByIdAsync(Guid id) => throw new NotImplementedException();
    public Task<IEnumerable<Account>> GetByCustomerIdAsync(Guid customerId) => throw new NotImplementedException();
    public Task<Account?> GetByAccountNumberAsync(string accountNumber) => throw new NotImplementedException();
    public Task AddAsync(Account account) => throw new NotImplementedException();
    public Task UpdateAsync(Account account) => throw new NotImplementedException();
}
