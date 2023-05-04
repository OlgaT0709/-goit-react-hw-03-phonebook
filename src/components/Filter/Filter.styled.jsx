import styled from '@emotion/styled';

export const FilterLable = styled.label`
font-size: 16px;
font-weight: 700;
cursor: pointer;
display: flex;
flex-direction: column;
margin-bottom: ${props => props.theme.spacing(7)};
`; 

export const FilterInput = styled.input`
width: 100%;
padding: ${props => props.theme.spacing(2)};
font-family: inherit;
font-size: 16px;
border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
border-radius: 4px;
    
background: ${props => props.theme.colors.white};

box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);

        `;
