import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';

const mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
})

const NavLink = ({ href, title }) => {
  return (
    <Link 
      href={href} 
      className={`${mono.className} block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
