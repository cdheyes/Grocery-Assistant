import "../styles/header.css";
import logo from "../img/logo.png";

const Header = () => {
	return (
		<header className="header-container">
			<img src={logo} alt="logo" />
		</header>
	);
};

export default Header;
