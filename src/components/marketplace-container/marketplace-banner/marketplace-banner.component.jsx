import {
  MarketplaceBannerContainer,
  Row,
  Col1,
  Hr,
  ImageSrc1,
  Inner,
  ImageSrc2,
  ImageSrc3,
  Col2,
  Small,
  Head,
  Details,
  ButtonC,
  Col3,
  ImageSrc4,
  ImageSrc5,
  ImageSrc6,
} from "./marketplace-banner.styles";
import Image1 from "../../../assets/image/market/1.jpg";
import Image3 from "../../../assets/image/market/3.jpg";
import Image4 from "../../../assets/image/market/4.jpg";
import Image5 from "../../../assets/image/market/5.jpg";
import Image9 from "../../../assets/image/market/9.jpg";
import Image10 from "../../../assets/image/market/10.jpg";
import Image11 from "../../../assets/image/market/11.jpg";
// import Image2 from "../../../assets/image/market/2.png";
// import Image6 from "../../../assets/image/market/6.jpg";
// import Image7 from "../../../assets/image/market/7.png";
import MarketplaceHeader from "../marketplace-header/getter-header.component";

const MarketplaceBanner = () => (
  <MarketplaceBannerContainer>
    <MarketplaceHeader />
    <Row>
      <Col1>
        <Inner>
          <ImageSrc1 src={Image1} />
        </Inner>
        <Inner>
          <ImageSrc2 src={Image5} />
          <ImageSrc3 src={Image4} />
        </Inner>
      </Col1>
      <Col2>
        <Small>special edition</Small>
        <Hr />
        <Head>the art collection</Head>
        <Details>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, Voluptas
          dolorem delectus veniam sequi magnam adipisci atque hic molestiae
          expedita doloribus
        </Details>
        <ButtonC>explore</ButtonC>
      </Col2>
      <Col3>
        <Inner>
          <ImageSrc4 src={Image9} />
          <ImageSrc5 src={Image10} />
        </Inner>
        <Inner>
          <ImageSrc6 src={Image1} />
        </Inner>
      </Col3>
    </Row>
  </MarketplaceBannerContainer>
);

export default MarketplaceBanner;
