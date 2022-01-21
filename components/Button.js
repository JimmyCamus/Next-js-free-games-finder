import Link from "next/link";
import SButton from "./styled/SButton";

const Button = ({ href, children }) => {
  return (
    <div>
      <Link href={href} passHref>
        <SButton data-testid="button">{children}</SButton>
      </Link>
    </div>
  );
};

export default Button;
