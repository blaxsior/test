FROM node:alpine as builder

WORKDIR '/home/node/app'

RUN chown -R node:node .
COPY package.json .
RUN npm install
COPY . .
#volume 같은 것은 개발 단계에나 의미 있는 코드지, 이미 개발된 코드에서는 관심 영역이 아님.
# USER node
RUN npm run build
# /home/node/app

# USER root

# RUN Phase
FROM nginx
EXPOSE 80
COPY --from=builder /home/node/app/build /usr/share/nginx/html