import { SecondBannerInterface } from "@/types"


export const SecondBannerComponents = ({title,description,image}:SecondBannerInterface) => {
  return (
    <div className="flex xs:gap-4 gap-2 ">
        <div className="bg-[#4D2C5E] min-w-[5rem] md:p-3 p-2 flex max-w-[6rem] max-h-[6rem] justify-center items-center rounded-xl ">
            <img src={`./Svg/Direct/${image}`} className='w-[80%]' alt="" />
        </div>
        <div>
            <h4 className="text-[#050C26] sm:text-[30px] xs:text-[20px] text-[15px] font-medium">{title}</h4>
            <p className="text-[#8A8A8A] sm:text-[22px] xs:text-[15px] text-[10px]">{description}</p>
        </div>
    </div>
  )
}
