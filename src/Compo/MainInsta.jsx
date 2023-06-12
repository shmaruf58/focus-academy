/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LazyLoad from "react-lazy-load";


const MainInsta = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  console.log(users);

 

  return (
    <div className="w-full p-5">
      <h1 className="text-5xl font-bold text-center py-10 mt-20">All Instructor</h1>
      {/*  */}

      <div className=" container mx-auto grid grid-cols md:grid-cols-3 gap-4">
      {users .filter((user) => user.role === "insta").map((service) => (
          <div
            key={service?._id}
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
              <h2 className="card-title">{service.name}</h2>
              <p className="font-semibold">Instructor Email: {service.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainInsta;
