import LoginPage from "./pages/LoginPage";
import Header from "./components/HeaderComponent";
import HomePageClient from "./pages/patients/HomePage";
import FooterComponent from "./components/FooterComponent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PatientUIComponent from "./components/PatientUIComponent";
import { RouteName } from "./data/router.data";
import ClinicsPage from "./pages/patients/ClinicsPage";
import ClinicDetailPage from "./pages/patients/ClinicDetailPage";
import SpecialtiesPage from "./pages/patients/SpecialtiesPage";
import SpecialtyDetailPage from "./pages/patients/SpecialtyDetailPage";
import DoctorPage from "./pages/patients/DoctorsPage";
import DoctorDetailPage from "./pages/patients/DoctorDetailPage";
import BookingPage from "./pages/patients/BookingPage";

function App() {
  const router = createBrowserRouter([
    {
      path: RouteName.LOGIN,
      element: <LoginPage />,
    },
    {
      path: RouteName.HOME,
      element: (
        <PatientUIComponent>
          <HomePageClient />
        </PatientUIComponent>
      ),
      errorElement: <h1>Error page</h1>,
    },
    {
      path: RouteName.CLINICS,
      element: (
        <PatientUIComponent>
          <ClinicsPage />
        </PatientUIComponent>
      ),
    },
    {
      path: RouteName.SPECIALTIES,
      element: (
        <PatientUIComponent>
          <SpecialtiesPage />
        </PatientUIComponent>
      ),
    },
    {
      path: RouteName.DOCTORS,
      element: (
        <PatientUIComponent>
          <DoctorPage />
        </PatientUIComponent>
      ),
    },
    {
      path: RouteName.CLINIC_DETAIL,
      element: (
        <PatientUIComponent>
          <ClinicDetailPage />
        </PatientUIComponent>
      ),
    },
    {
      path: RouteName.SPECIALTY_DETAIL,
      element: (
        <PatientUIComponent>
          <SpecialtyDetailPage />
        </PatientUIComponent>
      ),
    },
    {
      path: RouteName.DOCTOR_DETAIL,
      element: (
        <PatientUIComponent>
          <DoctorDetailPage />
        </PatientUIComponent>
      ),
    },
    {
      path: RouteName.BOOKING_PAGE,
      element: (
        <PatientUIComponent>
          <BookingPage />
        </PatientUIComponent>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
