'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.apiV1UserIdDELETE = function apiV1UserIdDELETE (req, res, next, id) {
  Users.apiV1UserIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UserIdPUT = function apiV1UserIdPUT (req, res, next, body, id) {
  Users.apiV1UserIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UserPOST = function apiV1UserPOST (req, res, next, body) {
  Users.apiV1UserPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
