module.exports = function(app) {

	//var currentTotals = app.models.CurrentTotals;
	//currentTotals.destroyAll();
	//var ballots = app.models.Ballots;
	//ballots.destroyAll();	
	
	
	var partiesSrc = require('../presParties.json');

	var parties = app.models.Parties;

	parties.destroyAll();

	partiesSrc.forEach(function(partyDict){
		parties.create(partyDict, function(err, record) {
			if (err) return console.log(err);
		});
	});
	console.log("Parties inserted successfully");
	
	
	var candidatesSrc = require('../presCandidates.json');

	var candidates = app.models.Candidates;

	candidates.count({}, function(err, count) {
		if (err) return console.log(err);
		if (count > 0) return;
		
		candidates.destroyAll();
	
		candidatesSrc.forEach(function(candidateDict){
			candidates.create(candidateDict, function(err, record) {
				if (err) return console.log(err);
			});
		});
		console.log("Candidates inserted successfully");
	})
};