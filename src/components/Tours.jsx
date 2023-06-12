import React from "react";
import { useEffect, useState } from "react";
import Tour from "./Tour";
import Loading from "./Loading";

const Tours = ({ url, isLoading, setIsLoading }) => {
  const [tours, setTours] = useState([]);
  //   console.log(url);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
console.log(removeTour)

  const fetchData = () => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          console.log(response);
        }
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setTours(response);
        setIsLoading(false);
      });
  };

  console.log("Tours are ---->", tours);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
