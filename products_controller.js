module.exports = {
  create: function(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.create_product()
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send("Error Creating"));
  },

  getOne: function(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.read_product()
      .then((product) => res.status(200).send(product))
      .catch(() => res.status(500).send("Error Reading Product"));
  },

  getAll: function(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
      .then((products) => res.status(200).send(products))
      .catch(() => res.status(500).send("Error Reading Products"));
  },

  update: function(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.update_products()
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send("Error Updating"));
  },

  delete: function(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.delete_product()
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send("Error Deleting"));
  }
};
