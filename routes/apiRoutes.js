var db = require("../models");

module.exports = function(app) {

  //Eaters CRUD 
  //////////////////////////////////////////////////////
  // Get all Eaters
  app.get("/api/new", function(req, res) {
    db.Eater.findAll({
      order: [
        ["createdAt", "DESC"]
      ]
    }).then(function(dbEaters) {
      res.json(dbEaters);
    });
  });

  // Create a new Eater
  app.post("/api/new", function(req, res) {
    db.Eater.create(req.body).then(function() {
      res.send({ err: 0, redirectUrl: "/"});
      //res.json(dbEater);
    });
  });

  // Delete an Eater by id
  app.delete("/api/Eaters/:id", function(req, res) {
    db.Eater.destroy({ where: { id: req.params.id } }).then(function(dbEater) {
      res.json(dbEater);
    });
  });

  //Messages CRUD
  //////////////////////////////////////////////////////
  app.post("/api/msg", function (req, res) { 
    db.Message.create(req.body).then(function() {
      res.send({ err : 0 });
    }).catch( function (error) {
      console.log(error); 
      res.send(error);
    });
  });
};
