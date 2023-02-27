import { useEffect, useState } from 'react';
import { get } from '@/servise/fetch';
import { useFormikContext } from 'formik';
import MeetingTime from './MeetingTime';
import MeetingRoom from './MeetingRoom';
import { Rooms } from '@/types/entities';

interface CreateRoomsParams {
  startDate: string;
  endDate: string;
}

export const MeetingState = () => {
  const [rooms, setRooms] = useState<Rooms[] | null>(null);
  const { values } = useFormikContext<CreateRoomsParams>();

  useEffect(() => {
    if (values?.startDate && values?.endDate) {
      get<Rooms[]>('/api/rooms/available', { params: { startDate: values.startDate, endDate: values.endDate } }).then(
        (res) => setRooms(res)
      );
    }
  }, [values?.endDate, values?.startDate]);

  return (
    <>
      <MeetingTime />
      <MeetingRoom rooms={rooms} />
    </>
  );
};
