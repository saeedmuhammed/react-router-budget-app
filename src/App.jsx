import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashboard, { dashboardLoader } from "./Pages/Dashboard";
import Error from './Pages/Error'
import MainLayout from "./Layouts/MainLayout";
import { deleteItem } from "./Helper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} loader={dashboardLoader} errorElement={<Error />} >
    <Route index element={<Dashboard />} loader={dashboardLoader}  />
    <Route path="logout" action={()=> deleteItem('userName')} />
    </Route>
   
  )
);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;
