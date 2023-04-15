import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../App";

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const context = useContext(ThemeContext);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipe = await data.json();
    setCuisine(recipe.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4
                style={{
                  color: context.text,
                }}
              >
                {item.title}
              </h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
