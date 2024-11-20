import 'react-toastify/dist/ReactToastify.css';
import Container from "@mui/material/Container";
import Navbar from "./components/navbar/NavBar";
import TasksRender from "./components/tasks/Tasks";
import SearchBar from "./components/searchBar/SearchBar";
import SideBar from "./components/sidebar/SideBar";
import SidebarButton from "./components/sidebar/SidebarButton";
import { ToastContainer } from 'react-toastify';
import { useConfigStore } from './store/configStore';

function App() {
const {getWallpaper} = useConfigStore()

  const wallpaper = getWallpaper()

  return (
      <div style={{backgroundImage:`url(${wallpaper})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', minHeight:'100vh',backgroundPosition:'center' , backgroundAttachment:'fixed'}}>
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
