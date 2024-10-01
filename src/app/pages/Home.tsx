import Footer from '../../components/Footer';
import Intro from '../../components/Intro';
import Socials from '../../components/Socials';
import Stack from '../../components/Stack';
import Container from '../../components/ui/Container';
import Venture from '../../components/Venture';

const Home = () => {
  return (
    <div className="min-h-[100vh] bg-[#080808] py-16">
      <Container>
        <Intro />
        <Venture />
        <Stack />
        <Socials />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
