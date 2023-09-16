import { FC } from "react";
import { Heading2, Heading5, Paragraph } from "../../components/Heading";
import { Button } from "../../components/Button";

const Example08: FC = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-room bg-cover bg-center bg-no-repeat">
      <section className="max-w-[1050px] mx-auto h-[100vh] flex items-center justify-center z-[15] relative">
     <div className="flex items-center justify-center flex-col gap-[30px]">
     <Paragraph color="text-[#23A6F0]" weight="font-bold">
          Designing Better Experience
        </Paragraph>
        <Heading2>Problems trying to resolve the conflict between </Heading2>
        <Paragraph>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Paragraph>
        <Heading5>$16.48</Heading5>
        <Button>ADD YOUR CALL TO ACTION</Button>
     </div>
      </section>
    </main>
  );
};

export { Example08 };
