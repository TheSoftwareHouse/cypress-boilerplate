FROM cypress/base:10

# Install dependencies
COPY . . 
RUN rm -rf node_modules && npm i

