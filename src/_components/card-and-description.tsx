import Image from "next/image"

export default function CardAndDescription() {
	return (
		<section className="w-screen sm:h-[250dvh] 2xl:h-[150dvh] flex flex-col gap-8 items-center justify-center bg-blue-950 p-20">
			<h2 className="text-4xl font-bold tracking-wider">Card & description</h2>
			<div className="flex items-center gap-20 w-3/4 h-[50dvh]">
				<div className="w-1/2 h-full flex items-center justify-end">
					<div
						className={`element-reveal left relative w-3/4 h-1/2 rounded-lg shadow-[3px_3px_5px_0_rgba(0,0,0,0.5)] overflow-hidden`}
					>
						<Image
							className="object-cover"
							src={`https://dummyimage.com/3:4x250/f0f/f0f`}
							fill
							alt="foto1"
						/>
					</div>
				</div>
				<div className="element-reveal right w-1/2 h-full flex flex-col gap-2 items-center justify-center">
					<h3 className="text-2xl font-bold tracking-wider">
						Titulo de la Imagen 1
					</h3>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quod. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Earum commodi porro fuga. Omnis dolores aliquid est ratione
						provident non, a incidunt, deserunt harum labore placeat dolore, nam
						ipsum repudiandae voluptate?
					</p>
				</div>
			</div>

			<div className="flex items-center gap-20 w-3/4 h-[50dvh]">
				<div className="element-reveal left w-1/2 h-full flex flex-col gap-2 items-center justify-center">
					<h3 className="text-2xl font-bold tracking-wider">
						Titulo de la Imagen 1
					</h3>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quod. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Earum commodi porro fuga. Omnis dolores aliquid est ratione
						provident non, a incidunt, deserunt harum labore placeat dolore, nam
						ipsum repudiandae voluptate?
					</p>
				</div>
				<div className="element-reveal right w-1/2 h-full flex items-center justify-start">
					<div
						className={`relative w-3/4 h-1/2 rounded-lg shadow-[3px_3px_5px_0_rgba(0,0,0,0.5)] overflow-hidden`}
					>
						<Image
							className="object-cover"
							src={`https://dummyimage.com/3:4x250/f0f/f0f`}
							fill
							alt="foto1"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
