"use client"
import { useState } from "react"

export default function ToggleContent() {

    const [content, setContent] = useState("content1")

    const handleContent = (content: string) => {
        setContent(content)
        document.getElementById("content1")?.classList.remove("show")
        document.getElementById("content2")?.classList.remove("show")
        document.getElementById(content)?.classList.add("show")
    }

	return (
		<section className="w-screen h-screen flex flex-col items-center bg-blue-900 p-20">
			<h2 className="text-2xl font-semibold tracking-widest underline">ToggleContent</h2>
            <div className="flex gap-5 my-3">

            <button type="button" className={`text-semibold tracking-tighter p-3 rounded-lg shadow cursor-pointer ${content === "content1" && "bg-blue-600"} duration-1000`} onClick={() => handleContent("content1")}>Content 1</button>
            <button type="button" className={`text-semibold tracking-tighter p-3 rounded-lg shadow cursor-pointer ${content === "content2" && "bg-blue-600"} duration-1000`} onClick={() => handleContent("content2")}>Content 2</button>
            </div>
            <div className="w-[500px] h-[30dvh] relative overflow-hidden">
                <span id="content1" className="show absolute top-0 left-0"><b className="underline">Content 1 :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae est non, officia magni mollitia ullam temporibus repudiandae explicabo qui neque ab id quae, maiores unde, obcaecati architecto ad perspiciatis.</span>
                <span id="content2" className="absolute top-0 right-0"><b className="underline">Content 2 :</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae est non, officia magni mollitia ullam temporibus repudiandae explicabo qui neque ab id quae, maiores unde, obcaecati architecto ad perspiciatis.</span>
            </div>

            <AnotherToggle />
		</section>
	)
}

const AnotherToggle = () => {
    const [content2, setContent2] = useState("content21")

    const handleContent = (content: string) => {
        setContent2(content)
        document.getElementById("content21")?.classList.remove("show")
        document.getElementById("content22")?.classList.remove("show")
        document.getElementById(content)?.classList.add("show")
    }
 return (
    <>
    <div className="flex gap-5 my-3">

            <button type="button" className={`text-semibold tracking-tighter p-3 rounded-lg shadow cursor-pointer ${content2 === "content21" && "bg-blue-600"} duration-1000`} onClick={() => handleContent("content21")}>Content 1</button>
            <button type="button" className={`text-semibold tracking-tighter p-3 rounded-lg shadow cursor-pointer ${content2 === "content22" && "bg-blue-600"} duration-1000`} onClick={() => handleContent("content22")}>Content 2</button>
            </div>
            <div className="w-[500px] relative">
                <span id="content21" className="show absolute top-0 left-0  p-4 bg-slate-300 rounded-lg text-black"><b className="underline">Content 1 :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae est non, officia magni mollitia ullam temporibus repudiandae explicabo qui neque ab id quae, maiores unde, obcaecati architecto ad perspiciatis.</span>
                <span id="content22" className="absolute top-0 right-0 p-4 bg-slate-300 rounded-lg text-black"><b className="underline">Content 2 :</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse beatae est non, officia magni mollitia ullam temporibus repudiandae explicabo qui neque ab id quae, maiores unde, obcaecati architecto ad perspiciatis.</span>
            </div>
    </>
    
 )   
}