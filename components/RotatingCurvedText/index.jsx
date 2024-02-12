import ReactCurvedText from 'react-curved-text';
import './index.css';

const RotatingCurvedText = () => {
  return (
    <div className='relative'>
        <ReactCurvedText
          width={140}
          height={140}
          cx={70}
          cy={70}
          rx={60}
          ry={60}
          text="Web Developer Web Devepoler"
          textProps={{ style: { fontSize: 15, fontWeight: 'bold' } }}
          textPathProps={{ fill: '#fcfcfc' }}
          svgProps={{ className: 'rotating-curved-text' }}
        />
      <button className="absolute top-[25px] left-[25px] w-[90px] h-[90px]  text-2xl font-bold bg-white rounded-full">
        Hire Me!
      </button>
    </div>
  );
};

export default RotatingCurvedText;
