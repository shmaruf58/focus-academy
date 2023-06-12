import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Slide } from "react-awesome-reveal";

const  Insta = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);
  
  return (
    <div className="mb-10 pt-28">
        <Slide direction="right">
      <h1 className="text-5xl mb-16 font-bold text-center">Popular  Instructor</h1></Slide>

      <div className=" container mx-auto grid grid-cols md:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service?.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <LazyLoad offset={300} threshold={0.95}>
                <img
                  className=" w-full h-64"
                  src={service.img}
                  alt="Movie"
                />
              </LazyLoad>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.instructor_name}</h2>
              <p className="font-semibold">Instructor Email: {service.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default  Insta;
