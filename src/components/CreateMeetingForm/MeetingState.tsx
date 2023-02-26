import { useEffect, useState } from 'react';
import { get } from '@/servise/fetch';
import { useFormikContext } from 'formik';
import MeetingTime from './MeetingTime';
import MeetingRoom from './MeetingRoom';

interface CreateRoomsParams {
  startTime: string;
  endTime: string;
}

interface Rooms {
  id: number;
  number: number;
  capacity: number;
  location: string;
}

export const MeetingState = () => {
  const [rooms, setRooms] = useState<Rooms[]>([]);
  const { values } = useFormikContext<CreateRoomsParams>();

  console.log(values);

  useEffect(() => {
    if (values?.startTime && values?.endTime) {
      get<Rooms[]>('/api/rooms', { params: { startDate: values.startTime, endDate: values.endTime } }).then((res) => {
        console.log('res => ', res);
        setRooms(res);
      });
    }
  }, [values?.endTime, values?.startTime]);

  return (
    <>
      <MeetingTime />
      <MeetingRoom rooms={rooms} />
    </>
  );
};