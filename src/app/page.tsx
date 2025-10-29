import Footer from "@/_components/footer"
import Modal from "@/_components/modal"
import ScrollTextAndImageReveal from "@/_components/scroll-text-and-image-reveal"
import ScrollTextFocus from "@/_components/scroll-text-focus"
import TimelineReveal from "@/_components/timeline-reveal"
import ToggleContent from "@/_components/toggle-content"
import Hero from "@/_components/hero"
import ScrollGallery01Reveal from "@/_components/scroll-gallerie01-reveal"
import ScrollGallerie02Reveal from "@/_components/scroll-gallerie02-reveal"
import CardAndDescription from "@/_components/scroll-card-and-description"
import ImageSelect from "@/_components/image-select"
import ImageSelect2 from "@/_components/image-select2"
import ScrollHero from "@/_components/scroll-hero"

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="">
				<Hero />
				<Modal />
				<ToggleContent />
				<ScrollTextAndImageReveal />
				<TimelineReveal />
				<ScrollGallery01Reveal />
				<ScrollGallerie02Reveal />
				<CardAndDescription />
				<ImageSelect />
				<ImageSelect2 />
				<ScrollTextFocus />
				<ScrollHero />
				<Footer />
			</main>
		</div>
	)
}
