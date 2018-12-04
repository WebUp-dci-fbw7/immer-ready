import { Permissions, Contacts } from "expo";
import _ from "lodash";

const showContact = async () => {
  // Ask for permission to query contacts.
  const permission = await Permissions.askAsync(Permissions.CONTACTS);

  if (permission) {
    if (permission.status !== "granted") {
      // Permission was denied...
      return;
    }
    const contacts = await Contacts.getContactsAsync({});
    if (contacts) {
      const filteredContacts = contacts.data.filter(
        contact => contact.phoneNumbers
      );

      const sortedContactsByName = _.sortBy(filteredContacts, [
        function(filter) {
          return filter.firstName;
        }
      ]);

      const contactName = sortedContactsByName.map(contact => ({
        name: contact.name,
        number: contact.phoneNumbers[0].number
      }));
      return contactName;
    }
  }
};

export default showContact;
