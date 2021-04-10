import "./App.css";
import { useState, useEffect } from "react";
import Shipments from "./components/Shipments";
import Pagination from "./components/Pagination";
import { data, getShipmentById } from "./api/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShipmentDetails from "./components/ShipmentDetails";
import SingleShipment from "./components/SingleShipment";

function App() {
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [shipmentsPerPage, setShipmentsPerPage] = useState(20);
  const [shipmentById, setShipmentById] = useState("");
  const [singleShipment, setSingleShipment] = useState(false);
  const [shipmentData, setShipmentData] = useState([]);
  useEffect(() => {
    const response = data().then((data) => {
      setShipments(data);
      setLoading(false);
    });
  }, []);

  const singleShipmentData = getShipmentById().then((response) => {
    setShipmentData(response);
  });

  const indexofLastShipment = currentPage * shipmentsPerPage;
  const indexOfFirstShipment = indexofLastShipment - shipmentsPerPage;
  const currentShipment = shipments.slice(
    indexOfFirstShipment,
    indexofLastShipment
  );

  // setPage
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // if (singleShipment) {
  //   return (
  //     <>
  //       <SingleShipment shipmentData={shipmentData} />
  //     </>
  //   );
  // }
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <div className="shipment-search">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                getShipmentById(shipmentById);
                setSingleShipment(true);
              }}
            >
              <input
                type="text"
                value={shipmentById}
                onChange={(e) => setShipmentById(e.target.value)}
              />
              <button type="submit">search</button>
            </form>
          </div>
          <Shipments shipments={currentShipment} loading={loading} />
          <Pagination
            shipmentsPerPage={shipmentsPerPage}
            totalShipments={shipments.length}
            // pagintate={paginate}
          />
        </div>
      </Route>
      <Route path="/shipmentDetails">
        <ShipmentDetails />
      </Route>
    </Router>
  );
}

export default App;
