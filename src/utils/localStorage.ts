export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const getContacts = (): Contact[] => {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : [];
};

export const saveContacts = (contacts: Contact[]): void => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};
