"use client"
export default function ScrollTextAndImageReveal() {
  return (
    <section className="w-screen h-screen flex flex-col gap-8 items-center justify-center bg-blue-950 p-20">
    
    <div className="flex flex-col items-center justify-center gap-3">

    <h2 className="text-4xl font-bold tracking-widest text-white autoShowTitle">
        scroll text and image reveal
    </h2>
    <p className="text-white tracking-widest font-semibold text-xl autoShowSubtitle">
        AWESOME ANIMATION
    </p>
    </div>

    <div className="flex gap-2">
        
        <img className="imageReveal" src="https://picsum.photos/id/13/200/300" alt="foto1" />
        <img className="imageReveal" src="https://picsum.photos/id/14/200/300" alt="foto1" />
        <img className="imageReveal" src="https://picsum.photos/id/15/200/300" alt="foto1" />
        <img className="imageReveal" src="https://picsum.photos/id/16/200/300" alt="foto1" />
    </div>
    
    
    </section>
  )
}