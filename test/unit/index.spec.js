"use strict";

const { ServiceBroker } = require("moleculer");
const PDFService = require("../../src");
const { ValidationError } = require("moleculer").Errors;

describe("Test PDFService", () => {
  const broker = new ServiceBroker();
  const service = broker.createService(PDFService);

  beforeAll(() => broker.start());
  afterAll(() => broker.stop());

  it("should be created", () => {
    expect(service).toBeDefined();
  });

  it("should return an error", async () => {
    try {
      await broker.call("pdf.transform")
    } catch (e) {
      expect(e).toBeInstanceOf(ValidationError);
    }
  });

  it("should return an buffer", () => {
    return broker
      .call("pdf.transform", { html: "<h1>John Doe</h1>" })
      .then(res => {
        expect(res).toBeInstanceOf(Buffer);
      });
  });
});
