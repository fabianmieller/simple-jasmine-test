var Hello = require("../index");

describe("Hello module", function() {
    it("Should return a message", function() {
        expect(Hello.testing()).toEqual('Hello, testing!');
    });
});