import React from "react";
import { useLoaderData } from "react-router";

const CorsDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>I Im a cors Deatils </h1>
    </div>
  );
};

export default CorsDetails;
