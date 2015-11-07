module.exports = function(CurrentTotals) {
    
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
};
