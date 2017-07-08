module.exports = {
  create: function(req, res, next) {
    const dbInstance = req.app.get('db');
    const {name, description, price, imageurl} = req.body;

    dbInstance.create_product([name, description, price, imageurl])
      .then(() => res.status(200).send("Product Added"))
      .catch(() => res.status(500).send("Error Creating"));
  },

  getOne: function(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.read_product([req.params.id])
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

    dbInstance.update_products([req.params.id, req.query.desc])
      .then(() => res.status(200).send("Product Updated"))
      .catch(() => res.status(500).send("Error Updating"));
  },

  delete: function(req, res, next) {
    const dbInstance = req.app.get('db');

    dbInstance.delete_product([req.params.id])
      .then(() => res.status(200).send("Product Deleted"))
      .catch(() => res.status(500).send("Error Deleting"));
  }
};
