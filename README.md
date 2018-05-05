# Setup

1) Install Node 8.x (latest LTE version)

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

2) Globally install yarn

[https://yarnpkg.com/lang/en/docs/install/](https://yarnpkg.com/lang/en/docs/install/)

3) Run yarn on this project root:

`$ yarn`

# Develop

## angular
1) `$ yarn start`

Visit [http://localhost:4200](http://localhost:4200)


# Deploy to AWS
(must have awscli installed w/ appropriate credentials)

## Client code
`yarn run deploy:client`

## Server code (lambda)
serverless folder will be built and deployed

`yarn run deploy:lambda`
