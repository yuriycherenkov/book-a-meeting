import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image';

type StatisticCardProps = {
  image: StaticImageData;
  title: string;
  count: number;
  mediaOrder?: number;
  contentOrder?: number;
};

const StatisticCard: React.FC<StatisticCardProps> = ({ image, title, count, mediaOrder, contentOrder }) => {
  return (
    <Card sx={{ display: 'flex', maxWidth: 600, width: '100%', p: 2 }}>
      <CardMedia sx={{ width: '40%', order: mediaOrder, textAlign: 'center' }}>
        <Image src={image} alt="" />
      </CardMedia>
      <CardContent sx={{ flex: '1 0 auto', order: contentOrder }}>
        <Stack alignItems="center" sx={{ height: '100%' }}>
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
          <Typography
            component="p"
            variant="h3"
            color="primary"
            sx={{ flex: '1 0 auto', display: 'flex', alignItems: 'center' }}
          >
            {count}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
