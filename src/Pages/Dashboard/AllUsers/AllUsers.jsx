/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://twin-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInsta = (user) => {
    fetch(`https://twin-server.vercel.app/users/insta/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          //user.role = "insta";
          refetch();

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an instructor Now! Refresh browser`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full overflow-scroll overflow-x-scroll">
      <Helmet>
        <title>Focus Academy | All users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="text-center" key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin"
                    ? "admin"
                    : user.role === "insta"
                    ? "instructor"
                    : "user"}
                </td>

                <td>
                  <button
                    disabled={user.role === "admin" ? true : undefined}
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-primary text-white"
                  >
                    Make Admin
                  </button>
                </td>

                <td>
                  <button
                    disabled={user.role === "insta" ? true : undefined}
                    onClick={() => handleMakeInsta(user)}
                    className="btn btn-primary text-white"
                  >
                    Make instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
