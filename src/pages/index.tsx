import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session, status } = useSession();
  console.log('status ', status, session);

  return <>Main page</>;
}
