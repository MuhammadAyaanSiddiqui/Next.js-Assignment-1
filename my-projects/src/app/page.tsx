import Image from "next/image";
import About from "./about/page";

import Products from "./product/page";
import Navbar from "./navabar/page";
import Content from "./content/page";


export default function Home() {
  return (
    <>
    
    
    <Navbar/>
    <Content/>
   
    <Products/>
    <About/>
    
    </>
  )
}
