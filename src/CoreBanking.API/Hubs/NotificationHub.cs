using Microsoft.AspNetCore.SignalR;

namespace CoreBanking.API.Hubs;

public interface INotificationClient
{
    Task ReceiveNotification(string title, string message, string type, DateTime timestamp);
    Task ReceiveTransactionAlert(string txId, decimal amount, string party, string status);
}

public class NotificationHub : Hub<INotificationClient>
{
    public async Task SendLiveAlert(string title, string message, string type)
    {
        await Clients.All.ReceiveNotification(title, message, type, DateTime.UtcNow);
    }
}
