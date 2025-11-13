import { Outlet } from 'react-router';
import './App.css'
import AppSidebar from './myComponents/common/AppSidebar';
import Navbar from './myComponents/common/Navbar';
import { ThemeProvider } from "./components/providers/theme-provider"
import { SidebarProvider } from './components/ui/sidebar';
// import { useState } from 'react';

export default function App() {
    // const [open, setOpen] = useState(() => {
    //     // Get initial state from localStorage. Important: localStorage only stores strings. 
    //     // Even though you saved the boolean false, it's stored as the string "false".
    //     const saved = localStorage.getItem("sidebar:state");
    //     return saved ? saved === "true" : true; // default to true (apply truthy + falsy value concept).
    // });

    // // Save to localStorage whenever it changes
    // const handleOpenChange = (newOpen: boolean) => {
    //     setOpen(newOpen);
    //     localStorage.setItem("sidebar:state", String(newOpen));
    // }

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <SidebarProvider>
                {/* <SidebarProvider open={open} onOpenChange={handleOpenChange}> */}
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

// See claude for open, onOpenChange explanation in details.