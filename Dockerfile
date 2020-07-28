FROM keymetrics/pm2:12-alpine

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
CMD ["pm2-docker", "index.js", "--env", "production"]