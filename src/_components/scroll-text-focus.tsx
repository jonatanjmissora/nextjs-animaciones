"use client"
export default function ScrollTextFocus() {
	return (
		<footer className="w-screen sm:h-[150dvh] 2xl:h-screen flex flex-col items-center justify-center bg-blue-950 p-20">
			<div className="flex flex-col gap-5 text-6xl font-bold tracking-widest">
				<p className="focusText w-full text-center">Text on focus</p>
				<p className="focusText w-full text-center">the awesome</p>
				<p className="focusText w-full text-center">animation for</p>
				<p className="focusText w-full text-center">your website</p>
				<p className="focusText w-full text-center">We animate</p>
				<p className="focusText w-full text-center">your text</p>
				<p className="focusText w-full text-center">with ease</p>
				<p className="focusText w-full text-center">focus on it</p>
			</div>
		</footer>
	)
}
