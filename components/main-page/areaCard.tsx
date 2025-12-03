// components/cards/AreaCard.tsx
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface AreaCardProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  size: 'large' | 'small';
  className?: string;
}

export function AreaCard({ title, subtitle, image, link, size , className}: AreaCardProps) {
  return (
    <div className={`group relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 
  ${size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}   ${className || ''}`}>

 
      {/* الصورة */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      {/* النص فوق الصورة */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-1">{title}</h3>
        <p className="text-white text-sm opacity-90">{subtitle}</p>
      </div>

      {/* السهم عند الـ hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
          asChild
        >
          <a href={link}>
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}