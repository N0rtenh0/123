'use strict';

var utils = require('../utils/writer.js');
var JogoController = require('../service/JogoControllerService');

module.exports.createJogo = function createJogo (req, res, next) {
  JogoController.createJogo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteJogo = function deleteJogo (req, res, next, id) {
  JogoController.deleteJogo(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveJogo = function retrieveJogo (req, res, next) {
  JogoController.retrieveJogo()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveJogoById = function retrieveJogoById (req, res, next, id) {
  JogoController.retrieveJogoById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateJogo = function updateJogo (req, res, next, body, id) {
  JogoController.updateJogo(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
