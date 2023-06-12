import LazyLoad from "react-lazy-load";
import useAdmin from "../hooks/useAdmin";
import useInsta from "../hooks/useInsta";
import useMenu from "../hooks/useMenu";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MainClass = () => {
  const [menu] = useMenu();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInsta] = useInsta();

  const handleAddToCart = (service) => {
    console.log(service);
    const { name, img, price, instructor, available_seats, _id } = service;

    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        img,
        price,
        instructor,
        available_seats,
        email: user.email,
      };

      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Classes added on the Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Select the classes",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="w-full p-5">
      <h1 className="text-5xl font-bold text-center py-10 mt-20">All Classes</h1>
      {/*  */}

      <div className=" container mx-auto grid grid-cols md:grid-cols-3 gap-4">
        {menu.map((service) => (
            
            <div
            key={service?._id}
            className={`card card-compact w-96 ${
                service.availabe_seats=== 0 ? 'bg-red-600' : 'bg-base-100'
            } shadow-xl`}
          >
            <figure>
              <LazyLoad offset={300} threshold={0.95}>
                <img className=" w-full h-64" src={service.img} alt="Movie" />
              </LazyLoad>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <p className="font-semibold">Instructor: {service.instructor}</p>
              <p className="font-semibold">
                Available Seats: {service.availabe_seats}
              </p>
              <p className="font-semibold">Price: ${service.price}</p>
              <div className="card-actions justify-end">
                {isInsta && !isAdmin ? (
                  <>
                    <button
                      disabled="disable"
                      onClick={() => handleAddToCart(service)}
                      className="btn btn-primary"
                    >
                      Select
                    </button>
                  </>
                ) : isAdmin ? (
                  <>
                    <button
                      disabled="disable"
                      onClick={() => handleAddToCart(service)}
                      className="btn btn-primary"
                    >
                      Select
                    </button>
                  </>
                ) : service.availabe_seats === 0 ? (
                  <>
                    <button
                      disabled="disable"
                      onClick={() => handleAddToCart(service)}
                      className="btn btn-primary"
                    >
                      Select
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleAddToCart(service)}
                      className="btn btn-primary"
                    >
                      Select
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainClass;
