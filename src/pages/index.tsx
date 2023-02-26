import { getSession, useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session, status } = useSession();
  console.log('status ', status, session);

  return <>Main page</>;
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
