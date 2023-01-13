import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/listSlice';
import { addFilter } from '../../redux/filterSlice';

export function ContactList() {
  const cont = useSelector(state => state.contacts);
  const fltr = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function delCont(submit) {
    dispatch(deleteContact(submit.target.id));
  }
  const filteredContacts = cont.data.filter(cont =>
    cont.name.toLowerCase().includes(fltr.toLowerCase())
  );
  return (
    <div className={css.contacts_section}>
      <h2>Contacts list</h2>
      <input
        type="text"
        name="filter"
        onInput={event => {
          dispatch(addFilter(event.target.value));
          // addFilter(event.target.value);
        }}
      />
      <ul className={css.contacts_list}>
        {filteredContacts.map(cont => (
          <li key={cont.id} className={css.contacts_item}>
            <span>
              {cont.name}: {cont.number}
            </span>
            <button
              id={cont.id}
              className={css.btn_contact}
              type="button"
              onClick={submit => {
                delCont(submit);
                // deleteContact(submit);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
