import Content from "../ui/Content";
import Faq from "../ui/Faq";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="mt-10">
        <Content />
      </div>
      <Faq />
      <Footer />
    </div>
  );
}       