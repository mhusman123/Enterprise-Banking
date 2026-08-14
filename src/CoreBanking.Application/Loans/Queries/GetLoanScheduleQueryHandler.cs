using CoreBanking.Application.Loans.DTOs;
using MediatR;

namespace CoreBanking.Application.Loans.Queries;

public class GetLoanScheduleQueryHandler : IRequestHandler<GetLoanScheduleQuery, LoanScheduleDto>
{
    // TODO: Inject ILoanRepository
    // TODO: Implement - fetch loan with repayments, map to schedule DTO
    public Task<LoanScheduleDto> Handle(GetLoanScheduleQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException("TODO: Implement GetLoanSchedule query logic");
    }
}
