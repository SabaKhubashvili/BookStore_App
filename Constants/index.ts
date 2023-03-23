import { CourseData, ReviewInterface, SecondBannerInterface, SubBannerComponents, TracksInterface } from "@/types"

export const SubBannerComponentsData: SubBannerComponents[] = [
    {
        title:'Learn The Latest Skills',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
        image:'./Images/BannerComponents/Component-1.webp'
    },{
        title:'Get Ready For a Career',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
        image:'./Images/BannerComponents/Component-2.webp'
    },
    {
        title:'Earn a Certificate',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.',
        image:'./Images/BannerComponents/Component-3.webp'
    }
]

export const CoursesData: CourseData[] = [
   {
    image:'Course-1.webp',
    type:'UI/UX Design',
    title:'UI/UX Design for Beginners',
    price:98,
    CourseInfo:{
        time:'22hr 30min',
        courses:34,
        sales:250
    },
    Stars:[
        true,true,true,true,false
    ]
   },
   {
    image:'Course-2.webp',
    type:'Web Development',
    title:'Front End Course for Beginners',
    price:120,
    CourseInfo:{
        time:'30hr 24min',
        courses:13,
        sales:342
    },
    Stars:[
        true,true,true,true,true
    ]
   },
   {
    image:'Course-3.webp',
    type:'Web Development',
    title:'Back End Course For begginers',
    price:250,
    CourseInfo:{
        time:'47hr 54min',
        courses:14,
        sales:232
    },
    Stars:[
        true,true,true,false,false
    ]
   },
]

export const SecondBannerData: SecondBannerInterface[] = [
    {
        title:'Easily Accessible',
        description:'Learning Will fell Very Comfortable With Courslab.',
        image:'Hearts.svg'
    },
    {
        title:'Fun learning experience',
        description:'Learning Will fell Very Comfortable With Courslab.',
        image:'Jigsaw.svg'
    }
]

export const ReviewsData: ReviewInterface[] = [
    {
        description:`“Teachings of the great explore of truth, 
        the master-builder of human happiness. 
        no one rejects,dislikes, or avoids pleasure 
        itself, pleasure itself”`,
        name:'Finlay Kirk',
        type:'Web Developper',
        image:'img1.webp'
    },
    {
        description:`“Complete account of the system and
        expound the actual Contrary to popular
        belief, Lorem Ipsum is not simply 
        random text. It has roots”  `,
        name:'Dannette P. Cervantes',
        type:'Web Designer',
        image:'img2.webp'
    },
    {
        description:`“There are many variations of passages
        of Lorem Ipsum available, but the majority
        have suffered alteration in some form,
        by injected humour”`,
        name:'Clara R. Altman',
        type:'UI&UX Design',
        image:'img3.webp'
    },
]


export const TracksData: TracksInterface[] = [
    {
        image:'img1.webp',
        name:'Matthew E. McNatt',
        type:'Professor @George Brown College',
        description:'Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.',
        proffesion:'Engineering physics'
    },
    {
        image:'img2.webp',
        name:'Tracy D. Wright',
        type:'Professor @George Brown College',
        description:'Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.',
        proffesion:'Engineering physics'
    },
    {
        image:'img3.webp',
        name:'Cynthia A. Nelson',
        type:'Professor @George Brown College',
        description:'Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.',
        proffesion:'Engineering physics'
    },
]