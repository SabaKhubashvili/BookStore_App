import { ReviewInterface } from "@/types"

export const Review = ({description,name,type,image}:ReviewInterface) => {
  return (

    <div className="bg-white py-4 px-8 sm:max-w-[25rem] flex flex-col justify-between  shadow-Courses">
      <p className="text-[#ACACAC]">
        {description}
      </p>
      <div className="flex items-center gap-4 mt-8 ">
        <div className="max-w-[3rem]">
            <img src={`./Images/Profiles/${image}`} alt="" />
        </div>
        <div className="flex justify-center flex-col">
          <h6>
            {name}
          </h6>
          <p>
            {type}
          </p>
        </div>
      </div>
    </div>  
  )
}
