import CanvasGame from "./components/CanvasGame"

export default function App() {
  return (
    <main className="bg-gray-500 text-center m-0 p-0 h-screen overflow-hidden">
      <div className="mx-auto py-8 flex flex-col gap-4 h-full container">
        <h1 id="title" className="text-xl m-0 font-bold text-white">
          Not Another Pong Game
        </h1>
        <CanvasGame />
      </div>
    </main>
  );
}