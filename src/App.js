import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";
import Form from "./components/Form/Form";
import Progressbar from "./components/Progressbar/Progressbar";
import Card from "./components/Card/Card";
import { useState } from "react";

const App = () => {
  const [activeStep, setActiveStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }
  const nextStepHandle = (next, prev) => {
    setActiveStep(next);
  }
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Progressbar />
      <Card>
      <Form handleSubmit={handleSubmit} nextStepHandle={nextStepHandle} activeStep={activeStep}/>
      </Card>
    </>
  );
}


export default App;