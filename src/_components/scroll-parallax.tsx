import Image from "next/image"

export default function ScrollParallax() {
	return (
		<section className="bg-blue-900 h-dvh overflow-y-auto overflow-x-hidden perspective-[10px]">
			<ContentSection src="https://fastly.picsum.photos/id/191/1500/1000.jpg?hmac=44cDRFArl9vbT-j5LRBRLEl1WCZPmjHeiL8D-381Hdk" />
			<ContentSection src="https://fastly.picsum.photos/id/182/1500/1000.jpg?hmac=BoYUh0m18i5ftcNK-B7LPtrsLZUegrYAFC0emRt-3lY" />
			<ContentSection src="https://fastly.picsum.photos/id/1051/1500/1000.jpg?hmac=9oQV96UWnYv6UzAghmeg25lkDwASxH_jdu2-Mlg3DVY" />
		</section>
	)
}

const ContentSection = ({ src }: { src: string }) => {
	return (
		<>
			<article className="relative flex justify-center items-center h-dvh -z-1 transform-3d border-4 border-cyan-400">
				<div className="absolute h-full w-full translate-z-[-10px] scale-200">
					<Image src={src} className="fit-cover" fill alt="Hero" />
				</div>
				<h2 className="text-black text-6xl font-bold tracking-widest absolute translate-z-[-5px] scale-150 px-6 py-3 bg-slate-100">
					Scroll Down Section
				</h2>
			</article>
			<article className="bg-slate-100 p-12 mx-20 text-black flex flex-col gap-12 min-h-[150dvh]">
				<h3 className="text-3xl font-bold tracking-widest">Parallax Efect</h3>
				<p>
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

				<p>
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

				<p>
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
