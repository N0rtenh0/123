'use strict';


/**
 * Criar Jogo
 *
 * returns List
 **/
exports.createJogo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "nome" : "Nome do jogo",
  "descrição" : "Descrição do jogo",
  "preço" : "Preço do jogo"
}, {
  "id" : 0,
  "nome" : "Nome do jogo",
  "descrição" : "Descrição do jogo",
  "preço" : "Preço do jogo"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Jogo
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteJogo = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Jogo
 *
 * returns List
 **/
exports.retrieveJogo = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "nome" : "Nome do jogo",
  "descrição" : "Descrição do jogo",
  "preço" : "Preço do jogo"
}, {
  "id" : 0,
  "nome" : "Nome do jogo",
  "descrição" : "Descrição do jogo",
  "preço" : "Preço do jogo"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve Jogo
 *
 * id Long 
 * returns Jogo
 **/
exports.retrieveJogoById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "nome" : "Nome do jogo",
  "descrição" : "Descrição do jogo",
  "preço" : "Preço do jogo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update jogo
 *
 * body Jogo 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateJogo = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

