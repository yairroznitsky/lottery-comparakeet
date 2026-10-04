import { Link } from "react-router-dom";
import { BrandLogo } from "@/components/layout/BrandLogo";

const Header = () => {
  return (
    <Link
      to="/"
      className="inline-flex shrink-0 items-center gap-2 text-white transition-opacity hover:opacity-90"
    >
      <BrandLogo
        variant="icon"
        className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
      />
      <span className="sr-only">Lottery Parakeet</span>
    </Link>
  );
};

export default Header;
