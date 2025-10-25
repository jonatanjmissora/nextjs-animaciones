"use client"

import { useRef } from "react"

export default function Modal() {
	const modalRef = useRef<HTMLDialogElement>(null)
	const modal2Ref = useRef<HTMLDialogElement>(null)

	const closeModal = () => {
		modalRef.current?.close()
	}
	const closeModal2 = () => {
		modal2Ref.current?.close()
	}

	const openModal = () => {
		modalRef.current?.showModal()
	}
	const openModal2 = () => {
		modal2Ref.current?.showModal()
	}

	return (
		<section className="bg-blue-950 w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
			<dialog
				id="modal"
				ref={modalRef}
				className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 shadow-xl p-4 rounded-lg w-1/2 h-1/2"
			>
				<div className="w-full h-full flex flex-col items-center justify-center gap-8">
					<h2>Este es un modal animado</h2>
					<button
						className="p-4 font-semibold tracking-wider bg-blue-500 rounded-lg"
						onClick={closeModal}
					>
						Cerrar
					</button>
				</div>
			</dialog>
			
			<dialog
				id="modal2"
				ref={modal2Ref}
				className="fixed top-1/2 left-1/2 bg-slate-300 shadow-xl p-4 rounded-lg w-1/2 h-1/2"
			>
				<div className="w-full h-full flex flex-col items-center justify-center gap-8">
					<h2>Este es un modal animado</h2>
					<button
						className="p-4 font-semibold tracking-wider bg-blue-500 rounded-lg"
						onClick={closeModal2}
					>
						Cerrar
					</button>
				</div>
			</dialog>
			<p className="w-3/4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
				mollitia exercitationem iure excepturi, nesciunt ullam id quisquam
				perspiciatis, est quae officia blanditiis, natus corrupti aspernatur
				sequi at rem enim earum deleniti harum? Veritatis exercitationem
				pariatur officia beatae quis. Suscipit sit necessitatibus quisquam.
				Voluptatibus repellendus quod ab magnam ipsum culpa voluptatum
				necessitatibus deserunt earum fuga tempora quos maiores dicta, aut
				ducimus asperiores consequuntur eum dolores error sit. Dolorum repellat
				voluptates voluptatibus, saepe quae optio molestias exercitationem
				tempora cupiditate beatae nobis iure mollitia debitis consectetur? Eos
				ullam tenetur autem! Nemo explicabo numquam error modi architecto!
				Cumque veritatis voluptatem unde numquam debitis a!
			</p>
			<div className="flex gap-4">

			<button
				className="p-4 font-semibold tracking-wider bg-blue-500 rounded-lg"
				onClick={openModal}
				>
				Open Modal
			</button>
			<button
				className="p-4 font-semibold tracking-wider bg-blue-500 rounded-lg"
				onClick={openModal2}
			>
				Open Modal 2
			</button>
				</div>
		</section>
	)
}
