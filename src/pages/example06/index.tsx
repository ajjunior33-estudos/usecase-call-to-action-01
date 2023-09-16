import { Button } from "../../components/Button";
import { Heading2, Paragraph } from "../../components/Heading";

const Example06 = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-girl bg-cover bg-center bg-no-repeat z-[-15]">
      <section className="h-full w-full bg-opacity-50 bg-black z-[4] relative">
        <section className="max-w-[1050px] mx-auto h-[100vh] flex items-center justify-center z-[15] relative">
          <div className="max-w-[386px] md:max-w-[805px] h-fit border-[3px] mx-[14px] border-[#ECECEC] flex items-center justfiy-center z-[20] opacity-100 flex-col py-[80px] md:px-[80px]">
            <Heading2 classname="mb-[10px]" color="text-white"> -50 PROMOTION HOT SUMMER</Heading2>
            <Paragraph color="text-white">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </Paragraph>
            <Button classname="mt-[30px]">ADD YOUR CALL TO ACTION</Button>
            <Paragraph classname="mt-[30px]" color='text-white'>Designing Better Experience</Paragraph>
          </div>
        </section>
      </section>
    </main>
  );
};

export { Example06 };
