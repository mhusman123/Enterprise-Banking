using CoreBanking.Domain.Entities;
using CoreBanking.Domain.Interfaces;

namespace CoreBanking.Infrastructure.Persistence.Repositories;

public class CardRepository : ICardRepository
{
    private readonly ApplicationDbContext _context;

    public CardRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    // TODO: Implement repository methods
    public Task<Card?> GetByIdAsync(Guid id) => throw new NotImplementedException();
    public Task<IEnumerable<Card>> GetByAccountIdAsync(Guid accountId) => throw new NotImplementedException();
    public Task AddAsync(Card card) => throw new NotImplementedException();
    public Task UpdateAsync(Card card) => throw new NotImplementedException();
}
