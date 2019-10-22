FROM node:latest

LABEL Author="Michael Wilson - mewil@umich.edu"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY . /usr/src/app
RUN yarn install
RUN yarn build
RUN npm install -g nodemon

CMD ["yarn", "start"]

EXPOSE 7000

