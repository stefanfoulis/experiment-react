FROM node:8.9.0-alpine
RUN yarn global add create-react-app
ENV NODE_ENV=production \
    NPM_CONFIG_LOGLEVEL=info
WORKDIR /home/node/app
RUN mkdir -p /home/node/app
COPY package.json yarn.lock /home/node/app/
RUN yarn install
#RUN yarn install --modules-folder /
COPY . /home/node/app
EXPOSE 8888
