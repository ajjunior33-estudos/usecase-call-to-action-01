import { FC } from "react";
import { Container } from "../../components/Container";
import { Heading2, Paragraph } from "../../components/Heading";
import { AppleLogo, GooglePlayLogo } from "phosphor-react";
import { CardButton } from "../../components/CardButton";

const Example05: FC = () => {
  return (
    <Container>
      <Paragraph
        color="text-[#23A6F0]"
        classname="mb-[30px]"
        weight="font-bold"
      >
        Designing Better Experience
      </Paragraph>
      <Heading2 classname="mb-[30px]">
        Problems trying to resolve the conflict between{" "}
      </Heading2>
      <Paragraph>
        Problems trying to resolve the conflict between the two major realms of
        Classical physics:
      </Paragraph>

      <div className="flex items-center flex-col md:flex-row gap-[10px]">
        <CardButton>
          <AppleLogo weight="fill" size={33} />
          <div className="flex items-start flex-col">
            <span className="text-[#252B42] text-[14px] font-bold">
              Download on the
            </span>
            <span className="text-[#252b42] text-[20px] ">App Store</span>
          </div>
        </CardButton>

        <CardButton background="bg-[#252B42]">
          <GooglePlayLogo weight="fill" color="#FFF" size={33} />
          <div className="flex items-start flex-col">
            <span className="text-[#FFF] text-[14px] font-bold">
              Download on the
            </span>
            <span className="text-[#FFF] text-[20px] ">Google Play</span>
          </div>
        </CardButton>

      </div>
    </Container>
  );
};

export { Example05 };
