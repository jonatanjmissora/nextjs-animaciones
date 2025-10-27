"use client"
import Image from "next/image"
export default function ScrollTextAndImageReveal() {
	return (
		<section className="w-screen sm:h-[150dvh] 2xl:h-screen flex flex-col gap-8 items-center justify-center bg-blue-950 p-20">
			<div className="flex flex-col items-center justify-center gap-3">
				<h2 className="text-4xl font-bold tracking-widest text-white autoShowTitle">
					scroll text and image reveal
				</h2>
				<p className="text-white tracking-widest font-semibold text-xl autoShowSubtitle">
					AWESOME ANIMATION
				</p>
			</div>

			<div className="flex gap-2">
				<Image
					className="imageReveal"
					src="https://dummyimage.com/3:4x250/f00/f00"
					width="200"
					height="300"
					alt="foto1"
				/>
				<Image
					className="imageReveal"
					src="https://dummyimage.com/3:4x250/00f/00f"
					width="200"
					height="300"
					alt="foto1"
				/>
				<Image
					className="imageReveal"
					src="https://dummyimage.com/3:4x250/0ff/0ff"
					width="200"
					height="300"
					alt="foto1"
				/>
				<Image
					className="imageReveal"
					src="https://dummyimage.com/3:4x250/f0f/f0f"
					width="200"
					height="300"
					alt="foto1"
				/>
			</div>
		</section>
	)
}
