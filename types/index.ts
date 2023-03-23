


export interface SubBannerComponents{
    title:string
    description:string
    image:string
}

export interface CourseData{
    image:string
    type:string
    title:string
    price:number
    CourseInfo:{
        time:string,
        courses:number,
        sales:number
    },
    Stars:boolean[]
}


export interface SecondBannerInterface{
    title:string,
    description:string,
    image:string
}

export interface ReviewInterface{
    description:string
    name:string
    type:string
    image:string
}
export interface TracksInterface{
    image:string,
    name:string,
    type:string,
    description:string,
    proffesion:string
}