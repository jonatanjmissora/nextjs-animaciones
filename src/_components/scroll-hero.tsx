import Image from "next/image"

export default function ScrollHero() {
	return (
		<section className="w-screen h-[250dvh] bg-slate-800 relative z-0 pt-[400px] flex justify-center">
			<div className="sticky top-[40dvh] left-0 w-[450px] h-max flex flex-col gap-12 items-center justify-center z-2 text-[#222] ">
				<span className="text-7xl font-bold tracking-wider">HERO TITLE</span>
				<span className="text-2xl font-bold tracking-wider">HERO SUBTITLE</span>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis
					voluptate necessitatibus atque ut quasi? Voluptate saepe tempore error
					accusantium sed sit reprehenderit, libero, placeat fuga illum harum?
					Dolorem, laudantium.
				</p>
			</div>

			<div className="w-screen h-dvh absolute top-0 left-0 z-1 flex items-center justify-center hero-img">
				<Image
					src="https://fastly.picsum.photos/id/732/1500/1000.jpg?hmac=il2Nb22akQKEkyT3JYNe0u0gSW3AV4_8IgW4SYjGUoU"
					alt="Hero"
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>

			<div className="absolute top-[100dvh] left-0 w-screen h-[150dvh] z-10 p-20 flex flex-col gap-12 bg-slate-800">
				<h2 className="text-4xl font-semibold tracking-wider">
					THE AWESOME TITLE
				</h2>
				<p className="text-xl font-semibold tracking-wider w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis
					voluptate necessitatibus atque ut quasi? Voluptate saepe tempore error
					accusantium sed sit reprehenderit, libero, placeat fuga illum harum?
					Dolorem, laudantium.
				</p>
				<p className="text-xl font-semibold tracking-wider w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis
					voluptate necessitatibus atque ut quasi? Voluptate saepe tempore error
					accusantium sed sit reprehenderit, libero, placeat fuga illum harum?
					Dolorem, laudantium.
				</p>
				<p className="text-xl font-semibold tracking-wider w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis
					voluptate necessitatibus atque ut quasi? Voluptate saepe tempore error
					accusantium sed sit reprehenderit, libero, placeat fuga illum harum?
					Dolorem, laudantium.
				</p>
				<p className="text-xl font-semibold tracking-wider w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis
					voluptate necessitatibus atque ut quasi? Voluptate saepe tempore error
					accusantium sed sit reprehenderit, libero, placeat fuga illum harum?
					Dolorem, laudantium.
				</p>
				<p className="text-xl font-semibold tracking-wider w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis
					voluptate necessitatibus atque ut quasi? Voluptate saepe tempore error
					accusantium sed sit reprehenderit, libero, placeat fuga illum harum?
					Dolorem, laudantium.
				</p>
				<p className="text-xl font-semibold tracking-wider w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis
					voluptate necessitatibus atque ut quasi? Voluptate saepe tempore error
					accusantium sed sit reprehenderit, libero, placeat fuga illum harum?
					Dolorem, laudantium.
				</p>
			</div>
		</section>
	)
}
