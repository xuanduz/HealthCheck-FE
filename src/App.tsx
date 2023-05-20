import LoginPage from "./pages/LoginPage";
import Header from "./components/HeaderComponent";
import HomePagePatient from "./pages/patients/HomePage";
import FooterComponent from "./components/FooterComponent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PatientLayout from "./layout/PatientLayout";
import ClinicsPage from "./pages/patients/ClinicsPage";
import ClinicDetailPage from "./pages/patients/ClinicDetailPage";
import SpecialtiesPage from "./pages/patients/SpecialtiesPage";
import SpecialtyDetailPage from "./pages/patients/SpecialtyDetailPage";
import DoctorPage from "./pages/patients/DoctorsPage";
import DoctorDetailPage from "./pages/patients/DoctorDetailPage";
import BookingPage from "./pages/patients/BookingPage";
import BookingForm from "./pages/patients/BookingForm";
import HomePageDoctor from "./pages/doctor/HomePage.doctor";
import { RouteNameAdmin, RouteNameDoctor, RouteNamePatient } from "./routes/routes";
import AppointmentPageDoctor from "./pages/doctor/AppointmentPage.doctor";
import SchedulePageDoctor from "./pages/doctor/SchedulePage.doctor";
import DoctorLayout from "./layout/DoctorLayout";
import ChangePassword from "./pages/doctor/ChangePassword.doctor";
import AdminLayout from "./layout/AdminLayout";
import BookingPageAdmin from "./pages/admin/BookingPage.admin";
import ClinicPageAdmin from "./pages/admin/ClinicPage.admin";
import DoctorPageAdmin from "./pages/admin/DoctorPage.admin";
import RegisterPageAdmin from "./pages/admin/RegisterPage.admin";
import HomePageAdmin from "./pages/admin/HomePage.admin";
import { useRecoilState } from "recoil";
import { adminAccessTokenSelector } from "./data/recoil/admin/auth.admin";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { PostRequest } from "./utils/rest-api";
import { getLoginRoute, handleResetAccountCookies } from "./utils/utils";
import SpecialtyPageAdmin from "./pages/admin/SpecialtyPage.admin";
import ChangePasswordPageAdmin from "./pages/admin/ChangePasswordPage.admin";

function App() {
  const cookies = new Cookies();
  const [accessToken, setAccessToken] = useRecoilState(adminAccessTokenSelector);
  const router = createBrowserRouter([
    {
      path: RouteNamePatient.HOME,
      element: (
        <PatientLayout>
          <HomePagePatient />
        </PatientLayout>
      ),
      errorElement: <h1>Error page</h1>,
    },
    {
      path: RouteNamePatient.CLINICS,
      element: (
        <PatientLayout>
          <ClinicsPage />
        </PatientLayout>
      ),
    },
    {
      path: RouteNamePatient.SPECIALTIES,
      element: (
        <PatientLayout>
          <SpecialtiesPage />
        </PatientLayout>
      ),
    },
    {
      path: RouteNamePatient.DOCTORS,
      element: (
        <PatientLayout>
          <DoctorPage />
        </PatientLayout>
      ),
    },
    {
      path: RouteNamePatient.CLINIC_DETAIL,
      element: (
        <PatientLayout>
          <ClinicDetailPage />
        </PatientLayout>
      ),
    },
    {
      path: RouteNamePatient.SPECIALTY_DETAIL,
      element: (
        <PatientLayout>
          <SpecialtyDetailPage />
        </PatientLayout>
      ),
    },
    {
      path: RouteNamePatient.DOCTOR_DETAIL,
      element: (
        <PatientLayout>
          <DoctorDetailPage />
        </PatientLayout>
      ),
    },
    {
      path: RouteNamePatient.BOOKING_DOCTOR,
      element: (
        <PatientLayout>
          <BookingPage />
        </PatientLayout>
      ),
    },
    {
      path: RouteNamePatient.BOOKING_FORM,
      element: (
        <PatientLayout>
          <BookingForm />
        </PatientLayout>
      ),
    },
    {
      path: RouteNameDoctor.LOGIN,
      element: <LoginPage role="DOCTOR" />,
    },
    {
      path: RouteNameDoctor.HOME,
      element: (
        <DoctorLayout>
          <HomePageDoctor />
        </DoctorLayout>
      ),
    },
    {
      path: RouteNameDoctor.APPOINTMENT,
      element: (
        <DoctorLayout>
          <AppointmentPageDoctor />
        </DoctorLayout>
      ),
    },
    {
      path: RouteNameDoctor.SCHEDULE,
      element: (
        <DoctorLayout>
          <SchedulePageDoctor />
        </DoctorLayout>
      ),
    },
    {
      path: RouteNameDoctor.CHANGE_PASSWORD,
      element: (
        <DoctorLayout>
          <ChangePassword />
        </DoctorLayout>
      ),
    },
    /////////
    {
      path: RouteNameAdmin.LOGIN,
      element: <LoginPage role="ADMIN" />,
    },
    {
      path: RouteNameAdmin.HOME,
      element: (
        <AdminLayout>
          <HomePageAdmin />
        </AdminLayout>
      ),
    },
    {
      path: RouteNameAdmin.BOOKING,
      element: (
        <AdminLayout>
          <BookingPageAdmin />
        </AdminLayout>
      ),
    },
    {
      path: RouteNameAdmin.CLINICS,
      element: (
        <AdminLayout>
          <ClinicPageAdmin />
        </AdminLayout>
      ),
    },
    {
      path: RouteNameAdmin.SPECIALTY,
      element: (
        <AdminLayout>
          <SpecialtyPageAdmin />
        </AdminLayout>
      ),
    },
    {
      path: RouteNameAdmin.DOCTORS,
      element: (
        <AdminLayout>
          <DoctorPageAdmin />
        </AdminLayout>
      ),
    },
    {
      path: RouteNameAdmin.REGISTER,
      element: (
        <AdminLayout>
          <RegisterPageAdmin />
        </AdminLayout>
      ),
    },
    {
      path: RouteNameAdmin.CHANGE_PASSWORD,
      element: (
        <AdminLayout>
          <ChangePasswordPageAdmin />
        </AdminLayout>
      ),
    },
  ]);

  const resetAccessToken = async () => {
    if (cookies.get("refreshToken")) {
      let url: String = "";
      switch (cookies.get("role")) {
        case "ADMIN":
          url = process.env.REACT_APP_API_ADMIN || "";
          break;
        case "DOCTOR":
          url = process.env.REACT_APP_API_DOCTOR || "";
          break;
        case "PATIENT":
          url = process.env.REACT_APP_API || "";
          break;
        default:
          break;
      }
      await axios
        .post(`${url}/token`, {
          refreshToken: cookies.get("refreshToken"),
        })
        .then((res: any) => {
          cookies.set("accessToken", res.data?.accessToken);
        })
        .catch((err: any) => {
          if (err.response.status == 401) {
            const loginUrl = process.env.REACT_APP_HOST + getLoginRoute();
            console.log("getLoginRoute()", loginUrl);
            window.location.replace(loginUrl);
            // navigate(getLoginRoute());
            handleResetAccountCookies();
          }
        });
      // if (res?.data) {
      //   cookies.set("accessToken", res.data?.accessToken);
      // }
      // console.log(">>> ", res);
    }
  };

  useEffect(() => {
    const minutes = 1000 * 60 * 9;
    // const minutes = 1000 * 60 * 25;
    setInterval(async () => {
      console.log(">>> refresh token");
      resetAccessToken();
    }, minutes);
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
