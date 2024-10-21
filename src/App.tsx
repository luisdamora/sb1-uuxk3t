import PageGracias from "@/PageGracias.tsx";
import PageHome3 from "@/PageHome3.tsx";
import PageHome4 from "@/PageHome4.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome3 />,
  },
  {
    path: "/v3",
    element: <PageHome4 />,
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
