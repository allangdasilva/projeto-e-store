import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { data } = useSelector((state) => state.login);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!data?.access_token) navigate("/login");
  }, [data]);

  return <div>Favorites</div>;
};

export default Favorites;
