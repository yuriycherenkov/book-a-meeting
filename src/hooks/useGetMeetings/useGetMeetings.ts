import { get } from '@/servise/fetch';
import { MeetingData } from '@/types/entities';
import { useQuery } from 'react-query';

const useGetMeetings = () => useQuery<MeetingData[]>('get-meetings', () => get('/api/meetings'));

export default useGetMeetings;
