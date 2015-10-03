Template.contacts.events({
  'click [data-action=open]': function (event, template) {
    Session.set('selectedContact', this);
  },

  'click [data-action=remove]': function (event, template) {
    if (confirm('Do you really want to remove this contact?')) {
      Contacts.remove({ _id: this._id });
    }
  }
});

Template.contacts.helpers({
  contacts: () => {
    return Contacts.find({}, { sort: { name: 1 } });
  }
});
