# Step 1: Build the Vite app
FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with a lightweight static file server
FROM node:18

WORKDIR /app

# Install static server globally
RUN npm install -g serve

# Copy build output from builder stage
COPY --from=builder /app/dist ./dist

# Railway uses PORT env var by default
ENV PORT=8080

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]
