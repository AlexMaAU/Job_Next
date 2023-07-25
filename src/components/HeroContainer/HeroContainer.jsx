import { Section } from './styledHeroContainer';

const HeroContainer = ({ children }) => {
  return <Section className='hero'>{children}</Section>;
};

export default HeroContainer;
