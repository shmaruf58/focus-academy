import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Enrol = () => {
  const [services, setService] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://twin-server.vercel.app/payments")
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="w-full  ">
      <Helmet>
        <title>Focus Academy | My Enrolled Classes</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center py-4">
        My Enrolled Classes
      </h1>
      <div className="overflow-x-auto  w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Classes</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map(
              (item, index) =>
                user?.email === item.email && (
                  <tr className="text-center" key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="w-24 h-24">
                          <img
                            src={item.cartImg}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item.itemNames[0]}</td>
                    <td>{item.email}</td>
                    <td>${item.price}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enrol;
