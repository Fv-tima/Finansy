import Nav from "@/components/Nav";
import Header from "@/HOC/Landing/Header";
import Create from "@/HOC/Landing/Create";
import All from "@/HOC/Landing/All";
import Footer from "@/components/Footer";
import Track from "@/HOC/Landing/Track";
import Grow from "@/HOC/Landing/Grow";
function Landing() {
  return (
    <div>
      <Nav />
      <Header />
      <Create />
      <Track />
      <Grow />
      <All />
      <Footer />
    </div>
  );
}

export default Landing;
