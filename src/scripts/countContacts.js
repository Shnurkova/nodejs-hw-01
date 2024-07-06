import getAllContacts from '../scripts/getAllContacts';

export const countContacts = async () => {
    try {
        const contacts = await getAllContacts();
        const count = contacts.length;
        return count;
    } catch (err) {
        console.error(err);
    }
};

console.log(await countContacts());

