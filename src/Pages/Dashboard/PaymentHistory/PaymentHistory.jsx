import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [services, setService] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://twin-server.vercel.app/payments")
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Focus Academy | Payment History</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center py-5 ">Payment History</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>User Email</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {services.map(
              (item, index) =>
                user?.email === item.email && (
                  <tr className="text-center" key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.transactionId}</td>
                    <td className="text">{item.date}</td>
                    <td className="text">${item.price}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
