import Image from 'next/image';
import { Card, CardTitle } from './card';
import { CardAnimation } from './animation';

function CardProject({ name, imgSrc }: { name: string; imgSrc: string }) {
  return (
    <CardAnimation>
      <Card className="overflow-hidden relative group">
        <div className="w-full h-full bg-black text-white absolute hidden group-hover:block">
          <div className="w-full h-full flex justify-center items-center">
            <CardTitle className="text-center text-lg">{name}</CardTitle>
          </div>
        </div>
        <Image src={imgSrc} alt={name} width={1300} height={600} />
      </Card>
    </CardAnimation>
  );
}

export default CardProject;
