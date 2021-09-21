import {RoutePaths} from "./utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

interface RoutesTypes {
    path: RoutePaths,
    Component: any // Change
    exact?: boolean
}

export const publicRoutes:RoutesTypes[] = [
    {
        path: RoutePaths.LOGIN_ROUTE,
        Component: Login,
        exact: true
    }
]
export const privateRoutes:RoutesTypes[] = [
    {
        path: RoutePaths.CHAT_ROUTE,
        Component: Chat,
        exact: true
    }
]
