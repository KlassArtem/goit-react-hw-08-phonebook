import { IconContext } from 'react-icons';
import {
  FooterStyle,
  FooterLink,
  GitHub,
  FooterText,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyle>
      <FooterLink
        href="https://github.com/KlassArtem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconContext.Provider
          value={{
            color: '#777777',
            size: '25px',
            style: { verticalAlign: 'middle' },
          }}
        >
          <GitHub />
        </IconContext.Provider>
      </FooterLink>
      <FooterText> &copy; 2023</FooterText>
    </FooterStyle>
  );
};