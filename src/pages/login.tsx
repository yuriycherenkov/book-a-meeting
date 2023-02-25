import { LoginForm } from '@/components/LoginForm';
import { Avatar, Box, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import { getProviders, getCsrfToken } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';

export default function LoginPage({ providers, csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(' props => ', providers, csrfToken);

  return (
    <Box
      sx={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <GroupsIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginForm csrfToken={csrfToken} />
    </Box>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: { destination: '/' },
    };
  }

  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(ctx),
    },
  };
};
