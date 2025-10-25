import Footer from "@/_components/footer"
import Modal from "@/_components/modal"
import ScrollTextAndImageReveal from "@/_components/scroll-text-and-image-reveal"
import ScrollTextFocus from "@/_components/scroll-text-focus"
import TimelineReveal from "@/_components/timeline-reveal"
import ToggleContent from "@/_components/toggle-content"

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="">
				<Modal />
				<ToggleContent />
				<ScrollTextAndImageReveal />
				<TimelineReveal />
				<ScrollTextFocus />
				<Footer />
			</main>
		</div>
	)
}
