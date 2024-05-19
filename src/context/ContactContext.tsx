import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

import { generateFakeContacts } from "@/utils/fakerData";
import { Contact, getContacts, saveContacts } from "@/utils/localStorage";

interface State {
  contacts: Contact[];
}

type Action =
  | { type: "ADD_CONTACT"; payload: Contact }
  | { type: "UPDATE_CONTACT"; payload: Contact }
  | { type: "DELETE_CONTACT"; payload: string };

const initialState: State = {
  contacts: getContacts(),
};

const contactReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_CONTACT": {
      const newContacts = [...state.contacts, action.payload];
      saveContacts(newContacts);
      return { contacts: newContacts };
    }
    case "UPDATE_CONTACT": {
      const updatedContacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact,
      );
      saveContacts(updatedContacts);
      return { contacts: updatedContacts };
    }
    case "DELETE_CONTACT": {
      const filteredContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload,
      );
      saveContacts(filteredContacts);
      return { contacts: filteredContacts };
    }
    default:
      return state;
  }
};

const ContactContext = createContext<{
  state: State;
  addContact: (contact: Contact) => void;
  updateContact: (contact: Contact) => void;
  deleteContact: (id: string) => void;
}>({
  state: initialState,
  addContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
});

const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  useEffect(() => {
    if (state.contacts.length === 0) {
      const fakeContacts = generateFakeContacts(10);
      fakeContacts.forEach((contact) => {
        dispatch({ type: "ADD_CONTACT", payload: contact });
      });
    }
  }, [state.contacts]);

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
      value={{ state, addContact, updateContact, deleteContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};

const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContactContext must be used within a ContactProvider");
  }
  return context;
};

export { ContactProvider, useContactContext };
