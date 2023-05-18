export const DEFAULT_SIZE_PER_PAGE = 9;

export interface OffsetPageInfo {
  pageNum: number;
  pageSize: number;

  pageCount: number;
  totalCount: number;
  totalPages?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  initial?: boolean; // True nếu tự động load dữ liệu cho page mặc định.
}

export const defaultPageInfo = {
  pageNum: 1,
  pageSize: DEFAULT_SIZE_PER_PAGE,
  // pageCount: 0,
  // totalCount: 0,
};

export interface ClinicType {
  id?: string | number;
  name: string;
  provinceKey?: string;
  address?: string;
  image?: string;
  descriptionHTML?: string;
  describe?: string;
  provinceData?: CodeType;
}

export interface SpecialtyType {
  id?: number | string;
  name?: string;
  image?: string;
  descriptionHTML?: string;
  describe?: string;
}

export interface DoctorType {
  id?: number | string;
  email?: string;
  password?: string;
  fullName?: string;
  gender?: string;
  phoneNumber?: string;
  price?: string | number;
  image?: string;
  provinceKey?: string;
  positionKey?: string;
  descriptionHTML?: string;
  describe?: string;

  specialty?: SpecialtyType;
  clinic?: ClinicType;
  specialtyData?: SpecialtyType;
  clinicData?: ClinicType;
}

export interface PatientType {
  id?: number | string;
  email?: string;
  phoneNumber?: string;
  bookingTime?: string;
  fullName?: string;
  addressDetail?: string;
  gender?: boolean;
  reason?: string;
  provinceKey?: string;
  status?: string;
  resultFile?: any;
  birthday?: string;
  provincePatientData?: CodeType;
}

export interface AdminType {
  id?: number | string;
  email?: string;
  password?: string;
  fullName?: string;
  gender?: string;
  phoneNumber?: string;
  address?: string;

  rePassword?: string;
}

export interface CodeType {
  id?: number;
  key: string;
  type: string;
  value: string;
}

export interface AppointmentType {
  id?: number | string;
  statusKey?: string;
  date?: string;
  time?: string;
  timeSlot?: string;
  reason?: string;
  resultFile?: any;
  patientId?: number;
  doctorId?: number;
  bookingType?: string;
  patientData?: PatientType;
  doctorData?: DoctorType;
  bookingData?: CodeType;
  timeData?: CodeType;
  statusData?: CodeType;
}