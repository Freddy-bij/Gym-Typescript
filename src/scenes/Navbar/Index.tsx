


import type { SelectedPage } from "@/shared/types";
import Links from "./Links"
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"; 
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false); 
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); 

  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 px-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <h1>EVOGYM</h1>
          
    
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
              <MdMenu className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;