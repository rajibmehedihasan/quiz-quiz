import Layout from "./components/layout";
import { Home, Login, Signup, Quiz, Result } from "./components/pages/";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}
export default App;
