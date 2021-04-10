import React from "react";
import { Link } from "react-router-dom";
import "./shipment.css";

function Shipments({ shipments, loading }) {
  if (loading) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      {shipments.map((shipment) => {
        return (
          <Link
            className="shipment-link"
            to={{
              pathname: `/shipmentDetails/${shipment.id}`,
            }}
          >
            {shipment.id}
          </Link>
        );
      })}
    </>
  );
}

export default Shipments;
