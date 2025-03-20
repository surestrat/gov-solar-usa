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
							style={{
								color: isScrolled ? "#B22234" : "white",
								width: "2rem",
								height: "2rem",
							}}
						/>
						<span
							style={{
								color: isScrolled ? "#0052A5" : "white",
								marginLeft: "0.5rem",
								fontSize: "1.25rem",
								fontWeight: "700",
							}}
						>
							GovSolarUsa
						</span>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-6">
						<nav className="flex items-center space-x-8">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									style={{
										color: isScrolled ? "#0052A5" : "white",
										fontSize: "0.875rem",
										fontWeight: "500",
										transition: "color 0.2s",
									}}
									onMouseOver={(e) => (e.target.style.color = "#B22234")}
									onMouseOut={(e) =>
										(e.target.style.color = isScrolled ? "#0052A5" : "white")
									}
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
							icon={<ChevronRight style={{ width: "1rem", height: "1rem" }} />}
							className="text-sm"
						>
							Free Consultation
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							style={{
								color: isScrolled ? "#0052A5" : "white",
								padding: "0.5rem",
								borderRadius: "0.5rem",
							}}
						>
							{mobileMenuOpen ? (
								<X style={{ width: "1.5rem", height: "1.5rem" }} />
							) : (
								<Menu style={{ width: "1.5rem", height: "1.5rem" }} />
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
										style={{
											color: "#0052A5",
											padding: "0.5rem",
											transition: "color 0.2s",
										}}
										onMouseOver={(e) => (e.target.style.color = "#B22234")}
										onMouseOut={(e) => (e.target.style.color = "#0052A5")}
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
									variant="primary"
									className="w-full text-center mt-2"
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
