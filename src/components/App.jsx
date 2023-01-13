import { InputForm } from './InputForm/InputForm';
import { ContactList } from './ContactList/ContactList';

export function App() {
  return (
    <section>
      <h1>Phonebook</h1>
      <InputForm />
      <ContactList />
    </section>
  );
}
