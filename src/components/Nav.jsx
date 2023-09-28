import { headerLogo } from '../assets/images';
import { hamburger, close } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from "react";

const Nav = () => {
  
    const [open, setOpen] = useState(false);

    
  return (
    
    <header className={`absolute  z-50 w-full  mb-4 ${open? 'bg-black/80 py-0 px-0 flex duration-500 ease-in-out' : 'bg-trasparent py-8 padding-x'}`}>
        <nav className={`flex abolute justify-between items-center max-container max-lg:items-start 
                         ${!open? 'w-full' : 'h-screen px-8 py-10 box-border mr-0 bg-white'}`}>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} className=''/>
            </a>
            
            <div className={`max-lg:flex max-lg:flex-col-reverse duration-500 ease-in  ${!open? 'bg-transparent' : 'flex-col'} `}>
            <ul className={`flex-1 flex justify-center gap-16 ${!open? 'max-lg:hidden' : 'flex-col'} max-lg:flex-col
                            max-lg:w-full max-lg:mt-[45px] max-lg:text-right max-lg:py-6 lg:mr-24`} >
                {
                    navLinks.map((item) => (
                        <li key={item.label} className=''>
                            <a 
                                href={item.href} 
                                className='font-montserrat leading-normal text-slate-gray'
                                onClick={() => setOpen(!open)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            
            <div className='hidden max-lg:flex z-20 justify-end' onClick={() => setOpen(!open)}>
                <img src={open? close : hamburger} alt="Hamburger"  width={25} height={25}/>
            </div>
            </div>

        </nav>
    </header>

  )
}

export default Nav