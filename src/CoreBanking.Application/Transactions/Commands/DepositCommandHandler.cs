using CoreBanking.Application.Transactions.DTOs;
using MediatR;

namespace CoreBanking.Application.Transactions.Commands;

public class DepositCommandHandler : IRequestHandler<DepositCommand, TransactionDto>
{
    // TODO: Inject IAccountRepository, ITransactionRepository
    // TODO: Implement - validate account is active, update balance,
    //       create transaction record, generate reference number
    public Task<TransactionDto> Handle(DepositCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement Deposit business logic");
    }
}
