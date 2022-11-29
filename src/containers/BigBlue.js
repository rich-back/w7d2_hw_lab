import { useState } from "react";
import "../index.css";
import FilmList from "../components/FilmList";
import Title from "../components/Title";
import Button from "../components/Button";
import Film from "../components/Film";

const BigBlue = () => {
  const films = [
    {
      id: 1,
      name: "Spider-Man: Into the Spider-Verse",
      url: "https://www.imdb.com/title/tt4633694/?ref_=rlm",
      image: "img/spidey.jpg",
    },
    {
      id: 2,
      name: "Life Itself",
      url: "https://www.imdb.com/title/tt5989218/?ref_=rlm",
      image: "img/lifeitself.jpeg",
    },
    {
      id: 3,
      name: "Mary Queen of Scots",
      url: "https://www.imdb.com/title/tt2328900/?ref_=rlm",
      image: "img/mqs.jpeg",
    },
    {
      id: 4,
      name: "The Lego Movie 2: The Second Part",
      url: "https://www.imdb.com/title/tt3513498/?ref_=rlm",
      image: "img/lm2.jpeg",
    },
    {
      id: 5,
      name: "Captain Marvel",
      url: "https://www.imdb.com/title/tt4154664/?ref_=rlm",
      image: "img/cm2.jpeg",
    },
  ];

  return (
    <>
      <Title/>
      <FilmList allFilms={films} />
      <Button/>
    </>
  );
};

export default BigBlue;
