import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/home/david-marcu-78A265wPiO4-unsplash.jpg";
import img2 from "../../../assets/home/dawid-zawila--G3rw6Y02D0-unsplash.jpg";
import img3 from "../../../assets/home/v2osk-1Z2niiBPg5A-unsplash.jpg";


const Banner = () => {
  return (
    <Carousel className="text-center ">

      <div className="relative flex flex-col  items-center justify-center">
        <h1 className=" md:text-5xl text-2xl text-white font-bold leading-tight absolute">
          Focus Academy: Mastering <br /> The Art of Photography
        </h1>
        <button className="btn btn-primary absolute bottom-10  md:bottom-72">
          Get Started
        </button>
        <img  src={img1} />
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <h1 className=" md:text-5xl text-2xl text-white font-bold leading-tight absolute">
          Focus Academy: Mastering <br /> The Art of Photography
        </h1>
        <button className="btn btn-primary absolute bottom-10  md:bottom-72">
          Get Started
        </button>
       
        <img src={img2} />
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <h1 className=" md:text-5xl text-2xl text-white font-bold leading-tight absolute">
          Focus Academy: Mastering <br /> The Art of Photography
        </h1>
        <button className="btn btn-primary absolute bottom-4  md:bottom-64">
          Get Started
        </button>
        <img src={img3} />
      </div>

     
    </Carousel>
  );
};

export default Banner;
