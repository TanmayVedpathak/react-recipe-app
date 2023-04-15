import { useContext } from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  ${"" /* background: linear-gradient(35deg, #494949, #313131); */}
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

function Category() {
  const context = useContext(ThemeContext);
  const sLink = {
    background: context.gradient,
  };

  const h4Style = {
    color: context.body,
  };

  return (
    <List>
      <SLink style={sLink} to={"/cuisine/Indian"}>
        <BiBowlRice style={h4Style} />
        <h4 style={h4Style}>Indian</h4>
      </SLink>
      <SLink style={sLink} to={"/cuisine/Italian"}>
        <FaPizzaSlice style={h4Style} />
        <h4 style={h4Style}>Italian</h4>
      </SLink>
      <SLink style={sLink} to={"/cuisine/American"}>
        <FaHamburger style={h4Style} />
        <h4 style={h4Style}>American</h4>
      </SLink>
      <SLink style={sLink} to={"/cuisine/Japanese"}>
        <GiChopsticks style={h4Style} />
        <h4 style={h4Style}>Japanese</h4>
      </SLink>
    </List>
  );
}

export default Category;
