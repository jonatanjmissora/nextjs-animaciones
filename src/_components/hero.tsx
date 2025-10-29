"use client"
import Image from "next/image"
export default function Hero() {
	return (
		<section className="w-screen h-screen flex flex-col gap-12 items-center justify-center bg-blue-900 p-20">
			<div className="reveal-scale h-[50dvh] w-3/4 relative overflow-hidden rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
				<Image
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className=""
					src="https://dummyimage.com/150x4:3/0ff/0ff"
					fill
					alt="foto1"
				/>
			</div>
			<div className="w-1/2 flex flex-col gap-4 relative">
				<h2 className="reveal-bottom title text-4xl font-bold tracking-widest text-white">
					This is the Hero title
				</h2>
				<p className="reveal-bottom content text-white text-xl max-w-3/4">
					This is the content. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quisquam, quod.
				</p>
				<button className="reveal-scale cta absolute -bottom-5 right-0 px-6 py-4 rounded-lg bg-white text-blue-900 font-bold tracking-widest shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
					CTA Button
				</button>
			</div>
		</section>
	)
}
