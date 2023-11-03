import React from "react";
import Notes from "./Notes";
import Header from "./Header";
import CreateNotes from "./CreateNotes";

const Home = () => {
  return (
    <>
      <Header
        heading="More than just Notes App"
        description="Pocket app that we can use anytime, anyplace !!"
        cImage="images/notes.svg"
      />
    </>
  );
};

export default Home;
