import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { Home, Login, Signup, Quiz, Result } from "./components/pages/";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/result" element={<Result />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </BrowserRouter>
    );
}
export default App;
