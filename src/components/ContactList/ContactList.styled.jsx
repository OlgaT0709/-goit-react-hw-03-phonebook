import styled from '@emotion/styled';

export const ListOfContact = styled.ul`
    max-height: 232px;
    overflow-y: auto;
    padding: ${props => props.theme.spacing(2)};
    background-color: ${props => props.theme.colors.lightGrey};
    border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
    border-radius: 4px;  
    box-shadow:
        0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
     
`;

export const  EachContact= styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: ${props => props.theme.spacing(2)};
    border: ${props => `1px solid ${props.theme.colors.secondaryText}`};  
    
`;

export const Name = styled.p`
    width: 100%;
    font-weight: 700;
`;

export const Number = styled.p`
    width: 100%;
            `;

export const DelContactBtn = styled.button`
    height: 36px;
    padding: ${props => props.theme.spacing(1)};  
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    padding: ${props => props.theme.spacing(2)};
    border-radius: 10px;
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
