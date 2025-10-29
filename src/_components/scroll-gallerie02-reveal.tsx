"use client"
import Image from "next/image"

export default function ScrollGallerie02Reveal() {
	const bgColors = ["000", "00f", "0f0", "0ff", "f00", "f0f", "ff0", "fff"]

	return (
		<section className="w-screen sm:h-[250dvh] 2xl:h-[150dvh] flex flex-col gap-8 items-center justify-center bg-blue-900 p-20">
			<h2 className="text-4xl font-bold tracking-widest text-white">
				Scroll Gallerie 02 Reveal sides
			</h2>
			<div className="flex w-3/4 gap-4">
				<article className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2 gap-4 w-1/2">
					{Array.from({ length: 8 }).map((_, index) => {
						const randomBg =
							bgColors[Math.floor(Math.random() * bgColors.length)]
						return (
							<div
								key={index}
								className={`gal02ImageReveal relative w-full h-[250px] rounded-lg shadow-[3px_3px_5px_0_rgba(0,0,0,0.5)] overflow-hidden`}
							>
								<Image
									className="object-cover"
									src={`https://dummyimage.com/3:4x250/${randomBg}/${randomBg}`}
									fill
									alt="foto1"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						)
					})}
				</article>
				<article className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2 gap-4 w-1/2">
					{Array.from({ length: 8 }).map((_, index) => {
						const randomBg =
							bgColors[Math.floor(Math.random() * bgColors.length)]
						return (
							<div
								key={index}
								className={`gal03ImageReveal relative w-full h-[250px] rounded-lg shadow-[3px_3px_5px_0_rgba(0,0,0,0.5)] overflow-hidden`}
							>
								<Image
									className="object-cover"
									src={`https://dummyimage.com/3:4x250/${randomBg}/${randomBg}`}
									fill
									alt="foto1"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						)
					})}
				</article>
			</div>
		</section>
	)
}
