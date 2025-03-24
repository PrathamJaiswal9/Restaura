import { CUSINES } from "../constants"



const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter
      lg:text-4xl">
        Our Expertise.
      </h2>
      <div className="container mx-auto px-4 ">
        {CUSINES.map((item,index)=> (
            <div key={index} className="flex items-center border-b-4 
            border-dotted border-neutral-700/40 py-2 m-2">
                <div className="flex-shrink-0 pr-8 text-2xl ">
                    {item.number}
                </div>
                <div className="w-1/3 flex-shrink-0">
                    <img className="h-auto rounded-3xl
                    cursor-pointer hover:scale-105 transition duration-500" 
                    src={item.image} alt={item.title} />
                </div>

                <div className="pl-8 ">
                    <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                        {item.title}
                    </h3>
                    <p className="mt-4 text-xl tracking-tighter">
                        {item.description}
                    </p>
                </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Expertise
