import { Footer } from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }) => {
  return (
    <main className="overflow-hidden">
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
