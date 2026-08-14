using CoreBanking.Application.Loans.Commands;
using CoreBanking.Application.Loans.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace CoreBanking.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LoansController : ControllerBase
{
    private readonly IMediator _mediator;

    public LoansController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("apply")]
    public async Task<IActionResult> ApplyLoan([FromBody] ApplyLoanCommand command)
    {
        var loanId = await _mediator.Send(command);
        return CreatedAtAction(nameof(GetSchedule), new { id = loanId }, loanId);
    }

    [HttpPut("{id:guid}/approve")]
    public async Task<IActionResult> ApproveLoan(Guid id, [FromBody] string approvedBy)
    {
        var result = await _mediator.Send(new ApproveLoanCommand(id, approvedBy));
        return result ? Ok() : BadRequest();
    }

    [HttpPut("{id:guid}/disburse")]
    public async Task<IActionResult> DisburseLoan(Guid id, [FromBody] Guid accountId)
    {
        var result = await _mediator.Send(new DisburseLoanCommand(id, accountId));
        return result ? Ok() : BadRequest();
    }

    [HttpPost("{id:guid}/repay")]
    public async Task<IActionResult> RepayEmi(Guid id, [FromBody] decimal amount)
    {
        var result = await _mediator.Send(new RepayEmiCommand(id, amount));
        return result ? Ok() : BadRequest();
    }

    [HttpGet("{id:guid}/schedule")]
    public async Task<IActionResult> GetSchedule(Guid id)
    {
        var result = await _mediator.Send(new GetLoanScheduleQuery(id));
        return Ok(result);
    }
}
