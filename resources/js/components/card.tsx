import { ReactNode } from 'react';

export default function Card({ children }: { children: ReactNode }) {
    return (
        <div className="flex-1 rounded-br-lg rounded-tl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
            {children}
        </div>
    )
};
