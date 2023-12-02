import "./Header.css";
import icon from "../assets/starColored.png";

function Header() {
  return (
    <div>
      <header>
        <img src={icon} alt="Star Logo"></img>
        <h1>Forbidden Candy</h1>
        <p>Handmade jewellery</p>
      </header>
    </div>
  );
}

export default Header;
