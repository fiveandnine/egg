FROM node:8.12.0-alpine

WORKDIR /app

COPY . ./


RUN npm install 

EXPOSE 7001

#CMD npm run start
CMD ["sh", "start.sh"]
