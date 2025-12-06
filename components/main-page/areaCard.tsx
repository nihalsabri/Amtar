'use client';

import Image from 'next/image';
import { ArrowUpLeft } from 'lucide-react';

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
  
  const gridClasses = {
    large: 'col-span-2 row-span-2',
    small: 'col-span-1 row-span-1',
  };

  // const positionClasses = `
  //   ${position.rowSpan ? `row-span-${position.rowSpan}` : ''}
  //   ${position.colSpan ? `col-span-${position.colSpan}` : ''}
  // `;

  return (
    // <div 
    //   className={`
    //     group relative rounded-xl overflow-hidden cursor-pointer 
    //     transition-transform duration-300 hover:scale-105
    //     ${gridClasses[size]}
    //     ${positionClasses}
    //   `}
    //   style={{
    //     gridRowStart: position.row,
    //     gridColumnStart: position.col,
    //   }}
    // >

    //   <Image
    //     src={image}
    //     alt={title}
    //     fill
    //     className="object-cover"
    //   />
      
    //   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
    //     <h3 className="text-white text-2xl font-bold mb-1">{title}</h3>
    //     <p className="text-white text-sm opacity-90">{subtitle}</p>
    //   </div>
      
    //   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //     <Button
    //       variant="ghost"
    //       size="icon"
    //       className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
    //       asChild
    //     >
    //       <a href={link}>
    //         <ArrowUpRight className="h-5 w-5" />
    //       </a>
    //     </Button>
    //   </div>
    // </div>
     <a 
      href={link}
      className={`
        group relative block rounded-xl overflow-hidden 
        cursor-pointer transition-all duration-500
        ${gridClasses[size]}
      `}
      style={{
        gridRowStart: position.row,
        gridColumnStart: position.col,
        gridRowEnd: position.rowSpan ? `span ${position.rowSpan}` : undefined,
        gridColumnEnd: position.colSpan ? `span ${position.colSpan}` : undefined,
      }}
    >
 
      <div className="relative h-full w-full">
 
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
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