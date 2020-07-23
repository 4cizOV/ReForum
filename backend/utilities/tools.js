const bcrypt = require("bcryptjs");
const saltRounds = 10;

/**
 * Search object properties recursively and
 * perform callback action on each
 * @param  {Object}   obj      [object to search props]
 * @param  {Function} callback [action to perform on each props, two parameters (property, object)]
 * @return {Object}            [new modified object]
 */
const deepPropSearch = (obj, callback) => {
  // new object for immutability
  const newObj = Object.assign({}, obj);

  // recursive search function
  const deepSearch = (obj) => {
    for (const prop in obj) {
      // perform callback for each property
      callback && callback(prop, obj);

      // recursive search inside objects/arrays
      if (typeof obj[prop] === 'object') {
        if (obj[prop].length && obj[prop].length > 0) {
          obj[prop].forEach((deepObj) => {
            deepSearch(deepObj);
          });
        } else {
          deepSearch(obj[prop]);
        }
      }
    }
  };

  // start deep searching for properties
  deepSearch(newObj, callback);

  // return new object, maintain immutability
  return newObj;
};

const generateDiscussionSlug = (discussionTitle) => {
  const ObjectId = require('mongoose').Types.ObjectId();
  return discussionTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '_' + ObjectId;
};

/**
 * Generate Password Hash using bycrypt and saltRounds
 * @param {String} password simple plain password
 * @return Password Hash
 */
const generatePasswordHash = (password) => {
  return bcrypt.hash(password, saltRounds);
}

/**
 * Compare Password Hash from DB with plain password provided by user 
 * @param {String} password simple plain password
 * @param {String} passwordHash password hash from DB
 * @return {Boolean} true if password matches else false
 */
const comparePasswordHash = (password, passwordHash) => {
  return bcrypt.compare(password, passwordHash);
}

module.exports = {
  deepPropSearch,
  comparePasswordHash,
  generatePasswordHash,
  generateDiscussionSlug,
};
