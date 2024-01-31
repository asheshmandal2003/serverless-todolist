import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Add, ArrowBack, DarkMode, LightMode, Menu } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { FlexBetween } from "../partials/FlexBetween";
import Searchbar from "./Searchbar";
import { useState } from "react";

export default function Navbar({ handleOpen }: { handleOpen(): void}) {
  const phone = useMediaQuery("(max-width: 600px)");
  const [searching, setSearching] = useState(false);
  return (
    <>
      {phone ? (
        <AppBar position="sticky">
          <FlexBetween>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 1, display: searching ? "none" : "flex" }}
              >
                <Menu sx={{ display: searching ? "none" : "flex" }} />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                hidden={searching}
                sx={{ flexGrow: 1, fontWeight: 600 }}
              >
                Todo
              </Typography>
              {searching && (
                <>
                  <Tooltip title="Cancel">
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      sx={{ mr: 1 }}
                      onClick={() => setSearching(false)}
                    >
                      <ArrowBack />
                    </IconButton>
                  </Tooltip>
                  <Searchbar />
                </>
              )}
            </Toolbar>
            <Toolbar sx={{ display: searching ? "none" : "flex" }}>
              <Tooltip title="Search">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 1 }}
                  onClick={() => setSearching(true)}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
              {true ? (
                <Tooltip title="Dark Mode">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{
                      mr: 1,
                    }}
                  >
                    <DarkMode />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Light Mode">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{
                      mr: 1,
                    }}
                  >
                    <LightMode />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Add Todo">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  onClick={handleOpen}
                >
                  <Add />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </FlexBetween>
        </AppBar>
      ) : (
        <AppBar position="sticky">
          <FlexBetween>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 600 }}
              >
                Todo
              </Typography>
            </Toolbar>
            <Toolbar>
              <Searchbar />
            </Toolbar>
            <Toolbar>
              {true ? (
                <Tooltip title="Dark Mode">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{
                      mr: 2,
                    }}
                  >
                    <DarkMode />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Light Mode">
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{
                      mr: 2,
                    }}
                  >
                    <LightMode />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Add Todo">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  onClick={handleOpen}
                >
                  <Add />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </FlexBetween>
        </AppBar>
      )}
    </>
  );
}
