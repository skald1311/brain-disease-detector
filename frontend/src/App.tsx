import InputForm from "./ui/InputForm";
import Footer from "./ui/Footer";

function App() {
  return (
    <main className="font-space-grotesk min-h-screen grid grid-cols-[55rem] content-center justify-center gap-[3.2rem] bg-gray-900">
      <InputForm />
      <Footer />
    </main>
  );
}

export default App;
