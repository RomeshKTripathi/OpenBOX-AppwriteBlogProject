import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authentication } from "../appwrite/Authentication";
import { storeLogin } from "../store/userSlice";

const useInit = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const userData = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!userData)
            authentication
                .currentUser()
                .then((user) => {
                    dispatch(storeLogin(user));
                })
                .catch((err) => {
                    console.log(err);
                    setError(err);
                });
        setLoading(false);
    }, []);
    return [error, loading];
};

export default useInit;
