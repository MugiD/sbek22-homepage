import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: Center;
  height: 30px;
  line-height: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;
const Logo = () => {
  const footPrintImg = `/images/logofoot${useColorModeValue("", "-dark")}.png`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily='M Plus Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Bek Slambek
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
