export interface Rooms {
  id: number;
  number: number;
  capacity: number;
  location: string;
}

export type Role = 'EMPLOYEE' | 'DEV' | 'QA' | 'BA' | 'PM';

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
};

export type MeetingFormData = {
  title: string;
  agenda?: string;
  roomId: string;
  startDate: string;
  endDate: string;
  participants: string[];
};
