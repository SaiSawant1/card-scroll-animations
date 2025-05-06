import { FixedBg } from "./components/fixed-bg"

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
      <div className="h-screen hero-gradient">
        Thank You
      </div>
    </div>

  )
}

export default App
