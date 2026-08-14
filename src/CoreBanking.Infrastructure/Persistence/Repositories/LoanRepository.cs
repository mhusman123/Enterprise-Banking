using CoreBanking.Domain.Entities;
using CoreBanking.Domain.Interfaces;

namespace CoreBanking.Infrastructure.Persistence.Repositories;

public class LoanRepository : ILoanRepository
{
    private readonly ApplicationDbContext _context;

    public LoanRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    // TODO: Implement repository methods
    public Task<Loan?> GetByIdAsync(Guid id) => throw new NotImplementedException();
    public Task<IEnumerable<Loan>> GetByCustomerIdAsync(Guid customerId) => throw new NotImplementedException();
    public Task AddAsync(Loan loan) => throw new NotImplementedException();
    public Task UpdateAsync(Loan loan) => throw new NotImplementedException();
}
