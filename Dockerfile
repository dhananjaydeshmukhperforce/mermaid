FROM node:22.11.0-alpine3.19@sha256:844f517e92fb8f226a52f29ed5c2b5994ae0dd05e152fefac3f2399469701234

USER 0:0

RUN corepack enable \
    && corepack enable pnpm

RUN apk add --no-cache git~=2.43.4 \
    && git config --add --system safe.directory /mermaid

ENV NODE_OPTIONS="--max_old_space_size=8192"

EXPOSE 9000 3333
