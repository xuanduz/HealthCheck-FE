import { RouteName } from "./router.data";

export interface HeaderContentType {
  title: string;
  content?: string;
  slug: string;
}

export const HeaderContentData: HeaderContentType[] = [
  {
    title: "Cơ sở y tế",
    slug: RouteName.CLINICS,
  },
  {
    title: "Chuyên khoa",
    slug: RouteName.SPECIALTIES,
  },
  {
    title: "Bác sĩ",
    slug: RouteName.DOCTORS,
  },
];
