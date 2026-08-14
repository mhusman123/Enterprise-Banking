using CoreBanking.Domain.Entities;

namespace CoreBanking.Domain.Interfaces;

public interface ICardRepository
{
    Task<Card?> GetByIdAsync(Guid id);
    Task<IEnumerable<Card>> GetByAccountIdAsync(Guid accountId);
    Task AddAsync(Card card);
    Task UpdateAsync(Card card);
}
