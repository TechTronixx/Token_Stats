import { Logo } from "../assets";

const Header = () => {
  return (
    <header className="PRNT-Header">
      <div className="PRNT-Logo">
        <img src={Logo} alt="Logo" />
        <h1>Token Supply & Statistics</h1>
      </div>

      {/* <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Other</a>
        <a href="#">Links</a>
      </nav> */}
    </header>
  );
};

export default Header;
