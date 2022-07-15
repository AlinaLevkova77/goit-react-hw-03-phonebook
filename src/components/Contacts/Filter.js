import React from 'react';
import {LabelInput} from 'components/Contacts/ContactsForm.styled.jsx';

const Filter = ({ value, onChange }) => {
    <LabelInput>
        Find contacts by name
        <input value={value} onChange={onChange}></input>
    </LabelInput>
};

export default Filter;