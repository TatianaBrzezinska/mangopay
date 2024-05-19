import { Contact } from "@/types";

export const getContacts = (): Contact[] => {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : [];
};

export const saveContacts = (contacts: Contact[]): void => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};
