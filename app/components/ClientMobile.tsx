"use client";

import MobileCategories from "../components/MobileCategories";
import { BreakpointProvider } from 'react-socks';


const ClientMobile = () => {
    return (

        <div className="flex items-center justify-center">
            <BreakpointProvider>
                <MobileCategories />
            </BreakpointProvider>

        </div>

    );
}

export default ClientMobile;