export enum BloodGroup {
  APositive = 'A+',
  ANegative = 'A-',
  BPositive = 'B+',
  BNegative = 'B-',
  ABPositive = 'AB+',
  ABNegative = 'AB-',
  OPositive = 'O+',
  ONegative = 'O-',
}

export enum Role {
  Donor = 'DONOR',
  Patient = 'PATIENT',
  Admin = 'ADMIN',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  city: string;
  bloodGroup: BloodGroup;
  contact?: string;
  isAvailable?: boolean;
  isVerified?: boolean;
  dob?: string;
}

export interface PatientRequest {
  id: string;
  patientName: string;
  bloodGroup: BloodGroup;
  hospitalName: string;
  city: string;
  urgency: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
  contactPerson: string;
  postedAt: Date;
}

export interface BloodBank {
  id: string;
  name: string;
  city: string;
  stock: Record<BloodGroup, number>;
}
