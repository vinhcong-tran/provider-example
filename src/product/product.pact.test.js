const { Verifier } = require('@pact-foundation/pact');
const controller = require('./product.controller');
const Product = require('./product');

const url = 'http://localhost:';
const port = 4321;

// Setup provider server to verify
const app = require('express')();
app.use(require('./product.routes'));
const server = app.listen(port);

describe("Pact Verification", () => {
    it("Validates the expectations of ProductService", () => {
        const baseOpts = {
            providerBaseUrl: `${url + port}`,
            providerVersion: '1.0.0',
            provider: "Provider",
            pactBrokerUrl: process.env.PACT_BROKER_URL,
            pactBrokerToken: process.env.PACT_BROKER_TOKEN,
            publishVerificationResult: true
        }

        const stateHandlers = {
            "products exist": () => {
                // The default state of repository, it will get all products from the repository to verify the contract.
            },
        }

        const opts = {
            ...baseOpts,
            stateHandlers: stateHandlers
        };

        return new Verifier(opts).verifyProvider()
            .then(output => {
                console.log("Pact Verification Complete!")
                console.log(output)
            })
            .finally(() => {
                server.close();
            });
    })
});
