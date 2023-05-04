import styled from '@emotion/styled';

export const Container = styled.div`
  width: 425px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
`;

export const Title = styled.h1`
  margin-top: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const SubTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const ContactContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

`;
