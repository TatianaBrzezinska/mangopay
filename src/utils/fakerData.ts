import { faker } from '@faker-js/faker';

import { Contact } from './localStorage';

export const generateFakeContacts = (count: number): Contact[] => {
  const contacts: Contact[] = [];
  for (let i = 0; i < count; i++) {
    contacts.push({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
    });
  }
  return contacts;
};
