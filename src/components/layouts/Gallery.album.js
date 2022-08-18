import axios from "axios";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

function Albums(props) {
  const [index, setIndex] = useState(0);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_BASEURL}/photos?_limit=` + props.limit,
    }).then((response) => setDatas(response.data));
  }, [props.limit]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <React.Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={data.url} alt="First slide" />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </React.Fragment>
  );
}

export default Albums;
