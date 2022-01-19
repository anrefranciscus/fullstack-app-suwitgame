'use strict';


/**
 * fill in bio
 *
 * body BiodatasEntities 
 * returns inline_response_200_3
 **/
exports.apiV1PlayerBiodataPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
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
 * Create Room Game
 *
 * body RoomEntities 
 * returns inline_response_200_4
 **/
exports.apiV1PlayerRoomPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
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
 * get biodata player
 *
 * returns biodatasEntities
 **/
exports.detailBiodataPlayer = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "phoneNumber" : "8888888088",
  "avatarUrl" : "avatarURL",
  "name" : "Anre Franciscus",
  "bio" : "saya adalah player baru"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Join Room By Id
 *
 * body JoinRoomEntities 
 * returns inline_response_200_6
 **/
exports.detailRoomId = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "player1_username" : "PLAYER_1",
    "roomMakeByIdPlayer" : 1,
    "created_at" : "30-07-2021 12:00 ++07:00",
    "player2_username" : "PLAYER_2",
    "state" : false,
    "id_room" : 1,
    "roomName" : "ROOM_ONE"
  },
  "message" : "Player 2 join to room",
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
 * Get room by id
 *
 * returns inline_response_200_5
 **/
exports.get = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "player1_username" : "PLAYER_1",
    "roomMakeByIdPlayer" : 1,
    "created_at" : "30-07-2021 12:00 ++07:00",
    "player2_username" : "PLAYER_2",
    "state" : false,
    "id_room" : 1,
    "roomName" : "ROOM_ONE"
  },
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
 * get all player
 *
 * pointMin Integer The minimum number of point find you want to find (optional)
 * pointMax Integer The maximum number of point find you want to find (optional)
 * level Integer The level of the player you want to find (optional)
 * returns getAllPlayer
 **/
exports.getAllPlayer = function(pointMin,pointMax,level) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : 1,
    "username" : "anrefranciscus18",
    "point" : 1800,
    "level" : "CLASS A",
    "avatarUrl" : "/assets/profile/anre.jpg"
  }, {
    "id" : 2,
    "username" : "anre123",
    "point" : 1200,
    "level" : "CLASS D",
    "avatarUrl" : "/assets/profile/anre.jpg"
  }, {
    "id" : 3,
    "username" : "franciscus18",
    "point" : 2000,
    "level" : "CANDIDATE MASTER",
    "avatarUrl" : "/assets/profile/franc.png"
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
 * Play Game
 *
 * body GameEntities 
 * returns inline_response_200_7
 **/
exports.getIdRoom = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "game" : {
    "result" : "PLAYER 2 WIN",
    "player1_username" : "PLAYER 1",
    "player2_username" : "PLAYER 2",
    "state" : false,
    "id_room" : 10,
    "rounds" : {
      "round1" : {
        "player2_pick" : "SCISSORS",
        "isWinner" : "P1 & P2 DRAW",
        "player1_pick" : "SCISSORS"
      },
      "round3" : {
        "player2_pick" : "SCISSORS",
        "isWinner" : "PLAYER_2",
        "player1_pick" : "PAPER"
      },
      "round2" : {
        "player2_pick" : "ROCK",
        "isWinner" : "PLAYER_1",
        "player1_pick" : "PAPER"
      }
    }
  },
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

