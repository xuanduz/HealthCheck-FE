import { RoutesType } from "../components/sidebar/SidebarLink";

export const RouteNamePatient = {
  HOME: "/",
  DOCTORS: "/doctors",
  DOCTOR_DETAIL: "/doctors/:id",
  CLINICS: "/clinics",
  CLINIC_DETAIL: "/clinics/:id",
  SPECIALTIES: "/specialties",
  SPECIALTY_DETAIL: "/specialties/:id",
  BOOKING_DOCTOR: "/booking",
  BOOKING_FORM: "/booking/123",
  LOGIN: "/login",
};

export const RouteNameDoctor = {
  LOGIN: "/system-doctor/login",
  HOME: "/system-doctor/home",
  SCHEDULE: "/system-doctor/schedule",
  APPOINTMENT: "/system-doctor/appointment",
  CHANGE_PASSWORD: "/system-doctor/change-password",
};

export const RouteNameAdmin = {
  LOGIN: "/system-admin/login",
  HOME: "/system-admin/home",
  DOCTORS: "/system-admin/doctor",
  DOCTOR_DETAIL: "/system-admin/doctors/:id",
  CLINICS: "/system-admin/clinics",
  CLINIC_DETAIL: "/system-admin/clinics/:id",
  BOOKING: "/system-admin/booking",
  // SPECIALTY_DETAIL: "/specialties/:id",
  // BOOKING_DOCTOR: "/booking",
  REGISTER: "/system-admin/register",
  CHANGE_PASSWORD: "/system-admin/change-password",
};

export const RoleRoutes = {
  ADMIN: "admin",
  DOCTOR: "doctor",
};

export const routesSidebar: RoutesType[] = [
  {
    name: "Trang chủ",
    path: RouteNameDoctor.HOME,
    role: RoleRoutes.DOCTOR,
  },
  {
    name: "Quản lý lịch khám",
    path: RouteNameDoctor.SCHEDULE,
    role: RoleRoutes.DOCTOR,
  },
  {
    name: "Quản lý đơn đặt lịch",
    path: RouteNameDoctor.APPOINTMENT,
    role: RoleRoutes.DOCTOR,
  },
  {
    name: "Đổi mật khẩu",
    path: RouteNameDoctor.CHANGE_PASSWORD,
    role: RoleRoutes.DOCTOR,
  },
  // {
  //   name: "Đăng xuất",
  //   path: RouteNameDoctor.LOGIN,
  //   role: RoleRoutes.DOCTOR,
  // },
  {
    name: "Trang chủ",
    path: RouteNameAdmin.HOME,
    role: RoleRoutes.ADMIN,
  },
  {
    name: "Quản lý đơn đặt lịch",
    path: RouteNameAdmin.BOOKING,
    role: RoleRoutes.ADMIN,
  },
  {
    name: "Quản lý cơ sở y tế",
    path: RouteNameAdmin.CLINICS,
    role: RoleRoutes.ADMIN,
  },
  {
    name: "Quản lý bác sĩ",
    path: RouteNameAdmin.DOCTORS,
    role: RoleRoutes.ADMIN,
  },
  {
    name: "Đăng ký thêm tài khoản",
    path: RouteNameAdmin.REGISTER,
    role: RoleRoutes.ADMIN,
  },
  {
    name: "Đổi mật khẩu",
    path: RouteNameAdmin.CHANGE_PASSWORD,
    role: RoleRoutes.ADMIN,
  },
];