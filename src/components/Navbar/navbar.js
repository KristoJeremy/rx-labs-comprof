import Image from "next/image";
import { PoppinsBold, PoppinsSemiBold } from "@/fonts/font";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./navbar.module.css";

export const NavigationBar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <section id="Navbar" className={styles.navbar}>
      <nav
        className={`${styles.nav_container} py-5 transition-colors duration-500`}
      >
        <div className="container md:px-12 md:flex md:items-center md:justify-between lg:max-w-[1300px] md:mb-0 mb-[-5px]">
          <div className="flex items-center justify-between">
            <div className={styles.wrapper} style={PoppinsBold.style}>
              RXLabs
            </div>
            <span className="md:hidden block">
              {navbar ? (
                <button
                  aria-label="close icon"
                  className="p-2 rounded-md "
                  onClick={() => setNavbar(!navbar)}
                >
                  <CloseIcon style={{ color: "#ebe1e6" }} />
                </button>
              ) : (
                <button
                  aria-label="drawer icon"
                  className="p-2 rounded-md "
                  onClick={() => setNavbar(!navbar)}
                >
                  <MenuIcon style={{ color: "#ebe1e6" }} />
                </button>
              )}
            </span>
          </div>
          <div>
            <ul
              className={`md:flex md:items-center pb-10 mt-2 md:pb-0 md:mt-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:transition-none transition-all duration-500 ease-in md:border-0 border-b-[3.5px] border-[#151515] ${
                navbar
                  ? "top-[-10px] md:bg-[#292550] bg-[#292550]"
                  : "top-[-490px]"
              } navList`}
              style={{
                paddingLeft: 0, // Remove left padding
                marginLeft: 0,  // Remove left margin
              } }
            >
              <li className="pb-0 text-xl px-6 text-center md:mt-0 mt-[100px]" style={{ color: '#ebe1e6', fontSize: '14px', marginLeft: 0 }}>
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  <div
                    style={PoppinsSemiBold.style}
                    className={`${pathname === "/" ? styles.menu : ""} ${
                      styles.menu_hover
                    } `}
                  >
                    ABOUT
                  </div>
                </Link>
              </li>
              <li className="pb-0 text-xl px-6 text-center" style={{ color: '#ebe1e6', fontSize: '14px', marginLeft: 0 }}>
                <Link href="/catalogue" onClick={() => setNavbar(!navbar)}>
                  <div
                    style={PoppinsSemiBold.style}
                    className={`${
                      pathname === "/catalogue" ? styles.menu : ""
                    } ${styles.menu_hover} `}
                  >
                    SERVICES
                  </div>
                </Link>
              </li>
              <li className="pb-0 text-xl px-6 text-center" style={{ color: '#ebe1e6', fontSize: '14px', marginLeft: 0 }}>
                <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
                  <div
                    style={PoppinsSemiBold.style}
                    className={`${pathname === "/gallery" ? styles.menu : ""} ${
                      styles.menu_hover
                    } `}
                  >
                    VALUES
                  </div>
                </Link>
              </li>
              <li className="pb-0 text-xl px-6 text-center" style={{ color: '#ebe1e6', fontSize: '14px', marginLeft: 0 }}>
                <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                  <div
                    style={PoppinsSemiBold.style}
                    className={`${pathname === "/contact" ? styles.menu : ""} ${
                      styles.menu_hover
                    } `}
                  >
                    CONTACT US
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};




// import Image from "next/image";
// import { PoppinsBold, PoppinsSemiBold} from "@/fonts/font";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import styles from "./navbar.module.css";

