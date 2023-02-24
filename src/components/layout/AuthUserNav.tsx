import { Box, Button } from "@mui/material";

const pages = ["My meetings", "Create meeting"];

export const AuthUserNav = () => {
  const handleCloseNavMenu = () => {
    console.log("------");
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};
