import { useEffect } from "react";
import Container from "@mui/material/Container";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Navbar from "./components/navbar/NavBar";
import TasksRender from "./components/tasks/Tasks";
import SearchBar from "./components/searchBar/SearchBar";
import SideBar from "./components/sidebar/SideBar";
import SidebarButton from "./components/sidebar/SidebarButton";

function App() {
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <SideBar />
        <SidebarButton />
        <Navbar />
        <Container maxWidth="lg" sx={{ paddingTop: { xs: 10, md: 15 } }}>
          <SearchBar />
          <TasksRender />
        </Container>
      </div>
    </LocalizationProvider>
  );
}

export default App;
