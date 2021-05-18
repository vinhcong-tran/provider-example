# Pact Contract Testing Provider Example

An example test framework using Pact-js to test Provider

## Running Server

This step to help you to manually start the server in case you need to verify the application can connect to this server manually. In case running pact test, we have handled the script to automatically start the server, so you can ignore this step when running Pact test.

   `npm start`

## Running Pact test

Before running the test, please make sure that you have published the contract to the broker from Consumer.

We will start a server on port `8080`. Please make sure this port is available.

We are using [Pactflow](https://pactflow.io/) as a broker. To use Pactflow , register for their free developer plan and export your Pactflow Broker URL and API token:

```
export PACT_BROKER_URL=<PACT_BROKER_URL here>
export PACT_BROKER_TOKEN=<API_TOKEN here>
```

### Running test

1. Install dependencies

    `npm i`

2. Run test

    `npm run test:pact`

3. Visit to the `PACT_BROKER_URL` to observe the test result.
- The status will be "Successfully verified" if the test passed
- The status will be "Verification failed" if the test failed


