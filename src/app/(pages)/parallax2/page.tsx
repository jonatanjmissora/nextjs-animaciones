export default function Parallax2Page() {
	return (
		<section>
			<section className="parallax-1 h-dvh relative">
				<div className="absolute inset-0 flex flex-col gap-12 items-center justify-center bg-black/70">
					<h1 className="text-white text-6xl font-bold tracking-widest">
						Scroll Down
					</h1>
					<h2 className="text-white text-3xl font-bold tracking-widest">
						This is the subtitle
					</h2>
					<p className="text-white text-lg w-1/3">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Perspiciatis incidunt omnis vel vitae, eos beatae reprehenderit
						doloremque nisi deleniti? Quia adipisci earum, itaque vitae
						perferendis quo quidem ad id alias.
					</p>
					<button
						type="button"
						className="bg-blue-900 text-white px-6 py-3 text-xl font-bold tracking-widest rounded-lg"
					>
						Call to Action
					</button>
				</div>
			</section>

			<Content />

			<section className="parallax-2">
				<div className="py-[17%]  bg-black/50"></div>
			</section>
			<Content />

			<section className="parallax-3">
				<div className="py-[17%] bg-black/50"></div>
			</section>
			<Content />
		</section>
	)
}

const Content = () => {
	return (
		<div className="bg-blue-900 min-h-dvh p-20 py-40 flex flex-col gap-12 items-center justify-center">
			<h2 className="text-6xl font-bold tracking-widest">Parallax Efect</h2>
			<p className="text-white w-1/2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
				incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
				iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
				dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
				architecto nihil obcaecati ducimus, repudiandae eligendi praesentium
				unde tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti
				mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur
				quibusdam dolore qui molestiae ea ullam libero sequi! Atque eius
				exercitationem architecto nihil obcaecati ducimus, repudiandae eligendi
				praesentium unde tempora.
			</p>
			<p className="text-white w-1/2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
				incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
				iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
				dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
				architecto nihil obcaecati ducimus, repudiandae eligendi praesentium
				unde tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti
				mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur
				quibusdam dolore qui molestiae ea ullam libero sequi! Atque eius
				exercitationem architecto nihil obcaecati ducimus, repudiandae eligendi
				praesentium unde tempora.
			</p>
			<p className="text-white w-1/2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
				incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti mollitia
				iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur quibusdam
				dolore qui molestiae ea ullam libero sequi! Atque eius exercitationem
				architecto nihil obcaecati ducimus, repudiandae eligendi praesentium
				unde tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Aliquid incidunt ab suscipit, neque ad vel tenetur, quaerat corrupti
				mollitia iure a ipsam. Nihil, ad, odio ipsum quis cum neque pariatur
				quibusdam dolore qui molestiae ea ullam libero sequi! Atque eius
				exercitationem architecto nihil obcaecati ducimus, repudiandae eligendi
				praesentium unde tempora.
			</p>
		</div>
	)
}
