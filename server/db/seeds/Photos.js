
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('Photos').insert([
        {id: 1, url: `images/_DSC6239.jpg`, title: "Interesting Photo 1", dateTaken: "2010-05-05 10:00:00", location: "Somewhere outside Florida", description: "quaint photo of some rocks", album: 1},
        {id: 2, url: "images/stock2.jpg", title: "Scenic Photo 2", dateTaken: "2011-05-05 10:00:00", location: "Somewhere outside Bermuda", description: "great photo of some rocks", album: 1},
        {id: 3, url: "images/stock3.jpg", title: "Epic Photo 3", dateTaken: "2012-05-05 10:00:00", location: "Somewhere outside Ohio", description: "Interesting photo of some rocks", album: 1},
        {id: 4, url: "images/stock1.jpg", title: "Interesting Photo 4", dateTaken: "2013-05-05 10:00:00", location: "Somewhere outside Wellington", description: "quaint photo of some pizza", album: 1},
        {id: 5, url: "images/stock2.jpg", title: "Scenic Photo 5", dateTaken: "2014-05-05 10:00:00", location: "Somewhere outside Texas", description: "great photo of some pizza", album: 1},
        {id: 6, url: "images/stock3.jpg", title: "Epic Photo 6", dateTaken: "2016-05-05 10:00:00", location: "Somewhere outside Newfoundland", description: "Interesting photo of some pizza", album: 1},
        {id: 7, url: "images/stock1.jpg", title: "Interesting Photo 7", dateTaken: "2010-05-05 10:00:00", location: "Somewhere outside Florida", description: "quaint photo of some rocks", album: 2},
        {id: 8, url: "images/stock2.jpg", title: "Scenic Photo 8", dateTaken: "2011-05-05 10:00:00", location: "Somewhere outside Bermuda", description: "great photo of some rocks", album: 2},
        {id: 9, url: "images/stock3.jpg", title: "Epic Photo 9", dateTaken: "2012-05-05 10:00:00", location: "Somewhere outside Ohio", description: "Interesting photo of some rocks", album: 2},
        {id: 10, url: "images/stock1.jpg", title: "Interesting Photo 10", dateTaken: "2010-05-05 10:00:00", location: "Somewhere outside Florida", description: "quaint photo of some rocks", album: 3},
        {id: 11, url: "images/stock2.jpg", title: "Scenic Photo 11", dateTaken: "2011-05-05 10:00:00", location: "Somewhere outside Bermuda", description: "great photo of some rocks", album: 3},
        {id: 12, url: "images/stock3.jpg", title: "Epic Photo 12", dateTaken: "2012-05-05 10:00:00", location: "Somewhere outside Ohio", description: "Interesting photo of some rocks", album: 3},
        {id: 13, url: "images/stock1.jpg", title: "Interesting Photo 13", dateTaken: "2013-05-05 10:00:00", location: "Somewhere outside Wellington", description: "quaint photo of some pizza", album: 3},
        {id: 14, url: "images/stock2.jpg", title: "Scenic Photo 14", dateTaken: "2014-05-05 10:00:00", location: "Somewhere outside Texas", description: "great photo of some pizza", album: 3},
        {id: 15, url: "images/stock3.jpg", title: "Epic Photo 15", dateTaken: "2016-05-05 10:00:00", location: "Somewhere outside Newfoundland", description: "Interesting photo of some pizza", album: 3}
      ]);
    });
};