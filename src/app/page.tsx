import Datetable from "@/components/Datetable";
import { ModeToggle } from "@/components/ModeToggle";

const Home = () => {
  return (
    <main>
      <div className="flex">
        <h1 className="m-5 font-bold	">北海道ツーリング向けキャンプ場</h1>
        <div className="m-2">
          <ModeToggle />
        </div>
      </div>
      <Datetable />
    </main>
  );
};

export default Home;
