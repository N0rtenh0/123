'use strict';


/**
 * Criar Users
 *
 * body User  (optional)
 * returns User
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "Nome do User",
  "nick" : "Nick do user"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete do User
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Buscar User
 *
 * id Long 
 * returns User
 **/
exports.retrieveUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "name" : "Nome do User",
  "nick" : "Nick do user"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Buscar user
 *
 * returns List
 **/
exports.retrieveUsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "Nome do User",
  "nick" : "Nick do user"
}, {
  "id" : 0,
  "name" : "Nome do User",
  "nick" : "Nick do user"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update do User
 *
 * body User 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateUser = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

