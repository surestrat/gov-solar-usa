import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Menu, X, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// Monitor scroll position
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Benefits", href: "#benefits" },
		{ name: "Process", href: "#process" },
		{ name: "Calculator", href: "#calculator" },
		{ name: "Gallery", href: "#gallery" },
		{ name: "FAQs", href: "#faq" },
	];

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? "py-3 bg-white shadow-md" : "py-5 bg-transparent"
			}`}
		>
			<Container>
				<div className="flex items-center justify-between">
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center"
					>
						<Sun
							className={`w-8 h-8 ${
								isScrolled ? "text-[#B22234]" : "text-white"
							}`}
						/>
						<span
							className={`ml-2 text-xl font-bold ${
								isScrolled ? "text-[#0052A5]" : "text-white"
							}`}
						>
							USA-SolarEnergy
						</span>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6">
						<nav className="flex items-center space-x-8">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className={`text-sm font-medium transition-colors duration-200 hover:text-[#B22234] ${
										isScrolled ? "text-[#0052A5]" : "text-white"
									}`}
								>
									{link.name}
								</a>
							))}
						</nav>
						<Button
							onClick={() =>
								document
									.getElementById("contact")
									.scrollIntoView({ behavior: "smooth" })
							}
							variant={isScrolled ? "primary" : "secondary"}
							icon={<ChevronRight className="w-4 h-4" />}
							className="text-sm"
						>
							Free Consultation
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className={`p-2 rounded-lg ${
								isScrolled ? "text-[#0052A5]" : "text-white"
							}`}
						>
							{mobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>
			</Container>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-white shadow-lg"
					>
						<Container>
							<nav className="flex flex-col py-4 space-y-4">
								{navLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										onClick={() => setMobileMenuOpen(false)}
										className="text-[#0052A5] p-2 transition-colors duration-200 hover:text-[#B22234]"
									>
										{link.name}
									</a>
								))}
								<Button
									onClick={() => {
										document
											.getElementById("contact")
											.scrollIntoView({ behavior: "smooth" });
										setMobileMenuOpen(false);
									}}
									variant={isScrolled ? "primary" : "secondary"}
									size="md"
									className="font-medium"
									icon={<ChevronRight className="w-4 h-4" />}
									iconPosition="right"
								>
									Free Consultation
								</Button>
							</nav>
						</Container>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
