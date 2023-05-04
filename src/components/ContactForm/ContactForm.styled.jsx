import styled from '@emotion/styled';
import { Field } from 'formik';

export const ContactContainer = styled.div`
    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.theme.colors.lightGrey};
    border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
    border-radius: 4px;  
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);

        margin-bottom: ${props => props.theme.spacing(2)};
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing(2)};
  font-size: 16px;
  font-weight: bold;
`;

export const StyledInput = styled(Field)`
  padding: ${props => props.theme.spacing(2)};
  font-size: 16px;
  border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
  border-radius: 4px;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const AddContactBtn = styled.button`
    padding: ${props => props.theme.spacing(1)};  
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    padding: ${props => props.theme.spacing(2)};
    border-radius: 4px;
    border: none;
    outline: none;

    cursor: pointer;

    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondaryText};
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: ${props => props.theme.colors.black};

    }
`;



