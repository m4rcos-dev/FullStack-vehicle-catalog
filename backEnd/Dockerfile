FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

ENV ASPNETCORE_URLS=https://api-vehicle-catalog.up.railway.app

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-dotnet-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["backEnd.csproj", "."]
RUN dotnet restore "backEnd.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet dev-certs https
RUN sudo -E dotnet dev-certs https -ep /usr/local/share/ca-certificates/aspnet/https.crt --format PEM
RUN sudo update-ca-certificates
RUN dotnet build "backEnd.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "backEnd.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ARG EnvironmentVariable
ENTRYPOINT ["dotnet", "backEnd.dll"]
