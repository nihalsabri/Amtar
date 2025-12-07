
'use client';

import Image from 'next/image';
import { ArrowUpLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

interface AreaCardProps {
  title: string;
  image: string;
  link: string;
  size: 'large' | 'small';
  className?: string;
  position: {
    row: number;
    col: number;
    rowSpan?: number;
    colSpan?: number;
  };
  count?: number;
}

export function AreaCard({ title,  image, link, size, position ,  count = 0 }: AreaCardProps) {
  
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const gridClasses = {
    large: 'lg:col-span-2 lg:row-span-2',
    small: 'lg:col-span-1 lg:row-span-1',
  };

  return (
     <a 
      href={link}
      className={`
        group relative block rounded-3xl overflow-hidden 
        cursor-pointer transition-all duration-500
        w-full
        h-[266px]
        md:h-[300px]
        lg:h-auto
        ${gridClasses[size]}
      `}
      style={isLargeScreen ? {
        gridRowStart: position.row,
        gridColumnStart: position.col,
        gridRowEnd: position.rowSpan ? `span ${position.rowSpan}` : undefined,
        gridColumnEnd: position.colSpan ? `span ${position.colSpan}` : undefined,
      } : {}}
    >
 
      <div className="relative h-full w-full">
 
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

  
        <div className="absolute inset-0 bg-black/20 " />



  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">        
          <h3 className="text-white text-2xl md:text-3xl  mb-2 transition-transform duration-500 group-hover:translate-y-[-4px]">
            {title}
          </h3>
          
    
          
          <div className="flex items-center gap-2">
            <span className="text-white text-sm ">
              {count.toLocaleString()}
            </span>
            <span className="text-white/70 text-sm">
              عقار
            </span>
          </div>
       
 <div className="
          opacity-0 
            transition-all duration-500
            group-hover:opacity-100
            group-hover:translate-y-0
            -translate-y-4
        ">
         <div className="
            w-8 h-8 
            flex items-center justify-center 
            bg-white/20 backdrop-blur-md 
            rounded-full 
            border border-white/30
            transition-transform duration-300
            group-hover:scale-110
            group-hover:bg-white
          ">
            <ArrowUpLeft className="h-5 w-5 text-black" />
          </div>
     
</div>
      </div>
        <div className="
          absolute inset-0 
          bg-gradient-to-tr from-transparent via-white/5 to-transparent
          opacity-0 
          transition-opacity duration-500
          group-hover:opacity-100
        " />
      </div>
    </a>
  );
}