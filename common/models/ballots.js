module.exports = function(Ballots) {

  
/*  
Ballots.observe('before save', 
    function updateCurrentTotals(ctx, next) {

    var app = ctx.app;
    var Candidates = app.models.Candidates;
            
    // retrieve voter's current ballot
    Ballots.find({ where: { voterId: ctx.instance.voterId}, order: 'updated DESC', limit: 1 }, 
        function(err, currentBallot) {
            var firstChoice;
            var secondChoice;
            var thirdChoice;
            

    
        // downvote first, second, third choices from current ballot
        Candidates.find({ where: { name: currentBallot.first} },function(err, candidate) {
            firstChoice = candidate.id;
            });
        Candidates.find({ where: { name: currentBallot.second} },function(err, candidate) {
            secondChoice = candidate.id;
            });    
        Candidates.find({ where: { name: currentBallot.third} },function(err, candidate) {
            thirdChoice = candidate.id;
            });
        
        
        
        //CurrentTotals.downvoteFirst
    
        // upvote first, second, third choice from new ballot
    }); 
    

    
    
  if (ctx.instance) {
    ctx.instance.updated = new Date();
  } else {
    ctx.data.updated = new Date();
  }
  next();
});
*/
    
};
