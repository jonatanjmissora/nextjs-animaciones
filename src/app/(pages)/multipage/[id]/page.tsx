import Image from "next/image"
import Link from "next/link"

export default async function ElementPage({
	params,
}: {
	params: { id: string }
}) {
	const id = Number((await params).id)

	const imgArray = [
		"https://fastly.picsum.photos/id/91/800/800.jpg?hmac=QRUzJX9f5neDgqHRRp2WIB7jIRLVL9gFDzJ993hBwHk",
		"https://fastly.picsum.photos/id/195/800/800.jpg?hmac=Q_fARVnLRiomOVs3gQeWcZd7J_bYjpbZxLQJKY7AkqU",
		"https://fastly.picsum.photos/id/1015/800/800.jpg?hmac=sVQ48xj7Mwk9qWhaAQEM863_az4rr-UeOTiMG4WuUao",
		"https://fastly.picsum.photos/id/1020/800/800.jpg?hmac=BsIdkuGt3lsZvJa3vtG1jpc9Wm8A7O0bt3Fc9iZIEjQ",
		"https://fastly.picsum.photos/id/101/800/800.jpg?hmac=YV-51dCTNCdU4j4Z4drXwUx761d2mAo38rYFEXyjyro",
		"https://fastly.picsum.photos/id/515/800/800.jpg?hmac=OAW5og9RGrEnq-bYGLnMU3ifonfisMSdAPtEUEz_I_E",
		"https://fastly.picsum.photos/id/779/800/800.jpg?hmac=KsdEx9_Zc791jDxEXIMkc1Vx7tbNZCQohKZTo8SZOOI",
		"https://fastly.picsum.photos/id/556/800/800.jpg?hmac=E9iWo_ZqHckoh1NgKOEa9eCxN8D1JIK81XiL1udP6rM",
	]

	const img = imgArray[id]

	return (
		<section className="w-screen h-screen bg-blue-900 flex flex-col p-40 ">
			<Link
				href="/multipage"
				className="w-full text-2xl font-bold tracking-wider py-4 cursor-pointer hover:underline"
			>
				Volver
			</Link>
			<div className="flex gap-20">
				<div className="min-w-[500px] min-h-[500px] relative">
					<Image
						src={img}
						alt={`photo-${id}`}
						fill
						className="object-cover shadow-[3px_3px_5px_#00000050]"
						style={{
							viewTransitionName: `selected-img-${id}`,
						}}
					/>
				</div>
				<div className="flex flex-col gap-12 rounded-lg shadow-[3px_3px_5px_#00000050] bg-white p-20 text-black">
					<h3 className="text-2xl font-bold tracking-wider">Foto {id}</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit
						amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quod.
					</p>
				</div>
			</div>
		</section>
	)
}
