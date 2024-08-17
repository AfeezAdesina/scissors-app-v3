import Content from "@/src/app/ui/Content";
import Footer from "@/src/app/ui/Footer";
import Header from "../ui/Header";
import Faq from "../ui/Faq";


export default function Homepage() {
    return (
<div className="flex flex-col min-h-[100dvh]">
    <Header />
    <div className="my-10">
        <Content />
    </div>
    <Faq />
    <Footer />
</div>
    );  
}