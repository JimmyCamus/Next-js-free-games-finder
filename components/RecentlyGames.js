import Image from "next/image";
import Link from "next/link";
import SContainer from "./styled/SContainer";
import SCard from "./styled/SCard";
import SP from "./styled/SP";
import STitle from "./styled/STitle";
import Button from "./Button";

const RecentlyGames = ({ data }) => {
  return (
    <SContainer flexDirection="column" alignItems="Center">
      <STitle data-testid="containerTitle">Recently released</STitle>
      {data.map((item) => (
        <Link key={item.id} href={`/game/${item.id}`} passHref>
          <SCard
            data-testid="card"
            width="900px"
            height="120px"
            margin="10px 10px"
            flexDirection="row"
            justifyContent="space-between"
            rWidth="95%"
          >
            <SContainer>
              <Image
                data-testid="cardImage"
                alt={`${item.title} image`}
                src={item.thumbnail}
                width="180px"
                height="110px"
                layout="fixed"
              />
            </SContainer>
            <SContainer
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              margin="0px 40px"
            >
              <SP data-testid="cardTitle" rFontSize="9px">
                {item.title}
              </SP>
              <SP data-testid="cardGenre" rFontSize="8px">
                {item.genre}
              </SP>
            </SContainer>
            <SP data-testid="cardPlatform" rFontSize="6px">
              {item.platform}
            </SP>
          </SCard>
        </Link>
      ))}
      <Button href="/games/popularity">More games</Button>
    </SContainer>
  );
};

export default RecentlyGames;
