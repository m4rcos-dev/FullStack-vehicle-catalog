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
WORKDIR /
RUN dotnet dev-certs https --trust
COPY ~/.aspnet/https/aspnetapp.pfx /https/
ENV ASPNETCORE_Kestrel__Certificates__Default__Password="your_password"
ENV ASPNETCORE_Kestrel__Certificates__Default__Path="/https/aspnetapp.pfx"
WORKDIR /src
COPY . .
WORKDIR "/src"
RUN dotnet build "backEnd.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "backEnd.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ARG EnvironmentVariable
ENTRYPOINT ["dotnet", "backEnd.dll"]
