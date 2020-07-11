# The first stage populates the Go module cache based on the go.{mod,sum} files
# and builds the server application
FROM golang:1.14-alpine AS build-golang
RUN apk add --update \
    git \
    gcc \
    libc-dev
ENV GO111MODULE=on
ENV CGO_ENABLED=0
ENV GOOS=linux
COPY server/ /go/src/server
WORKDIR /go/src/server
RUN go mod download
RUN go install .
RUN adduser -D -g '' user

# The second stage uses a nodejs image to build the application frontend
FROM node:12.11.0-alpine AS build-node
RUN mkdir -p /usr/app
WORKDIR /usr/app
ENV NODE_ENV=production
COPY ./frontend /usr/app
RUN yarn install
RUN yarn run build

# The third stage, uses a fresh scratch image to reduce the image size and not
# ship dependenices
FROM scratch AS server
LABEL Author="Michael Wilson"
# Finally, we copy the statically compiled Go binary and use it as our
# entrypoint
COPY --from=build-golang /etc/passwd /etc/passwd
COPY --from=build-golang /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=build-golang /go/bin/server /bin/server
COPY --from=build-node /usr/app/build/ /views
USER user
ENTRYPOINT ["/bin/server"]
EXPOSE 7000