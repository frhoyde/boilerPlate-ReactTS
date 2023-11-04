import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/state";
import { AppRouterComponent } from "app/components/app-router.component";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRouterComponent />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
