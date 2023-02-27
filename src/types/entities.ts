import { InvitationStatus } from '@prisma/client';

export interface Room {
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

export type Invitation = {
  id: number;
  meetingId: number;
  status: InvitationStatus;
  userId: number;
  participant: User;
};

export type MeetingFormData = {
  title: string;
  agenda?: string;
  roomId: string;
  startDate: string;
  endDate: string;
  participants: string[];
};

export type MeetingData = {
  agenda: string;
  createdAt: string;
  endDate: string;
  id: number;
  roomId: number;
  startDate: string;
  title: string;
  invitations: Invitation[];
  organizer: User;
  room: Room;
};
