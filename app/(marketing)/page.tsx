import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";

const MarkeingPage = () => {
  return (
    <div className="min-h-full flex dark:bg-[#1f1f1f] flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-2">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
};

export default MarkeingPage;
