import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Navbar from "./components/navbar/NavBar";
import TasksRender from "./components/tasks/Tasks";
import SearchBar from "./components/searchBar/SearchBar";
import SideBar from "./components/sidebar/SideBar";
import SidebarButton from "./components/sidebar/SidebarButton";
import { useUserStore } from "./store/userStore";
import { ToastContainer } from 'react-toastify';

function App() {

  const {authUser}= useUserStore()
  useEffect(()=>{
    authUser()
  },[])
 
  return (
    
      <div>
        <SideBar />
        <SidebarButton />
        <Navbar />
        <Container maxWidth="lg" sx={{ paddingTop: { xs: 10, md: 15 } }}>
          <SearchBar />
          <TasksRender />
        </Container>
        <ToastContainer/>
      </div>
   
  );
}

export default App;
