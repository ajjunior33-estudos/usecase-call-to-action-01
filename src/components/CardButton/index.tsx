import { FC, ReactNode } from "react";
interface Props{
    children: ReactNode,
    border?: string;
    background?: string;
}
const CardButton: FC<Props> = ({children, background = "bg-white", border = "border-[#BDBDBD]"}: Props) => {
    return (
        <main className={`cursor-pointer px-[28px] py-[18px] rounded-[10px] ${background} flex items-center gap-[25px] border-[1px] ${border}`}>{children}</main>
    )
}
export {CardButton}