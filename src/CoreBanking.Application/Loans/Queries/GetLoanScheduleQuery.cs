using CoreBanking.Application.Loans.DTOs;
using MediatR;

namespace CoreBanking.Application.Loans.Queries;

public record GetLoanScheduleQuery(Guid LoanId) : IRequest<LoanScheduleDto>;
