Contacts = new Mongo.Collection('contacts');

Contacts.allow({
  insert: (userId, document) => {
    if (document.name.length !== 0) {
      return true;
    }
  },

  update: (userId, document, fieldNames, modifier) => {
    if (modifier['$set'].name.length !== 0) {
      return true;
    }
  },

  remove: (userId, document) => {
    return true;
  }
});
