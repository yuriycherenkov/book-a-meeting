import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

import {
  renderOrganizer,
  getDate,
  renderRoom,
  renderDate,
  renderTime,
  renderParticipant,
  getStatus,
  renderStatus,
} from './helpers';

export const getColumns = (userId: number) => [
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'date', headerName: 'Date', valueGetter: getDate, renderCell: renderDate },
  { field: 'startDate', headerName: 'Start time', renderCell: renderTime },
  { field: 'endDate', headerName: 'End time', renderCell: renderTime },
  { field: 'room', headerName: 'Room', width: 180, renderCell: renderRoom },
  { field: 'organizer', headerName: 'Organizer', width: 200, renderCell: renderOrganizer },
  { field: 'agenda', headerName: 'Agenda', width: 180 },
  { field: 'status', headerName: 'Status', valueGetter: getStatus(userId), width: 150, renderCell: renderStatus },
  {
    field: 'invitations',
    headerName: 'Participants',
    width: 250,
    renderCell: renderParticipant,
  },
  {
    field: 'actions',
    type: 'actions',
    width: 100,
    getActions: () => [
      <GridActionsCellItem key="accept" icon={<DoneIcon />} label="Accept" />,
      <GridActionsCellItem key="reject" icon={<DeleteIcon />} label="Reject" />,
    ],
  },
];
