import Header from "./_components/Header"
import Sidebar from "./_components/Sidebar"
import DashboardContent from "./_components/DashboardContent"



export default function Component() {


    return (
        <div className="flex flex-col h-screen bg-background">
            {/* Header */}
            <Header />

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar for larger screens */}
                <Sidebar />

                {/* Main Content */}
                <DashboardContent />
            </div>
        </div>
    )
}