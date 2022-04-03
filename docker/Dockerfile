FROM node:buster AS builder

WORKDIR /build
ADD ./target/*.js ./
ADD ./target/package.json ./
ADD ./target/src ./src
ADD ./target/tests ./tests

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install --force

RUN npm run build

FROM debian:stretch
COPY --from=builder /build/dist /var/www/html

RUN apt-get -qq update && \
	apt-get -qq install \
	nginx \
	nginx-common \
	libnginx-mod-http-auth-pam \
	libnginx-mod-http-dav-ext \
	libnginx-mod-http-echo \
	libnginx-mod-http-geoip \
	libnginx-mod-http-image-filter \
	libnginx-mod-http-subs-filter \
	libnginx-mod-http-upstream-fair \
	libnginx-mod-http-xslt-filter \
	libnginx-mod-mail \
	libnginx-mod-stream

CMD ["nginx", "-g", "daemon off;"]
