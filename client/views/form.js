Template.form.events({
  'submit form': function (event, template) {
    event.preventDefault();

    const contact = {
      name: template.find('form [data-id=name]').value,
      position: template.find('form [data-id=position]').value,
      company: template.find('form [data-id=company]').value,
      phone: template.find('form [data-id=phone]').value,
      email: template.find('form [data-id=email]').value,
      website: template.find('form [data-id=website]').value,
      street: template.find('form [data-id=street]').value,
      postalCode: template.find('form [data-id=postal-code]').value,
      locality: template.find('form [data-id=locality]').value,
      notes: template.find('form [data-id=notes]').value
    };

    if (!this._id) {
      Contacts.insert({
        name: contact.name,
        position: contact.position,
        company: contact.company,
        phone: contact.phone,
        email: contact.email,
        website: contact.website,
        street: contact.street,
        postalCode: contact.postalCode,
        locality: contact.locality,
        notes: contact.notes,
        modifiedAt: new Date()
      })
    } else {
      Contacts.update(
        { _id : this._id },
        { $set:
          {
            name: contact.name,
            position: contact.position,
            company: contact.company,
            phone: contact.phone,
            email: contact.email,
            website: contact.website,
            street: contact.street,
            postalCode: contact.postalCode,
            locality: contact.locality,
            notes: contact.notes,
            modifiedAt: new Date()
          }
        });
    }

    template.find('form [data-id=name]').value = '';
    template.find('form [data-id=position]').value = '';
    template.find('form [data-id=company]').value = '';
    template.find('form [data-id=phone]').value = '';
    template.find('form [data-id=email]').value = '';
    template.find('form [data-id=website]').value = '';
    template.find('form [data-id=street]').value = '';
    template.find('form [data-id=postal-code]').value = '';
    template.find('form [data-id=locality]').value = '';
    template.find('form [data-id=notes]').value = '';

    Session.set('selectedContact', {});

    window.scrollTo(0, 0);
  },

  'click button': function (event, template) {
    Session.set('selectedContact', {});
  }
});

Template.form.helpers({
  selectedContact: () => {
    return Session.get('selectedContact');
  },

  isContactSelected: () => {
    const selectedContact = Session.get('selectedContact');
    return selectedContact !== undefined &&  selectedContact._id;
  }
});
