import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function MainLayout({ children }) {
    return (
        <section>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </section>
    );
}
