import Image from "next/image";
import Link from "next/link";
import SContainer from "./styled/SContainer";
import SCard from "./styled/SCard";
import SP from "./styled/SP";
import STitle from "./styled/STitle";

const PopularGames = ({ data }) => {
  return (
    <SContainer flexDirection="column" alignItems="center">
      <STitle>Most popular</STitle>
      {data.map((item) => (
        <Link key={item.id} href={`/game/${item.id}`} passHref>
          <SCard
            data-testid="card"
            width="400px"
            height="330px"
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
            <SP data-testid="cardTitle" rFontSize="16px">
              {item.title}
            </SP>
          </SCard>
        </Link>
      ))}
    </SContainer>
  );
};

export default PopularGames;
