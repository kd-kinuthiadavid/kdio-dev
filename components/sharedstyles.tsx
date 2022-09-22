import styled from 'styled-components'

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
`;
const SubHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const BodyText = styled.p`
  font-family: ${({ theme }) => theme.fonts.text};
`;

const ButtonText = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const NavText = styled(ButtonText)``;


export { Heading, SubHeading, BodyText, ButtonText, NavText };
