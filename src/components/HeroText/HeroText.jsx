import { Div, Title, Description } from './styledHeroText';
import LoginBtn from 'components/Button/Button';

const HeroText = () => {
  return (
    <Div className='info'>
      <Title>
        Job
        <span>Tracking</span>
        App
      </Title>
      <Description>
        Im baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle
        single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi
        tote bag adaptogen everyday carry meggings +1 brunch narwhal.
      </Description>
      <LoginBtn>Login/Register</LoginBtn>
    </Div>
  );
};

export default HeroText;
