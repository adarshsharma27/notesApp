import React from "react";
import Notes from "./Notes";
import Header from "./Header";
import CreateNotes from "./CreateNotes";

const Home = () => {
  return (
    <>
      <Header
        heading="More than just shorter links"
        description="Build your brand’s recognition and get detailed insights on how your links are performing."
        btnText="Get Started"
        btnUrl="#"
        cImage="images/notes.svg"
      />
    </>
  );
};

export default Home;
