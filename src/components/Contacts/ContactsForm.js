import { Component } from 'react';
import { nanoid } from 'nanoid';
import {FormInput,LabelInput,Input} from 'components/Contacts/ContactsForm.styled.jsx';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };
    nameId = nanoid();
    numberId = nanoid();

    onHandleChacge = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    onHandleSubmit = e => {
        e.preventDefault();
        this.props.onSubmitAdd(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <FormInput
                type='submit'
                onSubmit={this.onHandleSubmit}
            >
                <LabelInput label={this.nameId}>
                    Name
                    <Input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.onHandleChacge}
                        id={this.nameId}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title='The name can only consist of letters, apostrophes, dashes and spaces. For example  Annie,Eden Clements,Hermione Kline,Rosie Simpson, etc.'
                        required
                    />
                </LabelInput>
                <LabelInput label={this.nameId}>
                    Number
                    <Input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        id={this.numberId}
                        onChange={this.onHandleChacge}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </LabelInput>
                <button type="submit">Add contact</button>
            </FormInput>
        );
    }
}

export default ContactForm;