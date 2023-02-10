import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { Home, Login, Signup, Quiz, Result } from "./components/pages/";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import RouteProvider from "./components/helper/route-provider";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                        <Route
                            path="/login"
                            element={<RouteProvider routeType="public" component={Login} />}
                        />
                        <Route
                            path="/signup"
                            element={<RouteProvider routeType="public" component={Signup} />}
                        />
                        <Route path="/quiz" element={<RouteProvider component={Quiz} />} />
                        <Route path="/result" element={<RouteProvider component={Result} />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </BrowserRouter>
    );
}
export default App;
