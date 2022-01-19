'use strict';

var utils = require('../utils/writer.js');
var Authentication = require('../service/AuthenticationService');

module.exports.apiV1LoginPOST = function apiV1LoginPOST (req, res, next, body) {
  Authentication.apiV1LoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1RegisterPOST = function apiV1RegisterPOST (req, res, next, body) {
  Authentication.apiV1RegisterPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
