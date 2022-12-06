const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../src/server");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/v1/videos", () => {
  it("should return all videos", async () => {
    const res = await request(app).get("/api/v1/videos");
    console.log(res.body);
    expect(res.statusCode).toBe(200);
  });
});

describe("PATCH /api/v1/video/edit", () => {
  it("should edit video", async () => {
    const res = await request(app)
      .patch("/api/v1/video/edit/638fb0c7ab81b5b4db01a3f2")
      .send({
        title: "Create OS on browser",
        describe: "one playlist completion",
        status: "PRIVATE",
      });

    dataExpect = {
      update: true,
      mensagem: "video atualizado com sucessor."
    };

    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(dataExpect);

  });
});
