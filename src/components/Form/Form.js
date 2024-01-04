import React from "react";
import { FormStyled, FormGroupStyled } from "./Form.styled";
import inputs from "../../inputFields";
import steps from "../../formSteps";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { RadioInputStyled } from "../Input/Input.styled";
import DropDown from "../DropDown/DropDown";
import Button from "../Button/Button";
import { ButtonParentStyled } from "../Button/Button.styled";
import { IoMdArrowRoundBack, IoMdArrowRoundForward  } from "react-icons/io";


const Form = ({ handleSubmit, nextStepHandle, prevStepHandle, activeStep, handleChecked }) => {
  const handleDropdownChange = (e) => {
    console.log(e);
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      {steps.map(
        (step) =>
          step.id === activeStep && (
            <FormGroupStyled key={step.id} id={step.id}>
              {inputs
                .filter((input) => input.stepId === step.id)
                .map((field) => (
                  <React.Fragment key={field.name}>
                    {field.type === "radio" && (
                      <RadioInputStyled
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={field.value}
                        onChange={(e) => handleChecked(e)}
                      />
                    )}
                    <Label htmlFor={field.name}>
                      {field.label}
                      {field.type === "dropdown" ? (
                        <DropDown
                          options={field.options}
                          onChange={handleDropdownChange}
                          value={field.value}
                        />
                      ) : field.type !== "radio" ? (
                        <Input
                          name={field.name}
                          type={field.type}
                          id={field.name}
                        />
                      ) : null}
                    </Label>
                  </React.Fragment>
                ))}
              <ButtonParentStyled $isStep1={step.id === 1}>
                {step.id === 1 ? (
                  <Button
                    type="button"
                    onClick={() => nextStepHandle(step.id + 1)}
                  >
                    <IoMdArrowRoundForward size={20} />
                  </Button>
                ) : step.id === 2 ? (
                  <>
                    <Button
                      type="button"
                      onClick={() => prevStepHandle(step.id - 1)}
                    >
                      <IoMdArrowRoundBack size={20} />
                    </Button>
                    <Button
                      type="button"
                      onClick={() => nextStepHandle(step.id + 1)}
                    >
                      <IoMdArrowRoundForward size={20} />
                    </Button>
                  </>
                ) : step.id === 3 ? (
                  <>
                    <Button
                      type="button"
                      onClick={() => prevStepHandle(step.id - 1)}
                    >
                      <IoMdArrowRoundBack size={20} />
                    </Button>
                    <Button type="submit">Submit</Button>
                  </>
                ) : null}
              </ButtonParentStyled>
            </FormGroupStyled>
          )
      )}
    </FormStyled>
  );
};

export default Form;