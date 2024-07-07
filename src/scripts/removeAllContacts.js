import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeAllContacts = async () => {
    try {
        const contacts = await getAllContacts();
        contacts.length = 0;
        await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf-8');
    }catch (err) {
    console.error(err);
  }
};

removeAllContacts();

