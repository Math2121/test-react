import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4">
        <div className="flex justify-start mt-5">
          <h2 className="font-bold text-lg text-gray-900">{title}</h2>
        </div>
        {children}
      </main>
    </>
  );
}

export default Layout;
