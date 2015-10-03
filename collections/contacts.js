Contacts = new Mongo.Collection('contacts');

Contacts.allow({
  insert: (userId, document) => {
    if (document.name.length !== 0) {
      return true;
    }
  },

  update: function (userId, document, fieldNames, modifier) {
    if (document.name.length !== 0) {
      return true;
    }
  },

  remove: function (userId, document) {
    return true;
  }
});
