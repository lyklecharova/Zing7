import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { MainContent } from "@/components/MainContent/MainContent";
import { OtherServices } from "@/components/OtherServices/OtherServices";
import { TextContent } from "@/components/TextContent/TextContent";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ background: '#F5F5F5' }}>
            <Header />
            <HeroSection />
            <MainContent />
            <TextContent />
            <OtherServices />
        </main>
    );
}
