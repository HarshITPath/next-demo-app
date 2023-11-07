"use client";
import React from "react";
import { useRouter } from "next/navigation";
// import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <>
    <div>
      <nav style={{ display: 'flex', gap: '25px', justifyContent: 'flex-end' }}>
            <button onClick={() => handleNavigation('/')}>Home</button>
            <button onClick={() => handleNavigation('/about')}>About</button>              
            <button onClick={() => handleNavigation('/profile')}>Profile</button> 
            <button onClick={() => handleNavigation('/contact')}>Contact</button>
      </nav>
    </div>

     {/* <div>
       <nav>
         <ul style={{display:"flex", gap:"25px", justifyContent:"flex-end",}}>
           <li>
             <Link href="/">Home</Link>
           </li>
           <li>
             <Link href="/about">About</Link>
           </li>
           <li>
             <Link href="/profile">Profile</Link>
           </li>
           <li>
             <Link href="/contact">Contact</Link>
           </li>
         </ul>
       </nav>
     </div> */}
    </>
  );
};

export default Header;
