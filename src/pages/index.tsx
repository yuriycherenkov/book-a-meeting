import { StatisticCard } from '@/components/StatisticCard';
import Stack from '@mui/material/Stack';
import todayPng from 'public/today.png';
import plannedPng from 'public/planned.png';
import finishedPng from 'public/finished.png';

export default function HomePage() {
  return (
    <Stack alignItems="center" spacing={3} sx={{ mt: 5 }}>
      <StatisticCard image={todayPng} title="Planned for today" count={3} />
      <StatisticCard image={plannedPng} title="Planned for this week" count={7} contentOrder={1} mediaOrder={2} />
      <StatisticCard image={finishedPng} title="Finished this month" count={16} />
    </Stack>
  );
}
