import { Helmet } from "react-helmet-async";


const AdminHome = () => {
    return (
        <div>
            <Helmet>
        <title>Focus Academy | Admin Home</title>
      </Helmet>
            <h1 className="text-center text-5xl font-bold">Welcome To Admin Home</h1>
        </div>
    );
};

export default AdminHome;