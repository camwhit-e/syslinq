import { ReactNode } from 'react';

export default function RowBox({ children }: { children: ReactNode }) {
    return (
        <div className="flex-1 rounded-br-lg mb-4 rounded-tl-lg bg-white p-5 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
            {children}
        </div>
    )
};
