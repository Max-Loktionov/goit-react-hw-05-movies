import PropTypes from 'prop-types';
import { Container } from './Section.styled';

function Section({ title, children }) {
  return (
    <Container>
      {title && <h2>{title}</h2>}
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
