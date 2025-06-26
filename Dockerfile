# Use Node.js 22 Alpine image
FROM node:22-alpine

# Install pnpm and PostgreSQL client
RUN npm install -g pnpm && \
    apk add --no-cache postgresql-client

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Copy and make entrypoint script executable
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose port 3000
EXPOSE 3000

# Use the entrypoint script
ENTRYPOINT ["docker-entrypoint.sh"]
