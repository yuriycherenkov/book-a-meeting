import { GridColDef } from '@mui/x-data-grid';
import { renderOrganizer, renderRoom } from './helpers';

export const COLUMNS: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 180 },
  { field: 'description', headerName: 'Description', width: 100 },
  { field: 'organizer', headerName: 'Organizer', width: 200, renderCell: renderOrganizer },
  { field: 'room', headerName: 'Room', width: 200, renderCell: renderRoom },
  { field: 'date', headerName: 'Date' },
  { field: 'startTime', headerName: 'Start time' },
  { field: 'endTime', headerName: 'End time' },
  // { field: 'participants', headerName: 'Participants' },
];
