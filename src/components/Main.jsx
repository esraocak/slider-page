import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import data from "../helper/data";

const Main = () => {

  const [slideIndex, setSlideIndex] = useState(1)
 

  let box = document.querySelector(".container");
  let item = document.querySelector(".card");

  const btnprev = () => {
    let width = item.clientWidth;
    box.scrollLeft = box.scrollLeft - width;console.log(width);
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
  }
  else if (slideIndex === 1){
      setSlideIndex(data?.length)
  }
  };

  const btnnext = () => {
    let width = item.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
    if(slideIndex !== data?.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === data?.length){
            setSlideIndex(1)
        }
  };

  const moveDot = index => {
    setSlideIndex(index)
}

  
  return (
    <>
      <div className="header">
        <h2>Interviews</h2>
        <div className="buttons">
          <button className="button" onClick={btnprev}>
            <GrFormPrevious />
          </button>
          <button className="button" onClick={btnnext}>
            <GrFormNext />
          </button>
        </div>
      </div>

      <div className="container">
        {data.map((item) => {
          const { name, image, job } = item;
          return (
            <div className="card">
              <div className="img">
                <img src={image} alt="pic"/>
              </div>
              <div className="text">
                <p className="title">Lorem, ipsum dolor.</p>
                <h4 className="h4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero nesciunt, amet quia temporibus expedita repudiandae
                  repellendus minima illo non maxime.
                </h4>
                <div className="identity">
                  <div>
                    <p>{name}</p>
                    <p>{job}</p>
                  </div>
                  <div className="adiv">
                    <a className="link" href="#">
                      To the interview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container-dots">
                {Array.from({length:data?.length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
     </div>
    </>
  );
};

export default Main;
