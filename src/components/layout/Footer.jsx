import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Sun,
	Twitter,
} from "lucide-react";
import Container from "../ui/Container";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white pb-8">
			<Container>
				<div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
					<p>© {currentYear} SolarAmerica. All rights reserved.</p>
					<div className="mt-2 space-x-4">
						<a href="#" className="hover:text-gray-400 transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-gray-400 transition-colors">
							Terms of Service
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
