import { Div, Title, Description } from './styledHeroText';
import Button from 'components/Button/Button';
import Link from 'next/link';

const HeroText = () => {
  return (
    <Div className='info'>
      {/* HeroText里的内容，也可以单独提取成组件 */}
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
      {/* Next Link component */}
      <Link href='/register'>
        <Button primary_light={false}>Login/Register</Button>
      </Link>
    </Div>
  );
};

export default HeroText;
