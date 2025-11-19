import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const Home = lazy(() => import("./pages/Home"));
const DoctorsList = lazy(() => import("./pages/DoctorsList"));
const DoctorProfile = lazy(() => import("./pages/DoctorProfile"));
const Booking = lazy(() => import("./pages/Booking"));
const NotFound = lazy(() => import("./pages/NotFound"));


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense
        fallback={
          <LoadingScreen/>
        }
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorsList />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}
