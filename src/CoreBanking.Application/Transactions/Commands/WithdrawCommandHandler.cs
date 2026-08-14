using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Commands;

public class WithdrawCommandHandler : IRequestHandler<WithdrawCommand, TransactionDto>
{
    // TODO: Inject IAccountRepository, ITransactionRepository
    // TODO: Implement - validate account is active and not frozen,
    //       check sufficient balance (throw InsufficientBalanceException if not),
    //       update balance, create transaction record
    public Task<TransactionDto> Handle(WithdrawCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement Withdraw business logic");
    }
}
