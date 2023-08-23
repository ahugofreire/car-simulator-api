FROM node:20-slim

WORKDIR /home/node/app

USER node

# npm install
# npx prisma generate

CMD [ "tail", "-f", "/dev/null" ]
