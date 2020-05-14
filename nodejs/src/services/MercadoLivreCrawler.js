const axios = require("axios");
const cheerio = require("cheerio");
const ParseNumber = require("../helpers/ParseNumber");
const mercadoLivreHelper = require("../helpers/mercadoLivreHelper");
const api = require("./api");

class MercadoLivreCrawler {
  async execute(search, limit, currLen) {
    let data;

    try {
      const { data: mlData } = await api.get(
        `https://lista.mercadolivre.com.br/${search}_Desde_${
          limit > currLen + 1 ? currLen + 1 : limit
        }`
      );

      data = mlData;
    } catch (err) {
      return { err };
    }

    const $ = cheerio.load(data);

    return $("#searchResults li.article")
      .map(function () {
        let name = $(this).find(mercadoLivreHelper.name).text().trim();
        let price = $(this).find(mercadoLivreHelper.price).text();
        let decimal = $(this).find(mercadoLivreHelper.decimal).text();
        price = ParseNumber.price(price, decimal);
        let store = $(this)
          .find(mercadoLivreHelper.store)
          .text()
          .replace("por", "")
          .trim();
        let state = $(this).find(mercadoLivreHelper.state).text().trim();
        let link = $(this).find(mercadoLivreHelper.link).attr("href").trim();

        return {
          name,
          price,
          store,
          state,
          link,
        };
      })
      .toArray()
      .slice(0, limit - currLen);
  }
}

module.exports = new MercadoLivreCrawler();
