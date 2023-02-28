import { PrismaClient, Role, InvitationStatus } from '@prisma/client';
import { encodePassword } from '../src/lib/password';

const prisma = new PrismaClient();

const ROOMS = [
  {
    number: 101,
    capacity: 4,
    location: 'Main Office',
  },
  {
    number: 110,
    capacity: 12,
    location: 'Main Office',
  },
  {
    number: 114,
    capacity: 5,
    location: 'Main Office',
  },
  {
    number: 203,
    capacity: 5,
    location: 'Main Office',
  },
  {
    number: 207,
    capacity: 15,
    location: 'Main Office',
  },
  {
    number: 218,
    capacity: 8,
    location: 'Main Office',
  },
  {
    number: 301,
    capacity: 3,
    location: 'Main Office',
  },
  {
    number: 305,
    capacity: 20,
    location: 'Main Office',
  },
  {
    number: 313,
    capacity: 7,
    location: 'Main Office',
  },
  {
    number: 403,
    capacity: 20,
    location: 'Main Office',
  },
  {
    number: 409,
    capacity: 15,
    location: 'Main Office',
  },
  {
    number: 417,
    capacity: 5,
    location: 'Main Office',
  },
  {
    number: 507,
    capacity: 6,
    location: 'Main Office',
  },
  {
    number: 510,
    capacity: 9,
    location: 'Main Office',
  },
  {
    number: 519,
    capacity: 12,
    location: 'Main Office',
  },
];

const USERS = [
  {
    email: 'alice@prisma.io',
    firstName: 'Alice',
    lastName: 'Dou',
    role: Role.DEV,
  },
  {
    email: 'ben@prisma.io',
    firstName: 'Ben',
    lastName: 'Solo',
    role: Role.PM,
  },
  {
    email: 'luke@prisma.io',
    firstName: 'Luke',
    lastName: 'Skywalker',
    role: Role.QA,
  },
  {
    email: 'dart@prisma.io',
    firstName: 'Darth',
    lastName: 'Vader',
    role: Role.BA,
  },
  {
    email: 'leia@prisma.io',
    firstName: 'Leia',
    lastName: 'Organa',
    role: Role.QA,
  },
  {
    email: 'owen@prisma.io',
    firstName: 'Owen',
    lastName: 'Lars',
    role: Role.DEV,
  },
  {
    email: 'obi-wan@prisma.io',
    firstName: 'Obi-Wan',
    lastName: 'Kenobi',
    role: Role.DEV,
  },
];

const MEETINGS = [
  {
    title: 'Status meeting',
    agenda: 'Morning status checkup with the team',
    organizerId: 4,
    roomId: 3,
    startDate: '2023-02-26T07:00:00.371Z',
    endDate: '2023-02-26T07:30:00.131Z',
  },
  {
    title: 'Refinement',
    agenda: 'Team refinement for task estimation',
    organizerId: 4,
    roomId: 4,
    startDate: '2023-02-26T10:00:00.371Z',
    endDate: '2023-02-26T11:00:00.131Z',
  },
  {
    title: 'Demo',
    agenda: 'Team sprint demo',
    organizerId: 4,
    roomId: 4,
    startDate: '2023-02-27T11:00:00.371Z',
    endDate: '2023-02-27T12:00:00.131Z',
  },
];

async function main() {
  // create rooms
  for (const room of ROOMS) {
    await prisma.room.create({
      data: room,
    });
  }
  // create users
  for (const user of USERS) {
    const password = await encodePassword('123');
    await prisma.user.create({
      data: { ...user, password },
    });
  }

  // for (const meeting of MEETINGS) {
  //   await prisma.meeting.create({
  //     data: {
  //       ...meeting,
  //       invitations: {
  //         create: [
  //           { userId: 2, status: InvitationStatus.PENDING },
  //           { userId: 3, status: InvitationStatus.ACCEPTED },
  //           { userId: 4, status: InvitationStatus.REJECTED },
  //           { userId: 5, status: InvitationStatus.ACCEPTED },
  //           { userId: 6, status: InvitationStatus.PENDING },
  //         ],
  //       },
  //     },
  //   });
  // }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