// export const NavigationBar = () => {
//     const pathname = usePathname();
//     const [navbar, setNavbar] = useState(false);
//     return (
//       <section id="Navbar">
//         <nav
//           className={`py-5 md:bg-[#292550] ${
//             navbar ? "bg-[#292550]" : "bg-[#292550]"
//           } transition-colors duration-500`}
//         >
//           <div className="container md:px-12 md:flex md:items-center md:justify-between lg:max-w-[1300px] md:mb-0 mb-[-5px]">
//             <div className="flex items-center justify-between">
//                 <div className={styles.wrapper} style={PoppinsBold.style}>
//                         RXLabs
//                 </div>
//               <span className="md:hidden block">
//                 {navbar ? (
//                   <button
//                     aria-label="close icon"
//                     className="p-2 rounded-md outline outline-white"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     <CloseIcon color="primary" />
//                   </button>
//                 ) : (
//                   <button
//                     aria-label="drawer icon"
//                     className="p-2 rounded-md outline outline-white"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     <MenuIcon color="primary" />
//                   </button>
//                 )}
//               </span>
//             </div>
//             <div
//             // className={`justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0`}
//             >
//           <ul
//             className={`md:flex md:items-center pb-10 mt-2 md:pb-0 md:mt-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto bg-[#292550] md:transition-none transition-all duration-500 ease-in md:border-0 border-b-[3.5px] border-[#151515] 
//             ${
//               navbar
//                 ? "top-[-10px] md:bg-[#292550] bg-[#292550]"
//                 : "top-[-490px]"
//             }`}
//           >
//             <li className="pb-0 text-xl px-6 text-center md:mt-0 mt-[100px] ml-0" style={{ color: '#ebe1e6', fontSize: '14px' }}>
//               <Link href="/" onClick={() => setNavbar(!navbar)}>
//                 <div
//                   style={PoppinsSemiBold.style}
//                   className={`${pathname === "/" ? styles.menu : ""} ${
//                     styles.menu_hover
//                   }`}
//                 >
//                   ABOUT
//                 </div>
//               </Link>
//             </li>
//             <li className="pb-0 text-xl px-6 text-center ml-0" style={{ color: '#ebe1e6', fontSize: '14px' }}>
//               <Link href="/catalogue" onClick={() => setNavbar(!navbar)}>
//                 <div
//                   style={PoppinsSemiBold.style}
//                   className={`${
//                     pathname === "/catalogue" ? styles.menu : ""
//                   } ${styles.menu_hover} `}
//                 >
//                   SERVICES
//                 </div>
//               </Link>
//             </li>
//             <li className="pb-0 text-xl px-6 text-center ml-0" style={{ color: '#ebe1e6', fontSize: '14px' }}>
//               <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
//                 <div
//                   style={PoppinsSemiBold.style}
//                   className={`${pathname === "/gallery" ? styles.menu : ""} ${
//                     styles.menu_hover
//                   } `}
//                 >
//                   VALUES
//                 </div>
//               </Link>
//             </li>
//             <li className="pb-0 text-xl px-6 text-center ml-auto" style={{ color: '#ebe1e6', fontSize: '14px' }}>
//               <Link href="/contact" onClick={() => setNavbar(!navbar)}>
//                 <div
//                   style={PoppinsSemiBold.style}
//                   className={`${pathname === "/contact" ? styles.menu : ""} ${
//                     styles.menu_hover
//                   } `}
//                 >
//                   CONTACT US
//                 </div>
//               </Link>
//             </li>
//           </ul>

//             </div>
//           </div>
//         </nav>
//       </section>
//     );
//   };



// import Image from "next/image";
// import { PoppinsBold, PoppinsSemiBold} from "@/fonts/font";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import styles from "./navbar.module.css";

// export const NavigationBar = () => {
//     const pathname = usePathname();
//     const [navbar, setNavbar] = useState(false);
//     return (
//       <section id="Navbar">
//         <nav
//           className={`py-5 md:bg-[#292550] ${
//             navbar ? "bg-[#292550]" : "bg-[#292550]"
//           } transition-colors duration-500`}
//         >
//           <div className={styles.box}>
//             <div className={styles.boxwrap}>
//                 <div className={styles.wrapper} style={PoppinsBold.style}>
//                         RXLabs
//                 </div>
//               <span className="md:hidden block">
//                 {navbar ? (
//                   <button
//                     aria-label="close icon"
//                     className="p-2 rounded-md outline outline-white"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     <CloseIcon color="primary" />
//                   </button>
//                 ) : (
//                   <button
//                     aria-label="drawer icon"
//                     className="p-2 rounded-md outline outline-white"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     <MenuIcon color="primary" />
//                   </button>
//                 )}
//               </span>
//             </div>
//             <div
//             // className={`justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0`}
//             >
//               <ul
//                 className={`md:flex md:items-center pb-10 mt-2 md:pb-0 md:mt-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto bg-[#292550] md:transition-none transition-all duration-500 ease-in md:border-0 border-b-[3.5px] border-[#151515] 
//                 ${
//                   navbar
//                     ? "top-[-10px] md:bg-[#292550] bg-[#292550]"
//                     : "top-[-490px]"
//                 }`}
//               >
//                 <li className={styles.about} style={{ color: '#ebe1e6', fontSize: '14px' }}>
//                   <Link href="/" onClick={() => setNavbar(!navbar)}>
//                     <div
//                       style={PoppinsSemiBold.style}
//                       className={`${pathname === "/" ? styles.menu : ""} ${
//                         styles.menu_hover
//                       } `}
//                     >
//                       ABOUT
//                     </div>
//                   </Link>
//                 </li>
//                 <li className={styles.services} style={{ color: '#ebe1e6', fontSize: '14px' }}>
//                   <Link href="/catalogue" onClick={() => setNavbar(!navbar)}>
//                     <div
//                       style={PoppinsSemiBold.style}
//                       className={`${
//                         pathname === "/catalogue" ? styles.menu : ""
//                       } ${styles.menu_hover} `}
//                     >
//                       SERVICES
//                     </div>
//                   </Link>
//                 </li>
//                 <li className={styles.values} style={{ color: '#ebe1e6', fontSize: '14px' }}>
//                   <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
//                     <div
//                       style={PoppinsSemiBold.style}
//                       className={`${pathname === "/gallery" ? styles.menu : ""} ${
//                         styles.menu_hover
//                       } `}
//                     >
//                       VALUES
//                     </div>
//                   </Link>
//                 </li>
//                 <li className={styles.contact} style={{ color: '#ebe1e6', fontSize: '14px' }}>
//                   <Link href="/contact" onClick={() => setNavbar(!navbar)}>
//                     <div
//                       style={PoppinsSemiBold.style}
//                       className={`${pathname === "/contact" ? styles.menu : ""} ${
//                         styles.menu_hover
//                       } `}
//                     >
//                       CONTACT US
//                     </div>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </section>
//     );
//   };