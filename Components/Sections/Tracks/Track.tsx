import { Instagram, LinkedinSvg } from "@/public"
import { TracksInterface } from "@/types"

export const Track = ({image,name,type,description,proffesion}:TracksInterface) => {
  return (
    <div className="p-4 bg-white rounded-md md:max-w-[32rem] w-[32rem]">
        <div className="md:max-w-[32rem">
          <img src={`./Images/Tracks/${image}`} className='w-full rounded-xl' alt="" />
        </div>
        <div className="mt-4">
          <h6 className="font-normal text-[20px] leading-[30px]">
            {name}
          </h6>
          <p className="text-[#868686]">
            {type}
          </p>

          <p className="text-[#ACACAC]">
            {description}
          </p>

          <div className="mt-3 flex justify-between">
              <p className="text-[#FF7426]">
                {proffesion}
              </p>
              <div className="flex items-center gap-2">
                  <div className="w-10 cursor-pointer">
                   <Instagram />                  
                  </div>
                  <div className="w-9 cursor-pointer">
                    <LinkedinSvg />
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}
