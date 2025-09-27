
import type { SelectedPage } from "@/shared/types";
import Links from "./Links"
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import ActionButton from "@/shared/ActionButton";
import { FaXmark } from "react-icons/fa6";


type Props = {
   isTopOfPage:boolean
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({  isTopOfPage,selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"; 
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false); 
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); 

  const navbarBackground = isTopOfPage ? "" : "bg-yellow-100 drop-shadow"

  return (
    <div className={` ${navbarBackground}${flexBetween} fixed top-0 z-30 w-full py-6 px-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img src="./src/assets/logo.png" alt="" />
          
    
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween}  gap-8 text-sm`}>
                <Links 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links 
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links 
                  page="OurClasses" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} 
                />
                <Links 
                  page="Contact" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} 
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <div>Sign In</div>
                <ActionButton setSelectedPage={setSelectedPage}>Become Members</ActionButton>
              </div>
            </div>
          ) : (
            <button 
              className="rounded-full bg-yellow-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <MdMenu className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU MODAL */}

      {!isAboveMediumScreens && isMenuToggled &&(
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-red-100 drop-shadow-xl">
             {/* CLOSE MENU */}
             <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <FaXmark className="h-6 w-6 text-gray-400" />
                </button>

 
             </div>
               {/* Menu items */}

   <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Links 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links 
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links 
                  page="OurClasses" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} 
                />
                <Links 
                  page="Contact" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} 
                />
              </div>


        </div>
      )}

    </div>
  );
};

export default Navbar;