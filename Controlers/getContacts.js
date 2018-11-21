import { Permissions, Contacts } from "expo";

showContact = async () => {
  // Ask for permission to query contacts.
  const permission = await Permissions.askAsync(Permissions.CONTACTS);

  if (permission.status !== "granted") {
    // Permission was denied...
    return;
  }
  const contacts = await Contacts.getContactsAsync({});

  const filteredContacts = contacts.data.filter(
    contact => contact.phoneNumbers
  );


  const contactName = filteredContacts.map(
    contact => ({
      name: contact.name ,
      number: contact.phoneNumbers[0].number
    })
  );

return contactName

};

export default showContact;