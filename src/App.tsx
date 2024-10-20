import PageGracias from "@/PageGracias.tsx";
import PageHome from "@/PageHome.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/gracias",
    element: <PageGracias />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
