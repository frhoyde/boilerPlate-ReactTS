import { Routes, Route } from "react-router-dom";
import { PublicRouteComponent } from "./public-route.component";
import { publicRoutes } from "app/routes";

export const AppRouterComponent = () => {
	return (
		<Routes>
			<Route element={<PublicRouteComponent />}>
				{publicRoutes.map((page) => {
					return <Route key={page.name} path={page.path} element={page.page} />;
				})}
			</Route>
		</Routes>
	);
};
