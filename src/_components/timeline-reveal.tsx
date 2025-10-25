"use client"
export default function TimelineReveal() {
  return (
    <section className="w-screen h-screen flex flex-col gap-24 items-center bg-blue-900 p-20">
            <h2 className="text-4xl font-bold tracking-widest text-white w-full text-center">timeline reveal</h2>

            <div className="w-3/4 mx-auto flex flex-col gap-8 h-[800px] relative">

                <div className="w-full h-[150px] flex items-center justify-center gap-30 fadeUp">
                    <div className="w-[400px]">
                        <img className="ml-auto" src="https://picsum.photos/300/150" width="300" height="150" alt="foto1" />
                    </div>
                    <div className="w-[400px]">
                        <p className="font-bold">2022</p>
                        <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                </div>

                <div className="w-full h-[150px] flex items-center justify-center gap-30 fadeUp">
                    <div className="w-[400px] text-right">
                        <p className="font-bold">2021</p>
                        <p className="w-1/2 ml-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    <div className="w-[400px]">
                        <img className="mr-auto" src="https://picsum.photos/300/151" width="300" height="150" alt="foto1" />
                    </div>
                </div>

                <div className="w-full h-[150px] flex items-center justify-center gap-30 fadeUp">
                    <div className="w-[400px]">
                        <img className="ml-auto" src="https://picsum.photos/300/152" width="300" height="150" alt="foto1" />
                    </div>
                    <div className="w-[400px]">
                        <p className="font-bold">2020</p>
                        <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                </div>

                <div className="w-full h-[150px] flex items-center justify-center gap-30 fadeUp">
                    <div className="w-[400px] text-right">
                        <p className="font-bold">2019</p>
                        <p className="w-1/2 ml-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    <div className="w-[400px]">
                        <img className="mr-auto" src="https://picsum.photos/300/153" width="300" height="150" alt="foto1" />
                    </div>
                </div>

                <div className="absolute top-0 bottom-0 left-[49.9%] bg-blue-500 w-[2px]">

                </div>

            </div>
    </section>
  )
}