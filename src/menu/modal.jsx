import * as React from "react";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import "./menu.css";
import { CartDetails } from "./defaultmenu";
import { useState, useEffect } from "react";


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <div className="myModal">
      <Button onClick={handleOpen}></Button>
      {open && isSmallScreen && (
        <div className="md small-screen-only">
          <div className="md2">
            {open && (
              <div>
                <IoMdClose onClick={handleClose} />
              </div>
            )}
            <CartDetails />
          </div>
        </div>
      )}
    </div>
  );
}





  
//   return (
//     <div className="myModal">
//       <Button onClick={handleOpen}></Button>
//       {open && (
//         <div className="md">
//           <div className="md2">
//             {close && (
//               <div>
//                 <IoMdClose onClick={handleClose} />
//               </div>
//             )}
//             <CartDetails/>
//           </div>
//         </div>
//       )}
     
//     </div>
//   );
// }
