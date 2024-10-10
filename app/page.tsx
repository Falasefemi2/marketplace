import Footer from "./_components/Footer";
import Header from "./_components/Header";
import MainContent from "./_components/MainContent";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}