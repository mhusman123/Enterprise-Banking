# Step 1: Build stage
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copy project files and restore dependencies
COPY ["src/CoreBanking.API/CoreBanking.API.csproj", "src/CoreBanking.API/"]
COPY ["src/CoreBanking.Domain/CoreBanking.Domain.csproj", "src/CoreBanking.Domain/"]
COPY ["src/CoreBanking.Infrastructure/CoreBanking.Infrastructure.csproj", "src/CoreBanking.Infrastructure/"]
COPY ["src/CoreBanking.Application/CoreBanking.Application.csproj", "src/CoreBanking.Application/"]

RUN dotnet restore "src/CoreBanking.API/CoreBanking.API.csproj"

# Copy source code and build production release
COPY . .
WORKDIR "/src/src/CoreBanking.API"
RUN dotnet publish "CoreBanking.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Step 2: Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Render exposes environment variable PORT (default 8080 or 10000)
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "CoreBanking.API.dll"]
