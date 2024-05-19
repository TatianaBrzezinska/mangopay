import { createContext, ReactNode, useReducer } from "react";

import { Contact } from "@/types";
import { generateFakeContacts } from "@/utils/fakerData";
import { getContacts, saveContacts } from "@/utils/localStorage";

type Action =
  | { type: "ADD_CONTACT"; payload: Contact }
  | { type: "UPDATE_CONTACT"; payload: Contact }
  | { type: "DELETE_CONTACT"; payload: string };

const initializeState = (): Contact[] => {
  const contacts = getContacts();
  if (contacts.length === 0) {
    const fakeContacts = generateFakeContacts(10);
    saveContacts(fakeContacts);
    return fakeContacts;
  }
  return contacts;
};

const initialState: Contact[] = initializeState();

const contactReducer = (state: Contact[], action: Action): Contact[] => {
  switch (action.type) {
    case "ADD_CONTACT": {
      const newContacts = [...state, action.payload];
      saveContacts(newContacts);
      return newContacts;
    }
    case "UPDATE_CONTACT": {
      const updatedContacts = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact,
      );
      saveContacts(updatedContacts);
      return updatedContacts;
    }
    case "DELETE_CONTACT": {
      const filteredContacts = state.filter(
        (contact) => contact.id !== action.payload,
      );
      saveContacts(filteredContacts);
      return filteredContacts;
    }
    default:
      return state;
  }
};

const ContactContext = createContext<{
  contacts: Contact[];
  addContact: (contact: Contact) => void;
  updateContact: (contact: Contact) => void;
  deleteContact: (id: string) => void;
}>({
  contacts: initialState,
  addContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
});

const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contacts, dispatch] = useReducer(contactReducer, initialState);

  const addContact = (contact: Contact) => {
    dispatch({ type: "ADD_CONTACT", payload: contact });
  };

  const updateContact = (contact: Contact) => {
    dispatch({ type: "UPDATE_CONTACT", payload: contact });
  };

  const deleteContact = (id: string) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
