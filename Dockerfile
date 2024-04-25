FROM 474230206603.dkr.ecr.us-west-2.amazonaws.com/ui/node-jenkins:node-16-2.0.9

# Create the app directory and add persimmons.
RUN mkdir -p /app/node_modules && chown -R node:node /app

# Change the working directory.
WORKDIR /app

# Install the package dependencies.
COPY package.json .
USER node
RUN npm install

# Copy the scripts to working directory.
COPY --chown=node:node lib/ .

# Initiate the node script.
CMD [ "node", "gulp build" ]
