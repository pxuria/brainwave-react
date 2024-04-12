import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Button className="mt-10">Something</Button>
      </div>
    </>
  );
};

export default App;
