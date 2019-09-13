"use strict";

let { ServiceBroker } = require("moleculer");
let PDFService = require("../../index");
const { promisify } = require("util");
const { writeFile } = require("fs");
const writeFileAsync = promisify(writeFile);

// Create broker
let broker = new ServiceBroker({
  logger: console
});

// Load my service
broker.createService(PDFService);

// Start server
broker.start().then(() => {
  // Call action
  broker
    .call("pdf.transform", { html: "<h1>John Doe</h1>" })
    .then(buff => writeFileAsync("./pdf.pdf", buff))
    .catch(broker.logger.error);
});
