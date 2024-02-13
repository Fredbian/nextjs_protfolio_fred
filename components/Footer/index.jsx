import { Black_Ops_One } from "next/font/google";

const ops = Black_Ops_One({
  subsets: ['latin'],
  weight: '400'
})

const Footer = () => {
  return (
    <footer className="border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 flex justify-between">
        <span className={`${ops.className} text-[40px]`}>Fred</span>
        <p className="text-slate-600 font-bold flex justify-center items-center">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;