import PropTypes from 'prop-types';
import { Wrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

Section.propType = {
  title: PropTypes.string.isRequired,
};
