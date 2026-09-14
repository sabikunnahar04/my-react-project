import Logo from "../../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-300 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex justify-between gap-4 py-10">
                    <div>
                        <img src={Logo} alt="" />
                        <p className="text-gray-500 text-sm max-w-xs mt-3">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <ul className="flex gap-4 items-center my-6 text-sm">
                            <li><strong>GitHub</strong></li>
                            <li><strong>Twitter</strong></li>
                            <li><strong>LinkedIn</strong></li>
                        </ul>
                    </div>

                    <div>
                        <h2><strong>PRODUCT</strong></h2>
                        <div className="space-y-2 text-sm text-gray-500 mt-3">
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div>
                        <h2><strong>COMPANY</strong></h2>
                        <div className="space-y-2 text-sm text-gray-500 mt-3">
                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    <div>
                        <h2><strong>LEGAL</strong></h2>
                        <div className="space-y-2 text-sm text-gray-500 mt-3">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>

                
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 pb-8">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;