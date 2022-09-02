const { All } = require("../config/db");

class BansController {
  async get(req, res, next) {
    All.query(
      "SELECT * FROM shop_players WHERE auth = ?",
      `${req.params["steamID"]}`,
      (err, results) => {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }

        return res.json(results);
      }
    );
  }
}

module.exports = new BansController();
