const MercadoLivreCrawler = require("../services/MercadoLivreCrawler");
const Logger = require("../services/Logger");

class CrawlerController {
  static async create(req, res) {
    Logger.info(req);
    const { search, limit } = req.body;

    let mlItems = [];

    try {
      do {
        const items = await MercadoLivreCrawler.execute(
          search,
          limit,
          mlItems.length
        );

        if (items.err) {
          Logger.error(items.err);
          return res
            .status(items.err.response ? items.err.response.status : 500)
            .json({
              err: items.err.message,
            });
        }

        mlItems = [...mlItems, ...items];
      } while (mlItems.length < limit);
    } catch (err) {
      Logger.error(err);
      return res.status(500).json({
        err: err.message,
      });
    }

    return res.json(mlItems);
  }
}

module.exports = CrawlerController;
