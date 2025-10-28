"use client"
import Image from "next/image"
import { useState } from "react"

export default function ImageSelect() {
	const [actualImage, setActualImage] = useState(0)
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

	return (
		<section className="w-screen sm:h-[150dvh] 2xl:h-dvh flex flex-col gap-12 items-center bg-blue-900 p-20">
			<h2 className="text-4xl font-bold tracking-wider">
				Image select: {actualImage}
			</h2>
			<article className="relative">
				{actualImage !== 0 && (
					<button
						type="button"
						className="absolute inset-0 z-10"
						onClick={() => setActualImage(0)}
					>
						<Image
							src={imgArray[actualImage]}
							alt="photo2"
							fill
							className="object-cover"
						/>
					</button>
				)}
				<ul className="grid grid-cols-3 gap-2">
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(1)}>
							<Image
								src={imgArray[1]}
								alt="photo1"
								fill
								className="object-cover"
							/>
						</button>
					</li>
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(2)}>
							<Image
								src={imgArray[2]}
								alt="photo1"
								fill
								className="object-cover"
							/>
						</button>
					</li>
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(3)}>
							<Image
								src={imgArray[3]}
								alt="photo2"
								fill
								className="object-cover"
							/>
						</button>
					</li>
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(4)}>
							<Image
								src={imgArray[4]}
								alt="photo1"
								fill
								className="object-cover"
							/>
						</button>
					</li>
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(5)}>
							<Image
								src={imgArray[5]}
								alt="photo2"
								fill
								className="object-cover"
							/>
						</button>
					</li>
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(6)}>
							<Image
								src={imgArray[6]}
								alt="photo1"
								fill
								className="object-cover"
							/>
						</button>
					</li>
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(7)}>
							<Image
								src={imgArray[7]}
								alt="photo2"
								fill
								className="object-cover"
							/>
						</button>
					</li>
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(8)}>
							<Image
								src={imgArray[8]}
								alt="photo1"
								fill
								className="object-cover"
							/>
						</button>
					</li>
					<li className="relative size-[150px]">
						<button onClick={() => setActualImage(9)}>
							<Image
								src={imgArray[9]}
								alt="photo2"
								fill
								className="object-cover"
							/>
						</button>
					</li>
				</ul>
			</article>
		</section>
	)
}
