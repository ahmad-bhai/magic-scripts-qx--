export default async function handler(req, res) {
  const { type } = req.query;

  const map = {
    "M": "desktop.html",
    "Ḻ": "Ḻ.html",
    "ẇ": "trades.html",
    "ḏ": "sidepanel.html",
    "ṗ": "balance.html",
    "l": "analytics.html"
  };

  const file = map[type];

  if (!file) {
    return res.status(404).send("Invalid type");
  }

  // Yahan file read karke HTML return karni hogi.
}
