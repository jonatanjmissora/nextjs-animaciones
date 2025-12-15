import Image from "next/image"
import Link from "next/link"

export default function ElementsPage() {
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

	return (
		<section className="w-screen h-screen bg-blue-900 flex flex-col gap-12 items-center justify-center">
			<h2 className="text-6xl font-bold tracking-widest">Elements Page</h2>
			<ul className="grid grid-cols-4">
				<li className="p-10 w-[250px] h-[250px] relative">
					<Link href={`/multipage/0`} className="relative z-5">
						<Image
							src={imgArray[0]}
							alt={`photo-1`}
							width={250}
							height={250}
							className="object-cover shadow-[3px_3px_5px_#00000050] img-group-1"
						/>
					</Link>
					<Link
						href={`/multipage/1`}
						className="p-4 px-6 bg-white absolute z-1 -bottom-4 left-18 right-4 text-black flex justify-center items-center rounded-lg shadow-[3px_3px_5px_#00000050]"
					>
						<h3 className="text-2xl font-bold tracking-wider">Foto 1</h3>
					</Link>
				</li>

				<li className="p-10 w-[250px] h-[250px] relative">
					<Link href={`/multipage/1`} className="relative z-5">
						<Image
							src={imgArray[1]}
							alt={`photo-2`}
							width={250}
							height={250}
							className="object-cover shadow-[3px_3px_5px_#00000050] img-group-2"
						/>
					</Link>
					<Link
						href={`/multipage/2`}
						className="p-4 px-6 bg-white absolute z-1 -bottom-4 left-18 right-4 text-black flex justify-center items-center rounded-lg shadow-[3px_3px_5px_#00000050]"
					>
						<h3 className="text-2xl font-bold tracking-wider">Foto 2</h3>
					</Link>
				</li>
			</ul>
		</section>
	)
}
