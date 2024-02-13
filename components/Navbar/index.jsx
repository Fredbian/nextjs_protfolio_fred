'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { Black_Ops_One } from 'next/font/google';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';

const black_ops = Black_Ops_One({
  subsets: ['latin'],
  weight: '400',
});

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
        {/* Mobile Menu */}
        <div className="block flex-1 md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover-border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover-border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {/* Web Menu */}
        <div className="hidden flex-1 md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:space-x-8">
            {navLinks.map((navLink, index) => {
              return (
                <li key={index}>
                  <NavLink title={navLink.title} href={navLink.path} />
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          href={'/'}
          className={`${black_ops.className} font-ops text-center flex-1 text-2xl md:text-5xl text-white`}
        >
          Fred
        </Link>
        <div className="flex-1 flex flex-row gap-2 justify-center">
          <Link href="https://github.com/Fredbian">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/tao-bian-9aa137239/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
