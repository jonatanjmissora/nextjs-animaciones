"use client"
import Image from "next/image"
import { useRef, useId } from "react"

export default function ImageSelect() {
	const id = useId()
	const mainImageRef = useRef<HTMLButtonElement>(null)
	const imgArray = [
		"",
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
		image.setAttribute("data-selected", "true")
		mainImageRef.current?.appendChild(image)
	}

	function returnImageToOriginalPlace(image: HTMLImageElement) {
		image.setAttribute("data-selected", "false")
		const itemId = image.getAttribute("data-id")
		const parentItem = document.getElementById(`${itemId}`)
		parentItem?.appendChild(image)
	}

	const handleSetActualImage = (e: React.MouseEvent<HTMLImageElement>) => {
		const image = e.currentTarget

		// si la imagen esta seleccionada, la devuelvo a su lugar
		if (image.getAttribute("data-selected") === "true") {
			if (!document.startViewTransition) {
				returnImageToOriginalPlace(image)
				return
			}
			image.style.viewTransitionName = "selected-img"
			document
				.startViewTransition(() => {
					returnImageToOriginalPlace(image)
				})
				.finished.finally(() => {
					image.style.viewTransitionName = "none"
				})
		}

		// si la imagen no esta seleccionada, la pongo en la main image
		else {
			if (!document.startViewTransition) {
				setImageOnMain(image)
				return
			}
			image.style.viewTransitionName = "selected-img"
			document
				.startViewTransition(() => {
					setImageOnMain(image)
				})
				.finished.finally(() => {
					image.style.viewTransitionName = "none"
				})
		}
	}

	return (
		<section className="w-screen sm:h-dvh 2xl:h-[80dvh] flex flex-col gap-12 items-center bg-blue-900 p-20">
			<h2 className="text-4xl font-bold tracking-wider">Image select</h2>

			<article className="relative">
				<ul className="grid grid-cols-3 gap-2">
					{imgArray.map((img, index) => {
						if (!img) return null // Skip empty first item
						const itemId = `${id}-${index}`
						return (
							<li key={itemId} id={itemId} className="relative size-[150px]">
								<Image
									data-id={itemId}
									data-selected={false}
									onClick={handleSetActualImage}
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
				<button
					data-id="main-image"
					ref={mainImageRef}
					type="button"
					className="absolute inset-0"
				></button>
			</article>
		</section>
	)
}
