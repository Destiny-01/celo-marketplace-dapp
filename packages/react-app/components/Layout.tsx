import { AppProvider } from "@/context/App.context";
import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
      <AppProvider>
        <Header />
        <div className="py-16 max-w-7xl min-w-[40rem] mx-auto space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
        <Footer />
      </AppProvider>
    </div>
  );
};

export default Layout;
