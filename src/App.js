import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/Homepage.component";
import Swap from "./components/Swap/swap-component/swap.component";
import Getter from "./pages/getter/getter.component";
// import GetterTableData from "./components/Getter/getter-table-data/getter-table-data.component";
import Marketplace from "./pages/marketplace/marketplace.component";
import Footer from "./components/footer/footer.component";


class App extends React.Component {
  // constructor() {
  //   super();


  //   this.state = {
  //     students: []
  //   }

  // }

  // componentDidMount() {
  //   fetch("https://api.hatchways.io/assessment/students")
  //   .then(response => response.json())
  //   .then(students => this.setState({ students: students.students }))
  // }

  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/swap" element={<Swap />} />
          <Route exact path="/getter" element={<Getter />} />
          <Route exact path="/marketplace" element={<Marketplace />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
