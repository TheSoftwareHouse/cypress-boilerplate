FROM cypress/base:10

COPY package.json package.json
RUN npm i
COPY ./cypress ./cypress
COPY cypress.json cypress.json

CMD ["npm", "run", "test"]