'use client';

import Logo from 'components/Logo/Logo.jsx';
import HeroContainer from 'components/HeroContainer/HeroContainer.jsx';
import HeroText from 'components/HeroText/HeroText.jsx';
import HeroImg from 'components/HeroImg/HeroImg.jsx';
import { Container, Navigation } from './styledLanding';

const Landing = () => {
  return (
    <Container>
      {/* 
      1. 放在 public 文件夹下的文件，可以通过 ./直接访问 public 文件夹路径
      2. 把可能复用的组件都单独提出出来，放到 components 文件夹下，方便后面复用组件
      <Navigation>
        <Image width='164' height='50' alt='logo' src='./image/logo.svg' />
      </Navigation>
      */}
      <Navigation>
        {/* 把Logo组件写在page.jsx里，作为 children 传入的优点是增加可读性，只看 page.jsx 的结构就能知道页面的组成 */}
        <Logo />
      </Navigation>
      <HeroContainer>
        <HeroText />
        <HeroImg />
      </HeroContainer>
    </Container>
  );
};

export default Landing;
