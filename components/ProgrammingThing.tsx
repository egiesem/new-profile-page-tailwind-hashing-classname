import type { FC } from 'react';
import Image from 'next/image';

interface ProgammingThingProps {
  name: string;
  items: any[];
}

export const ProgammingThing: FC<ProgammingThingProps> = ({ name, items }) => {
  return (
    <div className='grid grid-cols-2 place-items-center'>
      <h1 className='gradient-text font-bold mr-auto'>{name}</h1>
      <div className='grid grid-flow-col ml-auto'>
        {items.map((icon, index) => (
          <Image src={icon} key={index} width={25} height={25} />
        ))}
      </div>
    </div>
  );
};