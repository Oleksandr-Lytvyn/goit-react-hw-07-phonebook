import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { addFilter } from '../../redux/filterSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export function ContactList() {
  const cont = useSelector(state => state.contacts);
  const fltr = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function delCont(submit) {
    dispatch(deleteContact(submit.target.id));
  }

  const filteredContacts = cont.data.filter(cont =>
    cont.name.toLowerCase().includes(fltr.toLowerCase())
  );
  return (
    <>
      <div className={css.contacts_section}>
        <h2>Contacts list</h2>
        <input
          type="text"
          name="filter"
          onInput={event => {
            dispatch(addFilter(event.target.value));
          }}
        />
        {isLoading && <b>Loading contacts...</b>}
        {error && <b>{error}</b>}
        <ul className={css.contacts_list}>
          {filteredContacts.map(cont => (
            <li key={cont.id} className={css.contacts_item}>
              <span>
                {cont.name}: {cont.phone}
              </span>
              <button
                id={cont.id}
                className={css.btn_contact}
                type="button"
                onClick={submit => {
                  delCont(submit);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
