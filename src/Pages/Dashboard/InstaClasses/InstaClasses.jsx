import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const InstaClasses = () => {
  const { user } = useContext(AuthContext);
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="w-full p-5">
      <Helmet>Focus Academy | My classes</Helmet>
      <h1 className="text-5xl font-bold text-center py-10">My Classes</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>

              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {menu.map((item, index) => {
              if (user?.email === item.email) {
                return (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-20 h-20 rounded-xl">
                            <img
                              src={item.img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item.instructor}</td>
                    <td>{item.email}</td>
                    <td>{item.availabe_seats}</td>
                    <td>${item.price}</td>

                    <td>
                      <h1 className=" font-semibold">Approved</h1>
                    </td>
                    <td>
                      <h1 className=" font-semibold">0</h1>
                    </td>

                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-ghost bg-red-600  text-white"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                );
              }
              return;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstaClasses;
