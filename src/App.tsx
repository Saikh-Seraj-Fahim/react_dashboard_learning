import { Outlet } from 'react-router';
import './App.css'
import AppSidebar from './components/AppSidebar';
import Navbar from './components/Navbar';
import { ThemeProvider } from "./components/providers/theme-provider"
import { SidebarProvider } from './components/ui/sidebar';

export default function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                <AppSidebar />
                <main className="w-full">
                    <Navbar />
                    <div className="px-4">
                        <Outlet /> {/* Child routes render HERE */}
                        {/* {children} */}
                    </div>
                </main>
            </SidebarProvider>
        </ThemeProvider>
    );
}

