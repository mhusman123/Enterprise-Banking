using CoreBanking.Domain.Entities;

namespace CoreBanking.Domain.Interfaces;

public interface ILoanRepository
{
    Task<Loan?> GetByIdAsync(Guid id);
    Task<IEnumerable<Loan>> GetByCustomerIdAsync(Guid customerId);
    Task AddAsync(Loan loan);
    Task UpdateAsync(Loan loan);
}
