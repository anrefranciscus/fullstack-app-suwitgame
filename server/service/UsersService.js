'use strict';


/**
 * Delete user by id\"
 *
 * id Integer 
 * returns inline_response_200_1
 **/
exports.apiV1UserIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "id" : 1
  },
  "message" : "User has been deleted",
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
 * Update user
 *
 * body UserEntities 
 * id Integer 
 * returns inline_response_200
 **/
exports.apiV1UserIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "roleId" : {
    "role" : "PLAYER"
  },
  "username" : "anrefranciscus18",
  "encryptedPassword" : "$2a$11$BJjgbuiWa9BpRkhXfz.ftOFDmhgOQGN0t2MKPZ4HsBo8gWucuBMqy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * add user
 *
 * body UserEntities 
 * returns inline_response_200
 **/
exports.apiV1UserPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "roleId" : {
    "role" : "PLAYER"
  },
  "username" : "anrefranciscus18",
  "encryptedPassword" : "$2a$11$BJjgbuiWa9BpRkhXfz.ftOFDmhgOQGN0t2MKPZ4HsBo8gWucuBMqy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

