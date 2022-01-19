'use strict';

var utils = require('../utils/writer.js');
var PLAYER = require('../service/PLAYERService');

module.exports.apiV1PlayerBiodataPOST = function apiV1PlayerBiodataPOST (req, res, next, body) {
  PLAYER.apiV1PlayerBiodataPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PlayerRoomPOST = function apiV1PlayerRoomPOST (req, res, next, body) {
  PLAYER.apiV1PlayerRoomPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.detailBiodataPlayer = function detailBiodataPlayer (req, res, next) {
  PLAYER.detailBiodataPlayer()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.detailRoomId = function detailRoomId (req, res, next, body) {
  PLAYER.detailRoomId(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get = function get (req, res, next) {
  PLAYER.get()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllPlayer = function getAllPlayer (req, res, next, pointMin, pointMax, level) {
  PLAYER.getAllPlayer(pointMin, pointMax, level)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIdRoom = function getIdRoom (req, res, next, body) {
  PLAYER.getIdRoom(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
