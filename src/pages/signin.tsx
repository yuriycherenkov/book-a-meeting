import { SignInForm } from '@/components/SignInForm';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { getProviders, getCsrfToken } from 'next-auth/react';
import { getSession } from 'next-auth/react';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import logo from 'public/logo.png';

export default function SignInPage({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Paper sx={{ mt: 20, p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image src={logo} alt="logo" width={50} />
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Sign in
        </Typography>
        <SignInForm csrfToken={csrfToken} />
      </Box>
    </Paper>
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
