"use client"
import Image from "next/image"
import { useRef } from "react"

export default function ImageSelect2() {
	const mainImageRef2 = useRef<HTMLImageElement>(null)
	const imgArray = [
		"https://fastly.picsum.photos/id/91/800/800.jpg?hmac=QRUzJX9f5neDgqHRRp2WIB7jIRLVL9gFDzJ993hBwHk",
		"https://fastly.picsum.photos/id/195/800/800.jpg?hmac=Q_fARVnLRiomOVs3gQeWcZd7J_bYjpbZxLQJKY7AkqU",
		"https://fastly.picsum.photos/id/1015/800/800.jpg?hmac=sVQ48xj7Mwk9qWhaAQEM863_az4rr-UeOTiMG4WuUao",
		"https://fastly.picsum.photos/id/1020/800/800.jpg?hmac=BsIdkuGt3lsZvJa3vtG1jpc9Wm8A7O0bt3Fc9iZIEjQ",
		"https://fastly.picsum.photos/id/101/800/800.jpg?hmac=YV-51dCTNCdU4j4Z4drXwUx761d2mAo38rYFEXyjyro",
		"https://fastly.picsum.photos/id/515/800/800.jpg?hmac=OAW5og9RGrEnq-bYGLnMU3ifonfisMSdAPtEUEz_I_E",
		"https://fastly.picsum.photos/id/779/800/800.jpg?hmac=KsdEx9_Zc791jDxEXIMkc1Vx7tbNZCQohKZTo8SZOOI",
		"https://fastly.picsum.photos/id/556/800/800.jpg?hmac=E9iWo_ZqHckoh1NgKOEa9eCxN8D1JIK81XiL1udP6rM",
		"https://fastly.picsum.photos/id/964/800/800.jpg?hmac=lEtu2kCtzkAvQbj6XIM3BcPxF0jffB7dTlLUZ0apecU",
	]

	function setImageOnMain(image: HTMLImageElement) {
		mainImageRef2.current?.appendChild(image)
	}

	function returnImageToOriginalPlace(image: HTMLDivElement) {
		const itemId = image.getAttribute("data-id")
		const parentItem = document.getElementById(`${itemId}`)
		parentItem?.appendChild(image)
	}

	const handleSetActualImage = (e: React.MouseEvent<HTMLImageElement>) => {
		const imageIn = e.currentTarget

		if (!imageIn.parentElement?.classList.contains("img-cont")) return

		if (!document.startViewTransition) {
			setImageOnMain(imageIn)
			return
		}

		imageIn.style.viewTransitionName = "in-img"
		const imageOut = mainImageRef2.current?.childNodes[0] as HTMLDivElement
		if (!imageOut) return
		imageOut.style.viewTransitionName = "out-img"
		document
			.startViewTransition(() => {
				setImageOnMain(imageIn)
				returnImageToOriginalPlace(imageOut)
			})
			.finished.finally(() => {
				imageIn.style.viewTransitionName = "none"
				imageOut.style.viewTransitionName = "none"
			})
	}

	return (
		<section className="w-screen sm:h-dvh 2xl:h-[80dvh] flex flex-col justify-center gap-12 items-center bg-blue-900 p-20">
			<h2 className="text-4xl font-bold tracking-wider">Image select 2</h2>

			<article className="relative flex flex-col">
				<div
					ref={mainImageRef2}
					data-id="main-image2"
					className="relative h-[500px] w-[600px]"
				>
					<Image
						onClick={handleSetActualImage}
						src={imgArray[0]}
						alt={`photo-0`}
						data-id="id-0"
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
				<ul className="flex gap-2">
					{/** biome-ignore lint/correctness/useUniqueElementIds: <quiero usar el id asi> */}
					<li id="id-0" className="relative h-[50px] w-[60px] img-cont"></li>
					{imgArray.slice(1).map((img, index) => {
						const itemId = `id-${index + 1}`
						return (
							<li
								key={itemId}
								id={itemId}
								className="img-cont relative h-[50px] w-[60px]"
							>
								<Image
									onClick={handleSetActualImage}
									data-id={itemId}
									src={img}
									alt={`photo-${index}`}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</li>
						)
					})}
				</ul>
			</article>
		</section>
	)
}
