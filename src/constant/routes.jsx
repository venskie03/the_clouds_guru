import Dashboard from "../layout/Dashboard";
import Blogs from "../pages/Blogs";
import HomeDashboard from "../pages/Dashboard"
export const PublicRoutes = [
    {
        path: "*",
        element: Dashboard
    }
]

export const HomeRoutes = [
    {
        path: "/",
        element: HomeDashboard
    },
    {
        path: "/Blogs",
        element: Blogs
    },
]