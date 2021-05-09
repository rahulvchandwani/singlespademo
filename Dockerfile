# pull official base image
FROM node:12.13.1

# set working directory
WORKDIR /singlespademo

# add to $PATH
ENV PATH /singlespademo/node_modules/.bin:$PATH

#install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]