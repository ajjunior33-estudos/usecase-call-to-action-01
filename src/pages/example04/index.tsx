import { FC } from "react";
import { Heading2, Paragraph } from "../../components/Heading";
import { Button } from "../../components/Button";

const Example04: FC = () => {
  return (
    <main className="w-[100vw] flex items-center justify-center">
      <section className="max-w-[1050px] mx-auto flex items-center p-[30px] justify-center flex-col">
        <div className="flex items-center justify-center flex-col gap-[30px]">
          <Heading2>Problems trying to resolve the conflict between</Heading2>
          <Paragraph>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </Paragraph>
          <Button>ADD YOUR CALL TO ACTION</Button>
        </div>
        <img src="./hyperspace_maintenance_day.png" alt="" />
      </section>
    </main>
  );
};
export { Example04 };
