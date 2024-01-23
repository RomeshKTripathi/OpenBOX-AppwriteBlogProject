import { Outlet } from "react-router-dom";
import { Header } from "./components/ComponentIndex";
import { useEffect, useState } from "react";
import { authentication } from "./appwrite/AppwriteAuthentication";
import { useDispatch } from "react-redux";
import { storeLogin } from "./LocalStore/LocalAuthenticationSlice";

function App() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    authentication.getCurrentUser().then((userData) => {
      dispatch(storeLogin(userData));
    });
    setLoader(false);
  }, []);
  return loader ? (
    <div>Loading</div>
  ) : (
    <div className="min-h-screen content-between  bg-slate-50 ">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
