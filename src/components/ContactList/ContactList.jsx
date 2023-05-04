import PropTypes from 'prop-types';
import getRandomHexColor from '../../utils/getrandomhexcolor'

import { ListOfContact, EachContact, Name, Number, DelContactBtn } from './ContactList.styled';



export const ContactList = ({contactList, onDelContact}) => {
    return (
        <ListOfContact>
            {contactList.map(({ id, name, number }) => {
          
                    return (
                        <EachContact key={id} style={{backgroundColor: getRandomHexColor() }}>
                            <Name>{name}</Name>
                            <Number>{number}</Number>
                            <DelContactBtn type="button" onClick={()=> onDelContact(id)}>DEL</DelContactBtn>
                        </EachContact>
                    );
                }          
                )
            }
        </ListOfContact>
    );
}

ContactList.propTypes = {
        contactList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
  }),
    ),
        onDelContact: PropTypes.func.isRequired,
};


