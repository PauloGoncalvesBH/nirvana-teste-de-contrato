const { Pact } = require("@pact-foundation/pact")

global.mockProvider = new Pact({
  port: 8081,
  logLevel: 'INFO',
  consumer: 'frontend',
  provider: 'clients-service',
  pactfileWriteMode: 'merge',
})
