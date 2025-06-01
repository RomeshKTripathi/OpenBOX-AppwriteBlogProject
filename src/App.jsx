import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import useInit from "./hooks/useInit";
import Loader from "./components/utility/Loader";

function App() {
  const { error, loading } = useInit();

  useEffect(() => {
    if (error) createToast(error, "error", 5000);
  }, [error]);
  if (loading) return <Loader />;
  return (
    <>
      <Header />
      <div className="mx-auto md:container max-md:p-4">
        <Outlet />
      </div>
    </>
  );
}

export default App;
