FROM keymetrics/pm2:14-alpine

LABEL maintainer="jeudiprando@gmail.com"
LABEL description="https://t.me/vuejsbrasil"

ENV TELEGRAM_BOT_TOKEN=
ENV TELEGRAM_CHAT_ID=
ENV LAST_DATE_REQUEST=

RUN mkdir -p /var/app

WORKDIR /var/app

COPY ./package.json /var/app
RUN npm install
## DISTRIBUTION MODE
ENV NODE_ENV=production
COPY . /var/app
CMD ["pm2-docker", "src/index.js", "--env", "production"]