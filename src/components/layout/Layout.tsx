import React from 'react';
import Container from '@mui/material/Container';
import AppBar from './AppBar';
import { FooterDecorator } from './FooterDecorator';

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
      <FooterDecorator />
    </>
  );
};

export default Layout;
