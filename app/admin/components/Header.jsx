'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../assets/dummylogo.jpg';
import Wrapper from '../../components/Wrapper';
import Link from 'next/link';
import Menu from '../../components/Menu';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import { VscAccount } from "react-icons/vsc";
import MobileMenu from '../../components/MobileMenu';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setLastScrolly] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAdmin,setIsAdmin]= useState(false);
  const router=useRouter()

  useEffect(()=>{
    const adminLoggedIn= localStorage.getItem('adminLoggedIn');
    if(adminLoggedIn=== 'true')
    {
        setIsAdmin(true);

    }
  },[]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrolly(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrolly, mobileMenu]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleLogOut=()=>{
    localStorage.removeItem('adminLoggedIn')
    setIsAdmin(false)
    router.push('/')
  }

  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper className={'h-[60px] flex justify-between items-center'}>
        <Link href={'/'}>
          <div>
            <Image src={logo} alt='logo image' height={50} width={50} />
          </div>
        </Link>
        <Menu showCartMenu={showCartMenu} setShowCartMenu={setShowCartMenu} />
        {mobileMenu && (
          <MobileMenu showCartMenu={showCartMenu} setShowCartMenu={setShowCartMenu} setMobileMenu={setMobileMenu} />
        )}
        <div className='flex item-center gap-2 text-black mr-4 relative'>
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
            <IoMdHeartEmpty className='text-[19px] md:text-[24px]' />
            <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 mr-4 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
              57
            </div>
          </div>
          <Link href={"/Cart"}>
            <div>
              <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                <BsCart className='text-[15px] md:text-[20px]' />
                <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 mr-4 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
                  5
                </div>
              </div>
            </div>
          </Link>
          <div className='relative'>
            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer' onClick={toggleDropdown}>
              <VscAccount className='text-[15px] md:text-[20px]' />
            </div>
            {showDropdown && (
              <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10'>
              {isAdmin ? (<div 
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
              onClick={handleLogOut}>
                Logout

              </div>):(  
                <Link href='../UserRegister'>
                  <div className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={closeDropdown}>Sign Up/Sign In</div>
                </Link>)}
              </div>
            )}
          </div>
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
            {mobileMenu ? (
              <VscChromeClose className='text-[16px]' onClick={() => setMobileMenu(false)} />
            ) : (
              <BiMenuAltRight className='text-[20px]' onClick={() => setMobileMenu(true)} />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
