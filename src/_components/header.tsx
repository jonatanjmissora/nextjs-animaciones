"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

const linksData = [
	{ href: "/", label: "Home" },
	{ href: "/parallax", label: "Parallax" },
	{ href: "/parallax2", label: "Parallax2" },
	{ href: "/multipage", label: "Multipage" },
	{ href: "/admin", label: "Admin" },
]

export default function Header() {
	const [scrolled, setScrolled] = useState<boolean>(false)
	const [activeLink, setActiveLink] = useState<string>("/")

	useEffect(() => {
		if (window.scrollY) setScrolled(true)

		const handleScrolled = () => {
			if (window.scrollY > 100) {
				setScrolled(true)
			} else setScrolled(false)
		}

		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	}, [])

	const handleActiveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const link = e.currentTarget
		const links = document.querySelectorAll(".link")
		links.forEach(link => link.classList.remove("active"))
		const href = link.getAttribute("href") || "/"
		if (!document.startViewTransition) return
		setActiveLink(href)
		document.startViewTransition(() => {
			link.classList.add("active")
		})
	}

	return (
		<header
			className={`header fixed left-0 top-0 z-100 h-16 w-full px-[10dvw]  flex justify-center items-center ${scrolled ? "bg-blue-400/50 text-black" : "bg-blue-800"} duration-300 backdrop-blur-2xl`}
		>
			<nav className="flex gap-20">
				{linksData.map(link => (
					<Link
						key={link.href}
						href={link.href}
						data-href={link.href}
						onClick={handleActiveLink}
						className="link relative py-1 px-3 rounded-lg"
					>
						{link.label}
					</Link>
				))}
			</nav>
		</header>
	)
}
