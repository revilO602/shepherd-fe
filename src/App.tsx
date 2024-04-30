import { Routes, Route } from "react-router-dom";
import Trips from "./pages/TripsPage";
import Login from "./pages/LoginPage";
import React from "react";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import SnackbarProvider from "./components/SnackbarProvider";
import MySnackbar from "./components/Snackbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./pages/RegisterPage";

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <Navigation />
        <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="trips"
            element={
              <ProtectedRoute>
                <Trips />
              </ProtectedRoute>
            }
          />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        <MySnackbar />
      </QueryClientProvider>
    </SnackbarProvider>
  );
};

export default App;
