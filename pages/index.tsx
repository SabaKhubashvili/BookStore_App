import { Courses, Footer, MainBanner, Navbar, NewsLetter, Reviews, SecondBanner, SubBanner, Tracks } from "@/Components";

export default function Home() {
  return (
    <>
    <title>Book Store</title>
    <div className=" bg-bodyBg">
     <Navbar/>
     <MainBanner/>
    </div>
    <SubBanner/>
    <Courses/>
    <div className="bg-bodyBg">
      <SecondBanner/>
    </div>
    <Reviews/>
    <Tracks/>
    <NewsLetter/>
    <div className="bg-bodyBg">
    <Footer/>
    </div>
    </>
  )
}
