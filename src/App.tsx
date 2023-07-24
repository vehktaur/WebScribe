import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotesPage from "./components/NotesPage";
import AddNote from "./components/AddNote";
import Layout from "./layouts/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<NotesPage />} />
      <Route path="create-note" element={<AddNote />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
