import { CardAnimation } from "./animation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

function CardExperience({
  jobTitle,
  company,
  jobDescription,
}: {
  jobTitle: string;
  company: string;
  jobDescription: string;
}) {
  return (
    <CardAnimation>
      <Card className="sm:max-w-[350px]">
        <CardHeader>
          <CardTitle>{jobTitle}</CardTitle>
          <CardDescription>{company}</CardDescription>
        </CardHeader>
        <CardContent className="text-justify">{jobDescription}</CardContent>
      </Card>
    </CardAnimation>
  );
}

export default CardExperience;
