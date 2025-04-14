import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import Tickets from "./pages/tickets/Tickets";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/tickets',
                element: <Tickets />
            }
        ]
    }
])

export default router