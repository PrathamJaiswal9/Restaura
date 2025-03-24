

const DishCard = ({project}) => {
  return (
    <div className="hover:scale-105 transition duration-500">
      <img className="rounded-3xl p-2 " 
      src={project.image} alt={project.title} />

      <div className="p-4 ">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
            {project.title}
        </h3>

        <p className="text-sm">
            {project.description}
        </p>
      </div>
    </div>
  )
}

export default DishCard
