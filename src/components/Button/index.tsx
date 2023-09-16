import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  classname?: string;
}
const Button: FC<Props> = ({ children, classname }: Props) => {
  return (
    <button className={`px-[40px] py-[15px] text-white text-[14px] font-bold leading-[22px] text-center gap-[10px] rounded-[5px] bg-[#23a6f6] ${classname}`}>
      {children}
    </button>
  );
};

const ButtonOutline: FC<Props> = ({ children, classname }: Props) => {
  return (
    <button className={`rounded-[5px] px-[40px] py-[15px] border-[1px] border-[#23a6f0] text-[14px] text-[#23a6f0] font-bold ${classname}`}>
      {children}
    </button>
  );
};

export { Button, ButtonOutline };
