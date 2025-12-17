import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto 2xl:p-12 md:p-6 sm:p-6 p-6 2xl:w-[85%] lg:w-[85%] md:w-[90%] sm:w-full w-full">
      {children}
    </div>
  );
}
