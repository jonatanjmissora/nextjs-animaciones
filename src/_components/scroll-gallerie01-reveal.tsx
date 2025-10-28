"use client"
import Image from "next/image"
import { useState } from "react"

export default function ScrollGallerie01Reveal() {
	const [animationType, setAnimationType] = useState("bottom")
	const bgColors = ["000", "00f", "0f0", "0ff", "f00", "f0f", "ff0", "fff"]

	return (
		<section className="w-screen sm:h-[250dvh] 2xl:h-[150dvh] flex flex-col gap-8 items-center justify-center bg-blue-950 p-20">
			<div className="flex gap-4">
				<button
					className={animationType === "bottom" ? "underline" : ""}
					onClick={() => setAnimationType("bottom")}
				>
					bottom
				</button>
				<button
					className={animationType === "scale" ? "underline" : ""}
					onClick={() => setAnimationType("scale")}
				>
					scale
				</button>
			</div>
			<h2 className="text-4xl font-bold tracking-widest text-white">
				Scroll Gallerie 01 Reveal bottom/scale
			</h2>
			<article className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-3/4">
				{Array.from({ length: 16 }).map((_, index) => {
					const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)]
					return (
						<div
							key={index}
							className={`gal01ImageReveal ${animationType} relative w-full h-[250px] rounded-lg shadow-[3px_3px_5px_0_rgba(0,0,0,0.5)] overflow-hidden`}
						>
							<Image
								className="object-cover"
								src={`https://dummyimage.com/3:4x250/${randomBg}/${randomBg}`}
								fill
								alt="foto1"
							/>
						</div>
					)
				})}
			</article>
		</section>
	)
}
