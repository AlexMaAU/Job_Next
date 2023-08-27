import Image from "next/image";

const Logo = () => {
  {
    /* 放在 public 文件夹下的文件，可以通过 ./直接访问 public 文件夹路径 */
  }
  return <Image width='164' height='50' alt='logo' src='/image/logo.svg' />;
};

export default Logo;
