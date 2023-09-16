import { FC } from "react";
import { Heading2, Paragraph } from "../../components/Heading";
import { Button } from "../../components/Button";

const Example02: FC = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-[#252B42] flex items-center justify-center flex-col">
      <Heading2 color="text-white">Designing Better Experience</Heading2>
      <Paragraph color="text-white">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </Paragraph>
      <Button>ADD YOUR CALL TO ACTION</Button>
      <Paragraph weight="font-bold" color="text-white" classname="mt-[30px]">Designing Better Experience</Paragraph>
    </main>
  );
};
export { Example02 };
