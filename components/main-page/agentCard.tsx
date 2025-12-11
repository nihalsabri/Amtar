
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {  ArrowUpLeft, ShareIcon } from 'lucide-react';

interface AgentCardProps {
  name: string;
  location: string;
  description: string;
  color: 'white' | 'blue' | 'black' | 'green';
  image: string;
  index:number;
}


export function AgentCard({ name, location, index, color, image }: AgentCardProps) {
  return (
    <div className={`sm:shrink-0 w-[271px] h-[185px] p-4 rounded-xl overflow-hidden flex flex-col items-center justify-center ${getColorClass(color)}`}
    style={{
        transform: `translateX(${index * 80}px)`, 
        zIndex: 10 - index, 
      }}
    >

      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        className="rounded-full mb-2"
      />

      <h3 className={`text-lg font-medium text-center ${getTextColor(color)}`}>{name}</h3>
      <p className={`text-xs font-normal mt-1 ${getTextColor(color)}`}>{location}</p>

      <div className='flex gap-2 mt-4 h-[36px]'>
        <Button
          variant="outline"
          size="sm"
          className={`flex border border-t rounded-full p-[4px] h-[36px] w-[191px] bg-[#F8FAFC] border-[#CAD5E2] ${getButtonTextColor(color)}`}
          asChild
        >
          <a href="/agents/1">
            مشاهدة التفاصيل
            <ArrowUpLeft className="mr-2 h-4 w-4" />
          </a>
        </Button>

        <button className="
          w-10 
          h-10 
          rounded-full 
          bg-[#E2E8F0] 
          flex 
          items-center 
          justify-center 
          transition-colors
        ">
          <ShareIcon className="h-5 w-5 text-[#0F172B]" />
        </button>
      </div>
          
    </div>
  );
}
function getColorClass(color: 'white' | 'blue' | 'black' | 'green') {
  switch (color) {
    case 'white':
      return 'bg-white text-gray-800';
    case 'blue':
      return 'bg-blue-500 text-white';
    case 'black':
      return 'bg-black text-white';
    case 'green':
      return 'bg-[#00C950] text-white';
  }
}

function getTextColor(color: 'white' | 'blue' | 'black' | 'green') {
  switch (color) {
    case 'white':
       case 'green':
        case 'blue':
      return 'text-gray-800';
    case 'blue':
    case 'black':
      return 'text-white';
  }
}

function getButtonTextColor(color: 'white' | 'blue' | 'black' | 'green') {
  switch (color) {
    case 'white':
      return 'text-black';
    case 'blue':
      return 'text-[#314158]';
    case 'black':
      return 'text-[#314158]';
    case 'green':
      return 'text-[#314158]';
  }
}


