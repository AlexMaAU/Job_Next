'use client';

import Image from 'next/image.js';
import {
  Container,
  Navigation,
  HeroContainer,
  HeroText,
  Title,
  Description,
  HeroImg,
} from './styledLanding.jsx';
import LoginBtn from 'components/Button/Button.jsx';

function LandingPage() {
  return (
    <Container>
      <Navigation>
        {/* 放在 public 文件夹下的文件，可以通过 ./直接访问 public 文件夹路径 */}
        <Image width='164' height='50' alt='logo' src='./image/logo.svg' />
      </Navigation>
      <HeroContainer className='hero'>
        <HeroText className='info'>
          <Title>
            Job
            <span>Tracking</span>
            App
          </Title>
          <Description>
            Im baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </Description>
          <LoginBtn>Login/Register</LoginBtn>
        </HeroText>
        <HeroImg>
          <Image width='400' height='352' src='./image/hero.svg' />
        </HeroImg>
      </HeroContainer>
    </Container>
  );
}

export default LandingPage;
