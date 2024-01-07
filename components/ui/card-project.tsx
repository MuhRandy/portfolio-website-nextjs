import Image from "next/image";
import { Card, CardTitle } from "./card";

function CardProject({ name, imgSrc }: { name: string; imgSrc: string }) {
  return (
    <Card className="overflow-hidden relative group">
      <div className="w-full h-full bg-black text-white absolute hidden group-hover:block">
        <div className="w-full h-full flex justify-center items-center">
          <CardTitle>{name}</CardTitle>
        </div>
      </div>
      <Image src={imgSrc} alt={name} width={1300} height={600} />
    </Card>
  );
}

export default CardProject;
