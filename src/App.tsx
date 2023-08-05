import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotesPage from "./components/NotesPage";
import AddNote from "./components/AddNote";
import Layout from "./layouts/Layout";

//React Browser Router
const router = createBrowserRouter(
  createRoutesFromElements(
    // Layout Route containing the header, nav and footer, That gets displayed on all pages
    <Route path="/" element={<Layout />}>
      {/*
         Nested routes which will be displayed where the <Outlet /> component
          is placed in the layout, depending on the path
      */}
      <Route index element={<NotesPage />} />
      <Route path="/create-note" element={<AddNote />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
