const request = require("supertest")("https://jsonplaceholder.typicode.com");
const expect = require("chai").expect;

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

describe("GET /todos/:1", function () {
    it("todos with id 1", async function () {
        const response = await request.get("/todos/1");
        expect(response.status).to.eql(200);
    });
});