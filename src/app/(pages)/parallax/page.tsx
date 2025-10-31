import Image from "next/image"

export default function ParallaxPage() {
	return (
		<section className="bg-blue-900 h-dvh overflow-y-auto overflow-x-hidden perspective-[3px]">
			<ContentSection src="https://fastly.picsum.photos/id/191/1500/1000.jpg?hmac=44cDRFArl9vbT-j5LRBRLEl1WCZPmjHeiL8D-381Hdk" />
			<ContentSection src="https://fastly.picsum.photos/id/182/1500/1000.jpg?hmac=BoYUh0m18i5ftcNK-B7LPtrsLZUegrYAFC0emRt-3lY" />
			<ContentSection src="https://fastly.picsum.photos/id/1051/1500/1000.jpg?hmac=9oQV96UWnYv6UzAghmeg25lkDwASxH_jdu2-Mlg3DVY" />
			<div className="w-screen h-dvh bg-blue-900"></div>
			<ContentSection2 src="https://fastly.picsum.photos/id/191/1500/1000.jpg?hmac=44cDRFArl9vbT-j5LRBRLEl1WCZPmjHeiL8D-381Hdk" />
			<ContentSection2 src="https://fastly.picsum.photos/id/182/1500/1000.jpg?hmac=BoYUh0m18i5ftcNK-B7LPtrsLZUegrYAFC0emRt-3lY" />
			<ContentSection2 src="https://fastly.picsum.photos/id/1051/1500/1000.jpg?hmac=9oQV96UWnYv6UzAghmeg25lkDwASxH_jdu2-Mlg3DVY" />
		</section>
	)
}

const ContentSection = ({ src }: { src: string }) => {
	return (
		<>
			<article className="relative flex justify-center items-center h-full -z-1 transform-3d">
				<div className="absolute h-screen w-screen translate-z-[-10px] scale-200">
					<Image src={src} className="fit-cover " fill alt="Hero" />
				</div>
				<h2 className="text-black text-6xl font-bold tracking-widest absolute translate-z-[-5px] scale-150 px-6 py-3 bg-slate-100">
					Scroll Down Section
				</h2>
			</article>
			<article className="bg-slate-100/95 p-20 px-40 text-black flex flex-col items-center gap-12 min-h-dvh">
				<h3 className="text-3xl font-bold tracking-widest">Parallax Efect</h3>
				<p className="w-1/2 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
					iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
					dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
					architecto nihil obcaecati ducimus, repudiandae eligendi peraesentium
					unde tempora. Lorem ipsum dolor sit amedt consectetur adipisicing
					elit. Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat
					corrupti mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque
					pariatur quibusdam dolore qui molestiae ea ullam libero sequi! Atque
					eius exercitationem architecto nihil obcaecati ducimus, repudiandae
					eligendi praesentium unde tempora.
				</p>

				<p className="w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
					iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
					dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
					architecto nihil obcaecati ducimus, repudiandae eligendi praesentium
					unde tempora. Lorem ipsum dolor sit amedt consectetur adipisicing
					elit. Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat
					corrupti mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque
					pariatur quibusdam dolore qui molestiae ea ullam libero sequi! Atque
					eius exercitationem architecto nihil obcaecati ducimus, repudiandae
					eligendi praesentium unde tempora.
				</p>

				<p className="w-1/2 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
					iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
					dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
					architecto nihil obcaecati ducimus, repudiandae eligendi praesentium
					unde tempora. Lorem ipsum dolor sit amedt consectetur adipisicing
					elit. Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat
					corrupti mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque
					pariatur quibusdam dolore qui molestiae ea ullam libero sequi! Atque
					eius exercitationem architecto nihil obcaecati ducimus, repudiandae
					eligendi praesentium unde tempora.
				</p>
			</article>
		</>
	)
}

const ContentSection2 = ({ src }: { src: string }) => {
	return (
		<>
			<article className="relative flex justify-center items-center h-full -z-1 transform-3d">
				<div className="absolute h-[400px] w-[300px] mx-auto translate-z-[-5px] scale-250">
					<Image src={src} className="object-cover" fill alt="Hero" />
				</div>
				<h2 className="text-black text-6xl font-bold tracking-widest absolute translate-z-[-5px] scale-150 px-6 py-3 bg-slate-100">
					Scroll Down Section
				</h2>
			</article>
			<article className="bg-slate-100/50 p-20 px-40 text-black flex flex-col items-center gap-12 min-h-dvh">
				<h3 className="text-3xl font-bold tracking-widest">Parallax Efect</h3>
				<p className="w-1/2 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
					iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
					dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
					architecto nihil obcaecati ducimus, repudiandae eligendi peraesentium
					unde tempora. Lorem ipsum dolor sit amedt consectetur adipisicing
					elit. Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat
					corrupti mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque
					pariatur quibusdam dolore qui molestiae ea ullam libero sequi! Atque
					eius exercitationem architecto nihil obcaecati ducimus, repudiandae
					eligendi praesentium unde tempora.
				</p>

				<p className="w-1/2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
					iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
					dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
					architecto nihil obcaecati ducimus, repudiandae eligendi praesentium
					unde tempora. Lorem ipsum dolor sit amedt consectetur adipisicing
					elit. Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat
					corrupti mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque
					pariatur quibusdam dolore qui molestiae ea ullam libero sequi! Atque
					eius exercitationem architecto nihil obcaecati ducimus, repudiandae
					eligendi praesentium unde tempora.
				</p>

				<p className="w-1/2 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
					incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
					iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
					dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
					architecto nihil obcaecati ducimus, repudiandae eligendi praesentium
					unde tempora. Lorem ipsum dolor sit amedt consectetur adipisicing
					elit. Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat
					corrupti mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque
					pariatur quibusdam dolore qui molestiae ea ullam libero sequi! Atque
					eius exercitationem architecto nihil obcaecati ducimus, repudiandae
					eligendi praesentium unde tempora.
				</p>
			</article>
		</>
	)
}
