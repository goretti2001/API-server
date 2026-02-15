var mongoose = require("mongoose");

var DjurartiklarSchema = new mongoose.Schema(
	{
		artikel: String,
		färg: String,
		storlek: String,
		beskrivning: String,
	},
	{
		collection: "Djurartiklar",
	}
);

module.exports = mongoose.model("DjurartiklarModel", DjurartiklarSchema);
