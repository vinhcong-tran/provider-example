const { Verifier } = require('@pact-foundation/pact');
const controller = require('./product.controller');
const Product = require('./product');

const url = 'http://localhost:';
const port = 8080;

// Setup provider server to verify
const app = require('express')();
const authMiddleware = require('../middleware/auth.middleware');
app.use(authMiddleware);
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
                controller.repository.products = new Map([
                    ["10", new Product('10', 'CREDIT_CARD', '28 Degrees', 1000, 4)]
                ]);
            },
        }

        const requestFilter = (req, res, next) => {
            if (!req.headers["authorization"]) {
                next();
                return;
            }
            req.headers["authorization"] = `Bearer ${new Date().toISOString()}`;
            next();
        }

        const opts = {
            ...baseOpts,
            stateHandlers: stateHandlers,
            requestFilter: requestFilter
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
