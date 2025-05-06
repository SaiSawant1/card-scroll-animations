import { FixedBg } from "./components/fixed-bg";

function App() {
  return (
    <div>
      <div className="h-screen flex gap-10 flex-col justify-center items-center hero-gradient">
        <h2 className="text-5xl">Created by,</h2>
        <h1 className="text-7xl text-bold">
          Sai Sawant
        </h1>
      </div>
      <div className="relative overflow-hidden h-screen" id="review-section">
        <FixedBg />
      </div>
      <div className="h-screen hero-gradient flex justify-center items-center flex-col gap-4">
        <div className="text-5xl">
          Thank You
        </div>
        <div className="text-3xl">
          saisawant2003@gmail.com
        </div>
        <a href="https://github.com/SaiSawant1" className="text-2xl">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/sai-sawant-920b4b256/"
          className="text-2xl"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default App;
