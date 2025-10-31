"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
	const [scrolled, setScrolled] = useState<boolean>(false)

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
	return (
		<header
			className={`header fixed left-0 top-0 z-100 h-16 w-full px-[10dvw]  flex justify-center items-center ${scrolled ? "bg-blue-400/50 text-black" : "bg-blue-800"} duration-300 backdrop-blur-2xl`}
		>
			<nav className="flex gap-20">
				<Link href="/">Home</Link>
				<Link href="/parallax">Parallax</Link>
				<Link href="/multipage">Multipage</Link>
				<Link href="/">Admin</Link>
			</nav>
		</header>
	)
}
