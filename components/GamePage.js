import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SContainer from "./styled/SContainer";
import Button from "./Button";
import STitle from "./styled/STitle";
import SP from "./styled/SP";

const GamePage = ({ data }) => {
  return (
    <div>
      <SContainer
        justifyContent="space-evenly"
        flexDirection="row"
        width="100%"
      >
        <SContainer flexDirection="column" alignItems="center">
          <Image
            data-testid="image"
            alt=""
            src={data.thumbnail}
            width="375px"
            height="250px"
            layout="fixed"
          />
          <SP
            data-testid="platform"
            fontSize="20px"
            fontWeight="700"
            rFontSize="18px"
          >
            Platform: {data.platform}
          </SP>
          <Button href={data.game_url}>PLAY NOW</Button>
        </SContainer>
        <SContainer
          justifyContent="Center"
          flexDirection="column"
          alignItems="center"
          width="65%"
          rWidth="90%"
        >
          <STitle
            data-testid="title"
            fontSize="40px"
            fontWeight="700"
            rFontSize="30px"
          >
            {data.title}
          </STitle>
          <SP
            data-testid="description"
            fontSize="18px"
            fontWeight="400"
            rFontSize="16px"
            wrap="wrap"
          >
            {data.description}
          </SP>

          <STitle fontSize="35px" fontWeight="700" rFontSize="25px">
            Additional information
          </STitle>
          <SContainer
            flexDirection="row"
            justifyContent="space-evenly"
            width="100%"
          >
            <SContainer flexDirection="column">
              Release date
              <SP
                data-testid="releaseDate"
                margin="10px"
                fontSize="16px"
                fontWeight="400"
                rFontSize="14px"
                wrap="wrap"
              >
                {data.release_date}
              </SP>
              Developer
              <SP
                data-testid="dev"
                margin="10px"
                fontSize="16px"
                fontWeight="400"
                rFontSize="14px"
                wrap="wrap"
              >
                {data.developer}
              </SP>
            </SContainer>
            <SContainer flexDirection="column">
              Publisher
              <SP
                data-testid="publisher"
                fontSize="16px"
                fontWeight="400"
                rFontSize="14px"
                wrap="wrap"
              >
                {data.publisher}
              </SP>
              Genre
              <SP
                data-testid="genre"
                fontSize="16px"
                fontWeight="400"
                rFontSize="14px"
                wrap="wrap"
              >
                {data.genre}
              </SP>
            </SContainer>
          </SContainer>
          {data.minimum_system_requirements ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <STitle fontSize="25px" fontWeight="700" rFontSize="25px">
                Minimum System Requirements
              </STitle>
              <SContainer
                flexDirection="row"
                justifyContent="space-evenly"
                width="100%"
                rWidth="55%"
              >
                <SContainer flexDirection="column" justifyContent="center">
                  OS
                  <SP
                    data-testid="os"
                    margin="10%"
                    fontSize="16px"
                    fontWeight="400"
                    rFontSize="14px"
                    wrap="wrap"
                  >
                    {data.minimum_system_requirements.os}
                  </SP>
                  Graphics
                  <SP
                    data-testid="graphics"
                    margin="15%"
                    fontSize="16px"
                    fontWeight="400"
                    rFontSize="14px"
                    wrap="wrap"
                  >
                    {data.minimum_system_requirements.graphics}
                  </SP>
                </SContainer>
                <SContainer flexDirection="column">
                  Processor
                  <SP
                    data-testid="processor"
                    fontSize="16px"
                    fontWeight="400"
                    rFontSize="14px"
                    wrap="wrap"
                  >
                    {data.minimum_system_requirements.processor}
                  </SP>
                  Storage
                  <SP
                    data-testid="storage"
                    fontSize="16px"
                    fontWeight="400"
                    rFontSize="14px"
                    wrap="wrap"
                  >
                    {data.minimum_system_requirements.storage}
                  </SP>
                </SContainer>
              </SContainer>
            </div>
          ) : null}
          <SContainer alignItems="center" justifyContent="center">
            <STitle>Screenshots</STitle>
            <Carousel>
              {data.screenshots.map((image) => (
                <div key={image.id}>
                  <Image
                    data-testid="carouselImage"
                    src={image.image}
                    alt={`${data.title} screenshot`}
                    width="1920px"
                    height="1080px"
                  />
                </div>
              ))}
            </Carousel>
          </SContainer>
        </SContainer>
      </SContainer>
    </div>
  );
};

export default GamePage;
