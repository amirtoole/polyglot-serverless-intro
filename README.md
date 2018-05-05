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

## API Schema
`yarn run validate-schema`

This will take the latest version of `src/app/models/api-models.ts` and output json schema. This is used by research team (python).


# Deploy to AWS
(must have awscli installed w/ architecture VPC credentials)
## Client code
Client code will automatically be built and pushed to s3. There is a roughly 24hr cache on Cloudfront. 
TODO: can get around this through web UI; hopefully we dont need to script this.

`yarn run deploy:client`

## Server code (lambda)
serverless folder will be built and deployed

`yarn run deploy:lambda`

## Elasticsearch data
`yarn run deploy:send-to-es`

Will consume `schema/samples/companies.json` and `schema/samples/industries.json` and generate ES compatible files.

Those files will then update ES (overwriting any duplicate ids).
