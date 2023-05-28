import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./Pages/Dashboard";
import Error from './Pages/Error'
import MainLayout from "./Layouts/MainLayout";
import { deleteItem } from "./Helper";

//totsify library for notifications 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} loader={dashboardLoader} errorElement={<Error />} >
    <Route index element={<Dashboard />} loader={dashboardLoader} action={dashboardAction} />
    <Route path="logout" action={()=> deleteItem('userName')} />
    </Route>
   
  )
);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
    <ToastContainer />
  </div>;
}

export default App;
