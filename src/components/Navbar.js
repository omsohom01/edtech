import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleButtonClick = (section) => {
    console.log(`Navigating to ${section}`);
    // Add navigation logic here (e.g., scroll to section or navigate to route)
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Menu Icon for Mobile View */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>

        {/* Brand Name */}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => handleButtonClick("home")}
        >
          MyApp
        </Typography>

        {/* Navigation Buttons for Desktop View */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }}>
          <Button color="inherit" onClick={() => handleButtonClick("quiz")}>
            Quiz
          </Button>
          <Button color="inherit" onClick={() => handleButtonClick("dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => handleButtonClick("analytics")}>
            Analytics
          </Button>
          <Button color="inherit" onClick={() => handleButtonClick("tutor")}>
            Tutor
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
