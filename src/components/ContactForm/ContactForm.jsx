import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import notifier from '../../utils/notifier';

import { ContactContainer, StyledLabel, StyledInput, AddContactBtn } from './ContactForm.styled';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegex = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/;

const schema = yup.object().shape({
  name: yup.string().matches(nameRegex, 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan').required(),
  number: yup.string().matches(phoneRegex, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required(),
});

const initialValues = {
    name: '',
    number: '',
};

export const ContactForm = ({ state, modifyContactList }) => {
    
          
    const addContact = (newContact, { resetForm }) => {
        const { contacts } = state; 

        if (contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
            notifier.error(`${newContact.name} is already in contact`);
        } else {
            modifyContactList(newContact);
            };

        resetForm();  
    }
    
    

    return ( 
        <ContactContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={addContact}>
                {({ values }) => (
                    <Form autoComplete="off">
                        <StyledLabel htmlFor="name">
                            Name
                            <StyledInput value={values.name} type="text" name="name" placeholder="Jacob Mercer" />
                            <ErrorMessage name="name" render={(msg) => notifier.warning(msg)} />
                        </StyledLabel>
                    
                        <StyledLabel htmlFor="number">
                            Number
                            <StyledInput value={values.number} type="tel" name="number" placeholder="+38 044 000-00-00" />
                            <ErrorMessage name="number" render={(msg) => notifier.warning(msg)} />
                        </StyledLabel>
                        <AddContactBtn type="submit">Add contact</AddContactBtn>
                    </Form>
                )}
            </Formik>
        </ContactContainer>
    );
};




