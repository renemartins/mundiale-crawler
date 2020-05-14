import MercadoLivreCrawler from "../../src/services/MercadoLivreCrawler";

describe("MercadoLivreCrawler()", () => {
  it("should return 3 results", async () => {
    const items = await MercadoLivreCrawler.execute("Cadeado", 3, 1);
    expect(items.length).toBe(2);
  });

  it("should return a 404 error", async () => {
    const items = await MercadoLivreCrawler.execute("InvalidCadeado", 3, 1);
    expect(items.err.response.status).toBe(404);
  });
});
