import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Project from "./components/pages/Project";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
import ContactForm from "./components/pages/Contact";

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header>
      {/* <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav> */}
      </Header>
      <main>
        <div>
          {!contactSelected ? (
            <>
              {/* <Gallery currentCategory={currentCategory}></Gallery> */}
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
