import React from "react";
import Layout from "./components/layout";
import { Home, Login, Signup } from "./components/pages/";
import "./index.css";

function App() {
    return (
        <Layout>
            <Home />
            {/* <Login /> */}
            {/* <Signup /> */}
        </Layout>
    );
}
export default App;
