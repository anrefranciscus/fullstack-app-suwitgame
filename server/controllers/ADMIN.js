'use strict';

var utils = require('../utils/writer.js');
var ADMIN = require('../service/ADMINService');

module.exports.getAllUser = function getAllUser (req, res, next) {
  ADMIN.getAllUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserId = function getUserId (req, res, next) {
  ADMIN.getUserId()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
