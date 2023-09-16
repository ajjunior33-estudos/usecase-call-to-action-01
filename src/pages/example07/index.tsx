import { CreditCard } from "phosphor-react";
import { FC } from "react";
import { Heading2, Paragraph } from "../../components/Heading";
import { Button } from "../../components/Button";

const Example07: FC = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-girl bg-cover bg-center bg-no-repeat z-[-15]">
      <section className="bg-filter w-[100vw] h-[100vh]">
        <section className="max-w-[1050px] mx-auto h-[100vh] flex items-center justify-center z-[15] relative">
          <div className="bg-white rounded-[5px] p-[80px] flex items-center justify-center gap-[30px] flex-col max-w-[386px]  mx-[14px] md:max-w-[805px] h-fit">
            <div className="p-[20px] bg-[#E74040] rounded-full">
              <CreditCard weight="bold" color="#FFF" size={32} />
            </div>
            <Heading2>-15 BONUS</Heading2>
            <Paragraph>
                Problems trying to resolve the conflict between the two
            </Paragraph>
            <Button>ADD YOUR CALL TO ACTION</Button>
          </div>
        </section>
      </section>
    </main>
  );
};
export { Example07 };
