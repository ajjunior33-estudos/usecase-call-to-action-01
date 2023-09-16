import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
  classname?: string;
  color?: string;
  weight?:string;
}
const Heading2: FC<Props> = ({ children, classname, color="text-[#252b42]", weight="font-bold"}: Props) => {
  return (
    <h2 className={`${color} text-[40px] ${weight} leading-[50px] max-w-[553px] text-center ${classname}`}>
      {children}
    </h2>
  );
};

const Heading5: FC<Props> = ({
  children,
  classname,
  color="text-[#23856D]", 
  weight="font-bold"
}: Props) => {
  return (
    <h5 className={`text-[24px] leading-[32px] ${weight} ${color} ${classname}`}>
      {children}
    </h5>
  )
}

const Paragraph: FC<Props> = ({children, classname, color="text-[#737373]", weight="font-normal"}:Props) => {
    return (
        <p className={`mb-[30px] text-[14px] leading-[20px] ${color} max-w-[469px] ${weight} text-center ${classname}`}>
            {children}
        </p>
    )
}

export { Heading2, Heading5, Paragraph };
