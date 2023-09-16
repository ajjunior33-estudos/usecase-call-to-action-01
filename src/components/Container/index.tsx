import { FC, ReactNode } from "react";

interface Props{
  children: ReactNode;
  bg?: string;
}
const Container: FC<Props> = ({ children, bg = "bg-white", ...rest }: Props) => {
  return (
    <main className={`flex items-center justify-center flex-col w-[100vw] h-[100vh] ${bg}`} {...rest}>
      {children}
    </main>
  );
};
export { Container };
