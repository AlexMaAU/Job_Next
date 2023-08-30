import { Div } from './styledHeroImg';
import Image from 'next/image';

const HeroImg = () => {
  return (
    <Div>
      <Image alt='Hero' width='400' height='352' src='./image/hero.svg' />
    </Div>
  );
};

export default HeroImg;
