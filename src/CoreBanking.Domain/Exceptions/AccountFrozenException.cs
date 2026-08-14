namespace CoreBanking.Domain.Exceptions;

public class AccountFrozenException : Exception
{
    public AccountFrozenException(string message) : base(message) { }
}
