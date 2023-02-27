import * as React from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { AvatarChip } from '../AvatarChip';
import { useField } from 'formik';
import { get } from '@/servise/fetch';
import { User } from '@/types/entities';

const Participants: React.FC = () => {
  const [{ value }, , helper] = useField<string[]>('participants');
  const [users, setUsers] = React.useState<User[] | null>(null);

  React.useEffect(() => {
    get<User[]>('/api/users').then((res) => setUsers(res));
  }, []);

  const handleChangeParticipant = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked
      ? [...value, event.target.name]
      : value.filter((el) => el !== event.target.name);

    helper.setValue(newValue);
  };

  return (
    <Box>
      <FormControl>
        <FormLabel id="participants-label">Invite participants</FormLabel>
        <FormGroup aria-labelledby="participants-label">
          {users?.map((user) => {
            return (
              <FormControlLabel
                key={user.id}
                control={
                  <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                    checked={value.includes(user.id.toString())}
                    onChange={handleChangeParticipant}
                    name={user.id.toString()}
                  />
                }
                label={<AvatarChip {...user} />}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default Participants;
