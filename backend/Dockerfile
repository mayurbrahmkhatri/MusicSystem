FROM node:10

RUN npm install -g pm2

# Create app directory
WORKDIR /home

COPY build/ /home

RUN ls /home
RUN npm install --production

EXPOSE 8080

CMD ["pm2-runtime", "start", "/home/app/index.js"]