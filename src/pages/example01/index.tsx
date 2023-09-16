import { CreditCard } from "phosphor-react";
import { FC } from "react";
import { Container } from "../../components/Container";
import { Heading2, Paragraph } from "../../components/Heading";
import { Button, ButtonOutline } from "../../components/Button";
const Example01: FC = () => {
  return (
    <Container>
      <main className="max-w-[1050px] mx-auto flex flex-col gap-[30px] items-center justify-center">
        <div className="p-[20px] bg-[#E74040] rounded-full ">
          <CreditCard weight="bold" color="#FFF" size={32} />
        </div>
        <Heading2>Designing Better Experience</Heading2>
        <div className="flex items-center gap-[10px]">
          <Button>Try Now</Button>
          <ButtonOutline>Learn More</ButtonOutline>
        </div>
        <Paragraph classname="mt-[30px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Paragraph>
      </main>
    </Container>
  );
};
export { Example01 };
