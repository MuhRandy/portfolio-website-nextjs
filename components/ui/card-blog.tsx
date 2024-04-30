import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { CardAnimation } from "./animation";

function CardBlog({
  title,
  text,
  imgSrc,
  date,
}: {
  title: string;
  text: string;
  imgSrc: string;
  date: string;
}) {
  return (
    <CardAnimation>
      <Card className="overflow-hidden">
        <Image src={imgSrc} alt={title} width={1300} height={600} />
        <CardHeader>
          <CardDescription>{date}</CardDescription>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-justify">{text}</p>
        </CardContent>
      </Card>
    </CardAnimation>
  );
}

export default CardBlog;
