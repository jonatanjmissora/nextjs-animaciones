"use client"
import Image from "next/image"
import { useRef, useState } from "react"

export default function ImageSelect() {
	const [actualImage, setActualImage] = useState(0)
	const mainImageRef = useRef<HTMLButtonElement>(null)
	const imgArray = [
		"",
		"https://fastly.picsum.photos/id/63/180/180.jpg?hmac=gMVm9tbcE_CF64dELmXn8Zs5PtTJy2rG54bDnwC0yco",
		"https://fastly.picsum.photos/id/1016/200/200.jpg?hmac=VXVyuNaCgLl1UAdVez4gIo7AzMowZxMZVlIKlHMjgBw",
		"https://fastly.picsum.photos/id/325/250/250.jpg?hmac=nWrSpo0-fjBtyj2U3KJN8_m9ihKSUJGMwiEPIrPEu4I",
		"https://fastly.picsum.photos/id/155/190/190.jpg?hmac=qP2U4iARaf8_3cpFX_C-WMMxRt7Yk_3jszA6dsXNpfY",
		"https://fastly.picsum.photos/id/164/200/200.jpg?hmac=UA4QhIt441pdFJ6Uam2yCxzda_KjWgQgy8fYs_-NFEM",
		"https://fastly.picsum.photos/id/1022/250/250.jpg?hmac=8IZcW4PJDJlFTAcZkpGyzM8F6SbEhnAE4-dPwiwriJY",
		"https://fastly.picsum.photos/id/898/200/200.jpg?hmac=OJ_q58cXkhJJW-v5_I8OBbmtuEPORKBZ5hXG9PnO4QM",
		"https://fastly.picsum.photos/id/206/200/200.jpg?hmac=4sOfaJaxYl_SjIfzFMVrIqIi3bdvwGke2r0MBg7Q1i8",
		"https://fastly.picsum.photos/id/1013/200/200.jpg?hmac=mW7QsQSZWgWOm8DAQ2zj3vcwbLk6w_AkeUOvEx7zI24",
	]

	const handleSetActualImage = (e: React.MouseEvent<HTMLImageElement>) => {
		const image = e.currentTarget

		document.startViewTransition(() => {
			mainImageRef.current?.appendChild(image)
		})
	}

	const handleClearActualImage = (e: React.MouseEvent<HTMLButtonElement>) => {
		const itemId = e.currentTarget.getAttribute("data-id")
		const parentItem = document.getElementById(`${itemId}`)
		console.log(itemId, parentItem)

		document.startViewTransition(() => {
			parentItem?.appendChild(e.currentTarget)
		})
	}

	return (
		<section className="w-screen sm:h-[150dvh] 2xl:h-dvh flex flex-col gap-12 items-center bg-blue-900 p-20">
			<h2 className="text-4xl font-bold tracking-wider">
				Image select: {actualImage}
			</h2>

			<article className="relative">
				<button
					ref={mainImageRef}
					type="button"
					className="border min-w-[150px] min-h-[150px] relative"
					onClick={handleClearActualImage}
				></button>

				<ul className="grid grid-cols-3 gap-2">
					<li className="relative size-[150px]" id="img-1">
						<Image
							data-id="img-1"
							onClick={handleSetActualImage}
							src={imgArray[1]}
							alt="photo1"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-1" }}
						/>
					</li>
					<li className="relative size-[150px]" id="img-2">
						<Image
							onClick={handleSetActualImage}
							data-id="img-2"
							src={imgArray[2]}
							alt="photo1"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-2" }}
						/>
					</li>
					<li className="relative size-[150px]" id="img-3">
						<Image
							onClick={handleSetActualImage}
							data-id="img-3"
							src={imgArray[3]}
							alt="photo2"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-3" }}
						/>
					</li>
					<li className="relative size-[150px]" id="img-4">
						<Image
							onClick={handleSetActualImage}
							data-id="img-4"
							src={imgArray[4]}
							alt="photo1"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-4" }}
						/>
					</li>
					<li className="relative size-[150px]" id="img-5">
						<Image
							onClick={handleSetActualImage}
							data-id="img-5"
							src={imgArray[5]}
							alt="photo2"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-5" }}
						/>
					</li>
					<li className="relative size-[150px]" id="img-6">
						<Image
							onClick={handleSetActualImage}
							data-id="img-6"
							src={imgArray[6]}
							alt="photo1"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-6" }}
						/>
					</li>
					<li className="relative size-[150px]" id="img-7">
						<Image
							onClick={handleSetActualImage}
							data-id="img-7"
							src={imgArray[7]}
							alt="photo2"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-7" }}
						/>
					</li>
					<li className="relative size-[150px]" id="img-8">
						<Image
							onClick={handleSetActualImage}
							data-id="img-8"
							src={imgArray[8]}
							alt="photo1"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-8" }}
						/>
					</li>
					<li className="relative size-[150px]" id="img-9">
						<Image
							onClick={handleSetActualImage}
							data-id="img-9"
							src={imgArray[9]}
							alt="photo2"
							fill
							className="object-cover"
							style={{ viewTransitionName: "image-9" }}
						/>
					</li>
				</ul>
			</article>
		</section>
	)
}
