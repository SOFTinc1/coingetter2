import styled from "styled-components";
import Button from "../../button/button";

export const MarketplaceBannerContainer = styled.div`
  padding: 0;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    padding: 0 auto 40px auto;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 10px;
  padding: 30px 0 0 0;

  @media screen and (max-width: 800px) {
    display: block;
  }
`;
export const Col1 = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 800px) {
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;
// export const Flex = styled.div``;
export const ImageSrc1 = styled.img`
  width: 250px;
  height: 80%;
  margin: 70px 0 auto -160px;
  border-radius: 12px;

  @media screen and (max-width: 800px) {
    width: 150px;
    height: 300px;
    border-radius: 7px;
    margin: 0;
  }
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 800px) {
    gap: 10px;
  }
`;
export const ImageSrc2 = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;

  @media screen and (max-width: 800px) {
    border-radius: 7px;
    width: 150px;
  }
`;
export const ImageSrc3 = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 12px;

  @media screen and (max-width: 800px) {
    border-radius: 7px;
    width: 150px;
  }
`;
export const Col2 = styled.div`
@media screen and (max-width: 512px) {
  margin: 70px auto 0 auto;
}
@media screen and (max-width: 400px) {
  margin: 0 auto 0 auto;
}
`;
export const Small = styled.h2`
  font-family: euclid;
  font-size: 16px;
  font-weight: 800;
  color: #000;
  padding-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;

  @media screen and (max-width: 800px) {
    margin: 20px 0 0 0;
    padding-bottom: 10px;
  }
`;
export const Hr = styled.hr`
  width: 50px;
  margin: 0 auto 140px auto;

  @media screen and (max-width: 800px) {
    margin: 0 auto 0 auto;
  }
`;
export const Head = styled.h1`
  font-family: euclid;
  font-size: 63px;
  font-weight: 800;
  color: #000;
  text-align: center;
  letter-spacing: 1px;
`;
export const Details = styled.p`
  font-family: typo;
  font-size: 10px;
  font-weight: 800;
  color: #000;
  text-align: center;
  letter-spacing: 2px;
  text-transform: lowercase;
`;
export const ButtonC = styled(Button)`
  width: 30%;
  margin: auto;
  text-align: center;
  padding: 10px;
  border-radius: 50px;

  @media screen and (max-width: 800px) {
    margin: 0 auto 60px auto;
  }
`;
export const Col3 = styled.div`
  display: flex;
  gap: 0;
  margin: 0;

  @media screen and (max-width: 800px) {
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;
export const ImageSrc4 = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;

  @media screen and (max-width: 800px) {
    border-radius: 7px;
    width: 150px;
  }
`;
export const ImageSrc5 = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 12px;
  margin: 0;

  @media screen and (max-width: 800px) {
    border-radius: 7px;
    width: 150px;
  }
`;
export const ImageSrc6 = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 12px;
  margin: 50px 0 auto 20px;

  @media screen and (max-width: 800px) {
    width: 150px;
    height: 300px;
    border-radius: 7px;
    margin: 0;
  }
`;
