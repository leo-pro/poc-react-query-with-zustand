
import { Header } from "@/shared/ui"
import { Gallery } from "@/widgets"

export const Home = () => {

  return(
    <>
      <Header/>
      <div className="xl:w-3/4 md:w-11/12 m-auto pt-16">
       <Gallery />
      </div>   
    </>
  )
}