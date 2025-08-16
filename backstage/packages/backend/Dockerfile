# Dockerfile.dev
FROM node:20-bullseye

RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
RUN corepack enable
WORKDIR /work

# Yarn bootstrap (handles yarnPath)
COPY .yarnrc.yml ./
RUN mkdir -p .yarn/releases
RUN YARN_IGNORE_PATH=1 yarn set version 4.4.1

# Bring the whole repo in BEFORE install to keep manifests + lockfile consistent
COPY . .

# Now install with the local Yarn binary
RUN --mount=type=cache,target=/root/.yarn \
    yarn install --immutable

ENV NODE_ENV=development BACKSTAGE_CLI_NO_TELEMETRY=1 CHOKIDAR_USEPOLLING=true
EXPOSE 3000 7007
CMD ["bash", "-lc", "yarn start"]
