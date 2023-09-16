import {
  CreditCard,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import { FC } from "react";
import { Button } from "../../components/Button";
import { Heading2 } from "../../components/Heading";

const Example03: FC = () => {
  return (
    <main className="flex items-center justify-center flex-col w-[100vw] h-[100vh]">
      <div className="p-[20px] bg-[#E74040] rounded-full">
        <CreditCard weight="bold" color="#FFF" size={32} />
      </div>
      <Heading2>Problems trying to resolve the conflict between </Heading2>
      <Button>
        ADD YOUR CALL TO ACTION
      </Button>

      <div className="flex items-center gap-[34px] mt-[30px]">
        <FacebookLogo weight="bold" size={30} />
        <TwitterLogo weight="bold" size={30} />
        <InstagramLogo weight="bold" size={30} />
        <LinkedinLogo weight="bold" size={30} />
      </div>
    </main>
  );
};
export { Example03 };
