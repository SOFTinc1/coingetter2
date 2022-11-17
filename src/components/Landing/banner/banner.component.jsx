import {
  BannerContainer,
  Row,
  Col1,
  Col2,
  ImageSrc,
  H1,
  Details,
  Image,
  ButtonC
} from "./banner.styles";
import Girl from "../../../assets/image/girl.png";
import BannerImg from "../../../assets/image/banner.png";
import Footer from "../../footer/footer.component";

const Banner = () => (
  <BannerContainer>
    <Row>
      <Col1>
        <H1>
          We have <Image src={Girl} /> <br /> everything Crypto
        </H1>
        <Details>
          Lorem ipsum dolor sit amet consectetur adipisicing elit, Quasi
          repellendus repudiandae similique? Dolor doloribus iste natus eaque at
          id iusto
        </Details>
        <ButtonC>&#9654; enter</ButtonC>
      </Col1>
      <Col2>
        <ImageSrc src={BannerImg} />
      </Col2>
    </Row>
  </BannerContainer>
);

export default Banner;
