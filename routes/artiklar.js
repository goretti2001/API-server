var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var artiklarModel = require("../models/artiklarModel.js");

router.get("/", function (req, res, next) {
	//find är Mongoose funktion.
	artiklarModel.find().then(function (artiklarna) {
		res.json(artiklarna);
	});
});

router.post("/", function (req, res, next) {
	//req.body är innehållet i requestobjektet, dvs en json med en djurartikel
	artiklarModel.create(req.body).then(function (post) {
		res.json(post);
	});
});

router.delete("/:id", function (req, res, next) {
	artiklarModel.findByIdAndDelete(req.params.id, req.body).then(function (post) {
		res.json(post);
	});
});

router.put("/:id", function (req, res, next) {
	// Hittar artikelen med id och uppdatera med det som kommer i req.body
	artiklarModel
		.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then(function (updatedArtikel) {
			res.json(updatedArtikel);
		})
		.catch(next); // skicka vidare eventuella fel
});

module.exports = router;
