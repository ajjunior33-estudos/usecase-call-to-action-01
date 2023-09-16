import { FC } from "react";
import { Container } from "../../components/Container";
import { Heading2, Paragraph } from "../../components/Heading";
import { Button } from "../../components/Button";

const Example04: FC = () => {
  return (
    <Container bg={"bg-[#252B42]"}>
      <section className="max-w-[1050px] mx-auto h-[100vh] flex items-center justify-center flex-col gap-[30px] z-[15] relative">
        <Heading2 color="text-white">Designing Better Experience</Heading2>
        <Paragraph color="text-white">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </Paragraph>
        <Button>ADD YOUR CALL TO ACTION</Button>
        <Paragraph weight="bold" color="text-white"> Designing Better Experience</Paragraph>
      </section>
    </Container>
  );
};
export { Example04 };
