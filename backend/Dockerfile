FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /source

# Copy project files
COPY --link Backend.sln ./
COPY --link Sample.Api/Sample.Api.csproj Sample.Api/
COPY --link Sample.Models/Sample.Models.csproj Sample.Models/

# Run restore as a distinct layer
RUN dotnet restore

# Copy source code and publish app
COPY --link . ./

# Build and publish a release
RUN dotnet publish --no-restore -o /app

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
EXPOSE 8080
WORKDIR /app

COPY --link --from=build /app .

# Run as non-root
USER $APP_UID
ENTRYPOINT ["./Sample.Api"]
