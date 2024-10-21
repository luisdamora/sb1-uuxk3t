import PageGracias from "@/PageGracias.tsx";
import PageHome from "@/PageHome.tsx";
import PageHome2 from "@/PageHome2.tsx";
import PageHome3 from "@/PageHome3.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/v2",
    element: <PageHome2 />,
  },
  {
    path: "/v3",
    element: <PageHome3 />,
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
