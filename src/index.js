import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { firebase } from '@firebase/app';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
