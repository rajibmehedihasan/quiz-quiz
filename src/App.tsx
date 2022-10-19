import React from "react";
import Layout from "./components/layout";
import { Home, Login } from "./components/pages/";
import "./index.css";

function App() {
    return (
        <Layout>
            {/* <Home /> */}
            <Login />
        </Layout>
    );
}
export default App;
