const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8 mt-12 md:mt-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="mb-4 md:mb-0">&copy; 2024 AIMarket. All rights reserved.</p>
                <div className="space-x-4">
                    <a href="#" className="hover:text-blue-300">Terms</a>
                    <a href="#" className="hover:text-blue-300">Privacy</a>
                    <a href="#" className="hover:text-blue-300">Contact</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
