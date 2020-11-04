import React from "react";
import Stories from "../components/Stories";
import SearchForm from "../components/SearchForm";
import Buttons from "../components/Buttons";

const Home = () => {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
};
export default Home;
