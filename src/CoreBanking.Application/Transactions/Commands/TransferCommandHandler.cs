using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Commands;

public class TransferCommandHandler : IRequestHandler<TransferCommand, TransactionDto>
{
    // TODO: Inject IAccountRepository, ITransactionRepository, IApplicationDbContext
    // TODO: Implement - validate both accounts exist and are active,
    //       check sufficient balance on source, use transaction scope for atomicity,
    //       create TransferOut on source + TransferIn on destination,
    //       update both balances
    public Task<TransactionDto> Handle(TransferCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement Transfer business logic");
    }
}
