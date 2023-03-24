import React from "react";
import nullPlusLogo from "../images/nullplusein-logo.png"
import "../../src/Menu.css"


export default function Menu(){
    const [isColor, setColor] = React.useState(true)
    const [isActive, setActive] = React.useState(false)
    const [isDisable, setDisable] = React.useState(false)
    const navBtn = (e) => {
        e.preventDefault()
        setActive(!isActive)
        setColor(!isColor)
        setDisable(!isDisable)
    }

   


   


    let links = [
        {name:"Programm",link:"/"},
        {name:"Expert*innen",link:"/"},
        {name:"Über uns",link:"/"},
        {name:"Kontakt",link:"/"},
        {name:"Archiv",link:"/"},
    ]
    
    return(
        <nav>
            <div className="">
                <div className="logo-img w-[100px] h-[86px] md:w-[150px] md:h-[113px]">
                <img src={nullPlusLogo} alt="nullplusein logo" />
                </div>

                <div className="nav-link flex justify-between items-start flex-row ">
                    <div>
                    <a href="{#}" className="flex text-14 md:text-[24px] items-center text-pureGreen font-semibold"> Festival für Diversität <span> <svg width="24px" height="24px" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 12h6m6 0h-6m0 0V6m0 6v6" stroke="#162C13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>  Komplexität</a>
                    <a href="{#}" className="text-pureGreen text-sm md:text-lg mt-4 font-semibold font-Melno">4 - 20 Oktober 2022</a>
                    </div>

                  

                    <ul className={`${isActive ? "overlay-close" : null} links invisible  lg:visible transition-all   pl-5 fixed flex flex-col top-0  left-[100%] lg:left-0 duration-700 md:duration-[0ms] justify-center w-full  h-screen lg:h-min bg-pureGreen space-y-5 lg:pl-0 lg:space-y-0 lg:w-auto lg:relative lg:flex lg:flex-row   lg:bg-transparent  lg:space-x-10`}>
                        {
                            links.map((link)=>(
                                <li><a key={link.id} href={link.link} className="text-Melno text-5xl text-white  lg:text-pureGreen lg:text-2xl font-semibold">{link.name}</a></li>
                            ))
                        }
                    </ul> 
        
                  

                    <div className={ ` grid-btn grid grid-cols-3 grid-rows-3 gap-1 md:grid z-10 lg:hidden cursor-pointer`} onClick={navBtn}>
                        <div className={`${isColor ? "btn-color" : null} bg-white h-2 w-2 rounded-full`}></div>
                        <div className={`${isColor ? "btn-color" : null} ${isDisable ? "disable" : null}bg-white h-2 w-2 rounded-full`}></div>
                        <div className={`${isColor ? "btn-color" : null} bg-white h-2 w-2 rounded-full`}></div>
                        <div className={`${isColor ? "btn-color" : null} ${isDisable ? "disable" : null}bg-white h-2 w-2 rounded-full`}></div>
                        <div className={`${isColor ? "btn-color" : null} bg-white h-2 w-2 rounded-full`}></div>
                        <div className={`${isColor ? "btn-color" : null} ${isDisable ? "disable" : null}bg-white h-2 w-2 rounded-full`}></div>
                        <div className={`${isColor ? "btn-color" : null} bg-white h-2 w-2 rounded-full`}></div>
                        <div className={`${isColor ? "btn-color" : null} ${isDisable ? "disable" : null}bg-white h-2 w-2 rounded-full`}></div>
                        <div className={`${isColor ? "btn-color" : null} bg-white h-2 w-2 rounded-full`}></div>
                        
                    </div>
                </div>
                
            </div>
        </nav>
    )
}