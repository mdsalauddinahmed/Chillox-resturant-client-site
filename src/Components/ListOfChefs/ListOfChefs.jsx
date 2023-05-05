import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";
import chef from "./chefs.css";
import { Col, Container, Row } from "react-bootstrap";
import View from "./ViewOfResturant/View";

const ListOfChefs = () => {
  const [allChef, setAllChef] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://bonolota-server-mdsalauddinahmed.vercel.app`)
      .then((res) => res.json())
      .then((data) => setAllChef(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(allChef);
  return (
    <Container className=" ">
     <Row>
      <Col lg={7}>
      <h2 className="text-start my-5">Let's familiar Our Chefs</h2>
      <div className="">
        {showAll
          ? allChef.map((data) => (
              <SingleChef data={data} key={data.id}></SingleChef>
            ))
          : allChef
              .slice(0, 6)
              .map((data) => <SingleChef data={data}></SingleChef>)}
      </div>

      <div className="size   my-3">
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="   border-0 rounded   "
          >
            Show All
          </button>
        )}
      </div>
      </Col>
      <Col lg={5} >
        <h2 className="text-start my-5">Some of Views in our Chillox</h2>
        <View></View>
      </Col>
     </Row>
    </Container>
  );
};

export default ListOfChefs;
