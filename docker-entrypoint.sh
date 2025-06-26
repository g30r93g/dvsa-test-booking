#!/bin/sh
set -e

echo "Waiting for database to be ready..."

# Wait for the database to be ready
until pg_isready -h db -p 5432 -U postgres -d dvsa_test_booking; do
  echo "Still waiting for database..."
  sleep 1
done

echo "Database is ready!"

# Run migrations
echo "Running database migrations..."
pnpm db:migrate

echo "Starting the application..."
exec pnpm dev
