'use strict';


/**
 * endpoint to fetch all user data
 *
 * returns dataUserEntities
 **/
exports.getAllUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : 1,
    "username" : "anrefranciscus18",
    "point" : 1800,
    "level" : "CLASS A",
    "role_id" : 1,
    "role_name" : "ADMIN",
    "bio_id" : 1
  }, {
    "id" : 2,
    "username" : "anresihotang",
    "point" : 100,
    "level" : "NOVICE",
    "role_id" : 2,
    "role_name" : "Player",
    "bio_id" : 2
  }, {
    "id" : 3,
    "ussername" : "anrefranc",
    "point" : 1200,
    "level" : "CLASS D",
    "role_id" : 2,
    "role_name" : "Player",
    "bio_id" : 3
  } ],
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * detail data user
 *
 * returns adminDetailUserId
 **/
exports.getUserId = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role_name" : "Admin",
  "address" : "Jl. Ciledug Raya, Petukangan Utara, Pesanggragan Jakarta Selatan, DKI Jakarta 12260",
  "avatar_url" : "/assets/profile/anre.png",
  "user_id" : 2,
  "role_id" : 1,
  "user_name" : "udin",
  "bio" : "player baru",
  "phone_number" : "089533192569",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

