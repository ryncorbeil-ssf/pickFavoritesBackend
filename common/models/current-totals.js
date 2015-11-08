module.exports = function(CurrentTotals) {
    var async = require('async');
    
    CurrentTotals.upvoteFirst = function(id, cb) {
      CurrentTotals.find({
         where: {candidateId: id},
         order: 'date DESC',
         limit: 1 
      }, function(err, currentTotal) {
            if(err) return cb(err);
            
            var firstPlaceVotes = 1;
            var secondPlaceVotes= 0;
            var thirdPlaceVotes = 0;
            
            if (currentTotal != null && currentTotal.length > 0 ) {
                firstPlaceVotes = currentTotal[0].firstPlaceVotes + 1;
                secondPlaceVotes= currentTotal[0].secondPlaceVotes;
                thirdPlaceVotes = currentTotal[0].thirdPlaceVotes;
            }
            
            var newObj = {
                    "candidateId": id,
                    "firstPlaceVotes": firstPlaceVotes,
                    "secondPlaceVotes": secondPlaceVotes,
                    "thirdPlaceVotes": thirdPlaceVotes,
                    "date": new Date()
                };
            CurrentTotals.create(newObj, function(err, obj){
                    if(err)  console.log(err);
            });
            cb(null, "Ok");
         });  
    };
     
    CurrentTotals.remoteMethod('upvoteFirst', {
      isStatic: true,
      accepts: {arg: 'id', type: 'string'},
      returns: {arg: 'status', type: 'string'}
    });
    
    CurrentTotals.downvoteFirst = function(id, cb) {
      CurrentTotals.find({
         where: {candidateId: id},
         order: 'date DESC',
         limit: 1 }, function(err, currentTotal) {
            if(err) return cb(err);
            
            var firstPlaceVotes = 0;
            var secondPlaceVotes= 0;
            var thirdPlaceVotes = 0;
            
            if (currentTotal != null && currentTotal.length > 0 && currentTotal[0].candidateId == id) {
                firstPlaceVotes = currentTotal[0].firstPlaceVotes - 1;
                secondPlaceVotes= currentTotal[0].secondPlaceVotes;
                thirdPlaceVotes = currentTotal[0].thirdPlaceVotes;
            }
            
            var newObj = {
                    "candidateId": id,
                    "firstPlaceVotes": firstPlaceVotes,
                    "secondPlaceVotes": secondPlaceVotes,
                    "thirdPlaceVotes": thirdPlaceVotes,
                    "date": new Date()
                };
            CurrentTotals.create(newObj, function(err, obj){
                    if(err)  console.log(err);
            });
            cb(null, "Ok");
         });  
    };
     
    CurrentTotals.remoteMethod('downvoteFirst', {
      isStatic: true,
      accepts: {arg: 'id', type: 'string'},
      returns: {arg: 'status', type: 'string'}
    });
    
    CurrentTotals.upvoteSecond = function(id, cb) {
      CurrentTotals.find({
         where: {candidateId: id},
         order: 'date DESC',
         limit: 1 }, function(err, currentTotal) {
            if(err) return cb(err);
            
            var firstPlaceVotes = 0;
            var secondPlaceVotes= 1;
            var thirdPlaceVotes = 0;
            
            if (currentTotal != null && currentTotal.length > 0 && currentTotal[0].candidateId == id) {
                firstPlaceVotes = currentTotal[0].firstPlaceVotes;
                secondPlaceVotes= currentTotal[0].secondPlaceVotes + 1;
                thirdPlaceVotes = currentTotal[0].thirdPlaceVotes;
            }
            
            var newObj = {
                    "candidateId": id,
                    "firstPlaceVotes": firstPlaceVotes,
                    "secondPlaceVotes": secondPlaceVotes,
                    "thirdPlaceVotes": thirdPlaceVotes,
                    "date": new Date()
                };
            CurrentTotals.create(newObj, function(err, obj){
                    if(err)  console.log(err);
            });
            cb(null, "Ok");
         });  
    };
     
    CurrentTotals.remoteMethod('upvoteSecond', {
      isStatic: true,
      accepts: {arg: 'id', type: 'string'},
      returns: {arg: 'status', type: 'string'}
    });
    
    CurrentTotals.downvoteSecond = function(id, cb) {
      CurrentTotals.find({
         where: {candidateId: id},
         order: 'date DESC',
         limit: 1 }, function(err, currentTotal) {
            if(err) return cb(err);
            
            var firstPlaceVotes = 0;
            var secondPlaceVotes= 0;
            var thirdPlaceVotes = 0;
            
            if (currentTotal != null && currentTotal.length > 0 && currentTotal[0].candidateId == id) {
                firstPlaceVotes = currentTotal[0].firstPlaceVotes;
                secondPlaceVotes= currentTotal[0].secondPlaceVotes - 1;
                thirdPlaceVotes = currentTotal[0].thirdPlaceVotes;
            }
            
            var newObj = {
                    "candidateId": id,
                    "firstPlaceVotes": firstPlaceVotes,
                    "secondPlaceVotes": secondPlaceVotes,
                    "thirdPlaceVotes": thirdPlaceVotes,
                    "date": new Date()
                };
            CurrentTotals.create(newObj, function(err, obj){
                    if(err)  console.log(err);
            });
            cb(null, "Ok");
         });  
    };
     
    CurrentTotals.remoteMethod('downvoteSecond', {
      isStatic: true,
      accepts: {arg: 'id', type: 'string'},
      returns: {arg: 'status', type: 'string'}
    });
    
    CurrentTotals.upvoteThird = function(id, cb) {
      CurrentTotals.find({
         where: {candidateId: id},
         order: 'date DESC',
         limit: 1 }, function(err, currentTotal) {
            if(err) return cb(err);
            
            var firstPlaceVotes = 0;
            var secondPlaceVotes= 0;
            var thirdPlaceVotes = 1;
            
            if (currentTotal != null && currentTotal.length > 0 && currentTotal[0].candidateId == id) {
                firstPlaceVotes = currentTotal[0].firstPlaceVotes;
                secondPlaceVotes= currentTotal[0].secondPlaceVotes;
                thirdPlaceVotes = currentTotal[0].thirdPlaceVotes + 1;
            }
            
            var newObj = {
                    "candidateId": id,
                    "firstPlaceVotes": firstPlaceVotes,
                    "secondPlaceVotes": secondPlaceVotes,
                    "thirdPlaceVotes": thirdPlaceVotes,
                    "date": new Date()
                };
            CurrentTotals.create(newObj, function(err, obj){
                    if(err)  console.log(err);
            });
            cb(null, "Ok");
         });  
    };
     
    CurrentTotals.remoteMethod('upvoteThird', {
      isStatic: true,
      accepts: {arg: 'id', type: 'string'},
      returns: {arg: 'status', type: 'string'}
    });
    
    CurrentTotals.downvoteThird = function(id, cb) {
      CurrentTotals.find({
         where: {candidateId: id},
         order: 'date DESC',
         limit: 1 }, function(err, currentTotal) {
            if(err) return cb(err);
            
            var firstPlaceVotes = 0;
            var secondPlaceVotes= 0;
            var thirdPlaceVotes = 0;
            
            if (currentTotal != null && currentTotal.length > 0 && currentTotal[0].candidateId == id) {
                firstPlaceVotes = currentTotal[0].firstPlaceVotes;
                secondPlaceVotes= currentTotal[0].secondPlaceVotes;
                thirdPlaceVotes = currentTotal[0].thirdPlaceVotes - 1;
            }
            
            var newObj = {
                    "candidateId": id,
                    "firstPlaceVotes": firstPlaceVotes,
                    "secondPlaceVotes": secondPlaceVotes,
                    "thirdPlaceVotes": thirdPlaceVotes,
                    "date": new Date()
                };
            CurrentTotals.create(newObj, function(err, obj){
                    if(err)  console.log(err);
            });
            cb(null, "Ok");
         });  
    };
     
    CurrentTotals.remoteMethod('downvoteThird', {
      isStatic: true,
      accepts: {arg: 'id', type: 'string'},
      returns: {arg: 'status', type: 'string'}
    });
    
    
    CurrentTotals.getRankings = function(id, cb) {
        
        var scores = [];  
        var numberOfCandidates = 0;
        
        var CandidateModel = CurrentTotals.app.models.Candidates;
        // get all candidates
        CandidateModel.find({}, function(err, candidates) {
            if(err) return cb(err);
      
            numberOfCandidates = candidates.length;
            
            async.each(candidates, function (candidate, next){ 
                // for each candidate, get current total and compute score
                CurrentTotals.find({
                 where: {candidateId: candidate.id},
                 order: 'date DESC',
                 limit: 1 }, function(err, currentTotal) {
                                if(err) return cb(err);
                                
                                var score;
                                console.log(currentTotal);
                                score = currentTotal[0].firstPlaceVotes*numberOfCandidates +
                                        currentTotal[0].secondPlaceVotes*(numberOfCandidates-1)+
                                        currentTotal[0].thirdPlaceVotes*(numberOfCandidates-2);
            
                                var candidateScore = {
                                    "candidateId": currentTotal[0].candidateId,
                                    "score": score
                                };
                                scores.push(candidateScore);
                                
                                next();
                             }
                );
            }, function (err) { cb(null, scores); });
        });
    };
     
    CurrentTotals.remoteMethod('getRankings', {
      isStatic: true,
      accepts: {arg: 'id', type: 'string'},
      returns: {arg: 'status', type: 'string'}
    });
   
};

