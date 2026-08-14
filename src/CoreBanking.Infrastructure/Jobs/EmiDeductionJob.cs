namespace CoreBanking.Infrastructure.Jobs;

public class EmiDeductionJob
{
    // TODO: Inject ILoanRepository, IAccountRepository, ITransactionRepository
    // TODO: Implement - find all loans with due EMI today, deduct from linked accounts,
    //       create transaction records, mark repayments as paid
    public Task ExecuteAsync()
    {
        throw new NotImplementedException("TODO: Implement EMI auto-deduction logic");
    }
}
