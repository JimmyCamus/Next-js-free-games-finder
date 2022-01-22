import Link from "next/link";
import Logo from "./Logo";
import SNavbar from "./styled/SNavBar";
import SP from "./styled/SP";

const NavBar = () => {
  return (
    <div>
      <SNavbar>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div>
          <Link href="/games/popularity">
            <a data-testid="gamesLink">
              <SP
                fontSize="20px"
                margin="40px"
                rFontSize="12px"
                rMargin="20px"
                display="inline-flex"
              >
                All games
              </SP>
            </a>
          </Link>
          <Link href="/search">
            <a data-testid="searchLink">
              <SP
                fontSize="20px"
                rFontSize="12px"
                margin="40px"
                rMargin="20px"
                display="inline-flex"
              >
                Search Games
              </SP>
            </a>
          </Link>
        </div>
      </SNavbar>
    </div>
  );
};

export default NavBar;
