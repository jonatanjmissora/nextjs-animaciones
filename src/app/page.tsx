import Modal from "@/_components/modal"
import ToggleContent from "@/_components/toggle-content"

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="">
				<Modal />
				<ToggleContent />
			</main>
		</div>
	)
}
