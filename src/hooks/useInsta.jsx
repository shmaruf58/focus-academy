import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInsta = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isInsta, isLoading: isInstaLoading } = useQuery({
    queryKey: ["isInsta", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/insta/${user?.email}`);
      console.log("is insta response", res);
      return res.data.insta;
    },
  });
  return [isInsta, isInstaLoading];
};
export default useInsta;
