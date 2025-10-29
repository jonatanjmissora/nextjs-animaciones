"use client"
import Image from "next/image"
export default function TimelineReveal() {
	return (
		<section className="w-screen sm:h-[200dvh] 2xl:h-screen flex flex-col gap-24 items-center bg-blue-900 p-20">
			<h2 className="text-4xl font-bold tracking-widest text-white w-full text-center">
				timeline reveal
			</h2>

			<div className="w-3/4 mx-auto flex flex-col gap-8 h-[800px] relative">
				<div className="w-full h-[150px] flex items-center justify-center gap-30 fadeUp">
					<div className="w-[400px]">
						<div className="ml-auto h-[150px] w-[200px] aspect-video relative overflow-hidden rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
							<Image
								className=""
								src="https://dummyimage.com/150x4:3/0f0/0f0"
								fill
								alt="foto1"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>
					<div className="w-[400px]">
						<p className="font-bold">2022</p>
						<p className="w-1/2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
						</p>
					</div>
				</div>

				<div className="w-full h-[150px] flex items-center justify-center gap-30 fadeUp">
					<div className="w-[400px] text-right">
						<p className="font-bold">2021</p>
						<p className="w-1/2 ml-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
						</p>
					</div>
					<div className="w-[400px]">
						<div className="mr-auto h-[150px] w-[200px] aspect-video relative overflow-hidden rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
							<Image
								className="mr-auto"
								src="https://dummyimage.com/4:3x150/0ff/0ff"
								width="300"
								height="150"
								alt="foto1"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>
				</div>

				<div className="w-full h-[150px] flex items-center justify-center gap-30 fadeUp">
					<div className="w-[400px]">
						<div className="ml-auto h-[150px] w-[200px] aspect-video relative overflow-hidden rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
							<Image
								className="ml-auto"
								src="https://dummyimage.com/4:3x150/fff/fff"
								width="300"
								height="150"
								alt="foto1"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>
					<div className="w-[400px]">
						<p className="font-bold">2020</p>
						<p className="w-1/2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
						</p>
					</div>
				</div>

				<div className="w-full h-[150px] flex items-center justify-center gap-30 fadeUp">
					<div className="w-[400px] text-right">
						<p className="font-bold">2019</p>
						<p className="w-1/2 ml-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
						</p>
					</div>
					<div className="w-[400px]">
						<div className="mr-auto h-[150px] w-[200px] aspect-video relative overflow-hidden rounded-lg shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
							<Image
								className="mr-auto"
								src="https://dummyimage.com/4:3x150/000/000"
								width="300"
								height="150"
								alt="foto1"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>
				</div>

				<div className="absolute top-0 bottom-0 left-[49.9%] bg-blue-500 w-[2px]"></div>
			</div>
		</section>
	)
}
