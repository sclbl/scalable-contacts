Template.contacts.events({
  'click [data-action=open]': function (event, template) {
    Session.set('selectedContact', this);
  },

  'click [data-action=remove]': function (event, template) {
    if (confirm('Do you really want to remove this contact?')) {
      Contacts.remove({ _id: this._id });
    }
  },

  'keyup [data-action=search]': _.debounce(function(event, template) {
    event.preventDefault();
    Session.set('searchQuery', template.find('[data-action=search]').value);
  }, 300)
});

Template.contacts.helpers({
  contacts: () => {
    if (Session.get('searchQuery') !== undefined && Session.get('searchQuery').length !== 0) {
      const query = Session.get('searchQuery');
      return Contacts.find({ $or: [ { name: new RegExp(query, 'i') }, { position: new RegExp(query, 'i') }, { company: new RegExp(query, 'i') } ] }, { sort: { name: 1 } });
    }
    return Contacts.find({}, { sort: { name: 1 } });
  }
});
