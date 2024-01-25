import Heading from "./Components/Heading";
import Section from "./Components/Section";

const App = () => {
  return (
    <div>
      <Heading title={"true"} />
      <Section>
        <h1>This is the children</h1>
      </Section>
    </div>
  );
};

export default App;
