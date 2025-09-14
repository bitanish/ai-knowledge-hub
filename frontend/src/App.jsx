import React from "react";
import {BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import SidebarLayout from "./components/SidebarLayout";
import UploadPage from "./pages/UploadPage";
import ChatPage from "./pages/ChatPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
 

function App() {
	const isAuthenticated = !!localStorage.getItem("access_token");

	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage/>}></Route>

				{
					isAuthenticated? (
						<Route element={<SidebarLayout/>}>
							<Route path="/upload" element={<UploadPage/>}/>
							<Route path="/chat" element={<ChatPage/>}/>
							<Route path="/dashboard" element={<DashboardPage/>}/>
							<Route path="*" element={<Navigate to="/upload" replace/>}/>
						</Route>
					): (<Route path="*" element={<Navigate to="/login" replace />} />)
				}
			</Routes>
		</Router>
	)
}

export default App;