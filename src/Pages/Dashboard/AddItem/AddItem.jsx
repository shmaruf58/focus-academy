/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;

          const { name, price, instructor, availabe_seats, email } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            instructor,
            availabe_seats: parseFloat(availabe_seats),
            email,
            img: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class Added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Focus Academy | Add A Class</title>
      </Helmet>
      <h1 className="text-5xl font-bold text-center">Add Classes</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              type="text"
              {...register("instructor", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="text"
              {...register("email", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Availabe Seats*</span>
            </label>
            <input
              type="number"
              {...register("availabe_seats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
