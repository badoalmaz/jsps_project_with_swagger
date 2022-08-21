import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, checkAuth, logout } = useAuth();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const buttons = {
    color: "white",
    display: "block",
    textTransform: "capitalize",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button sx={buttons} onClick={() => navigate("/")}>
            News
          </Button>

          {user ? (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Button sx={buttons} onClick={() => navigate("/products")}>
                  Products
                </Button>
                <Button sx={buttons} onClick={() => navigate("/add")}>
                  Admin
                </Button>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ alignSelf: "center" }}>{user}</Typography>
                <Button sx={buttons} onClick={logout}>
                  Logout
                </Button>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <Button sx={buttons} onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button sx={buttons} onClick={() => navigate("/register")}>
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
