import React from "react";
import Layout from "./components/layout";
import { Home, Login, Signup, Quiz } from "./components/pages/";
import "./index.css";

function App() {
    return (
        <Layout>
            {/* <Home /> */}
            {/* <Login /> */}
            {/* <Signup /> */}
            <Quiz />
        </Layout>
    );
}
export default App;
