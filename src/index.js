import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

/*Here the JWtoken is added to the header. The future requests will be validated with this string.*/
axios.defaults.headers.common["authorization"] =
  "Bearer " + localStorage.getItem("token");

ReactDOM.render(<App />, document.getElementById("root"));
