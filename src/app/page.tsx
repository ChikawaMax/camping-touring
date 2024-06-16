import Datetable from "@/components/Datetable";
import { ModeToggle } from "@/components/ModeToggle";

const Home = () => {
  return (
    <main>
      <div className="flex items-center">
        <h1 className="font-bold mx-3">北海道ツーリング向けキャンプ場</h1>
        <ModeToggle />
      </div>
      <Datetable />
    </main>
  );
};

export default Home;
