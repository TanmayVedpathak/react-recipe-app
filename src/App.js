import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useLayoutEffect,
} from "react";
import "./App.css";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { BsSun, BsMoon } from "react-icons/bs";
import { lightTheme, darkTheme } from "./theme";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [themeCSS, setThemeCSS] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setThemeCSS(darkTheme);
    } else {
      setTheme("light");
      setThemeCSS(lightTheme);
    }
  };

  // console.log(themeCSS);
  useEffect(() => {
    document.body.style.backgroundColor = themeCSS.body;
    document.activeElement.style.color = themeCSS.text;
  }, [themeCSS]);

  return (
    <ThemeContext.Provider value={themeCSS}>
      <div className="App">
        <Router>
          <Nav>
            <div>
              <GiKnifeFork color={themeCSS.text} />
              <Logo style={{ color: themeCSS.text }} to={"/"}>
                delicious
              </Logo>
            </div>
            <Button onClick={toggleTheme}>
              {theme === "light" ? <BsMoon /> : <BsSun color={themeCSS.text} />}
            </Button>
          </Nav>
          <Search />
          <Category />
          <Pages />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 50%;
  background: transparent;
  color: black;
  padding: 10px;
`;

export default App;
