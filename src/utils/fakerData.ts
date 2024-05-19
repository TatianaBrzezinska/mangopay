import { faker } from "@faker-js/faker";

import { Contact } from "@/types";

export const generateFakeContacts = (count: number): Contact[] => {
  const contacts: Contact[] = [];
  for (let i = 0; i < count; i++) {
    const id = faker.string.uuid();
    contacts.push({
      id,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
    });
  }
  return contacts;
};
