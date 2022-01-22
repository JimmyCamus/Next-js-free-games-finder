import Image from "next/image";
import Link from "next/link";
import SContainer from "./styled/SContainer";
import SCard from "./styled/SCard";
import SP from "./styled/SP";
import STitle from "./styled/STitle";

const ListGames = ({ games }) => {
  return (
    <SContainer flexDirection="column" alignItems="center">
      <STitle></STitle>
      <SContainer
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        {games.map((item) => (
          <Link key={item.id} href={`/game/${item.id}`} passHref>
            <SCard
              data-testid="card"
              width="400px"
              height="390px"
              margin="10px 10px"
              flexDirection="column"
              justifyContent="space-between"
              rWidth="350px"
            >
              <Image
                data-testid="cardImage"
                alt={`${item.title} image`}
                src={item.thumbnail}
                width="350px"
                height="250px"
                layout="fixed"
              />
              <SP data-testid="cardTitle" fontSize="18px" rFontSize="16px">
                {item.title}
              </SP>
              <SP data-testid="cardTitle" fontSize="14px" rFontSize="12px">
                {item.genre}
              </SP>
              <SP data-testid="cardTitle" fontSize="12px" rFontSize="10px">
                {item.platform}
              </SP>
            </SCard>
          </Link>
        ))}
      </SContainer>
    </SContainer>
  );
};

export default ListGames;
