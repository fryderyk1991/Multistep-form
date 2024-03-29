import React from "react";
import { FormStyled, FormGroupStyled } from "./Form.styled";
import inputs from "../../inputFields";
import steps from "../../formSteps";
import Label from "../Label/Label";
import Input from "../Input/Input";
import { RadioInputStyled } from "../Input/Input.styled";
import { ButtonParentStyled } from "../Button/Button.styled";
import stepButtonsConfig from "../../buttonsConfig";

const Form = ({
  handleSubmit,
  nextStepHandle,
  prevStepHandle,
  activeStep,
  handleChangeInput,
  selected,
  setSelected,
  errors,
  values,
  showStep,
  handleDropdownChange
}) => {

  const stepButtons = stepButtonsConfig(nextStepHandle, prevStepHandle, activeStep);

  return (
    <FormStyled onSubmit={handleSubmit}>
      {steps.map(
        (step) =>
          step.id === activeStep && (
            <FormGroupStyled key={step.id} id={step.id} $isActive={showStep}>
              {inputs
                .filter((input) => input.stepId === step.id)
                .map((field, index) => (
                  <React.Fragment key={index}>
                    {field.type === "radio" &&  (
                      <>
                      {field.labels.map((label, labelIndex) => (
                        <React.Fragment key={labelIndex}>
                          <RadioInputStyled
                            type={field.type}
                            name={field.name}
                            id={`${field.name}_${labelIndex}`}
                            value={label}
                            checked={values[field.name] === label}
                            onChange={(e) => handleChangeInput(e)}
                          />
                          <Label htmlFor={`${field.name}_${labelIndex}`}>
                            {label}
                          </Label>
                        </React.Fragment>
                      ))}
                    </>
                    )}
                    <Label htmlFor={field.name}>
                      {field.label}
                      {field.type !== "radio" ? (
                        <Input
                          name={field.name}
                          type={field.type}
                          id={field.name}
                          onChange={(e) => handleChangeInput(e)}
                          selected={selected}
                          options={field.options}
                          setSelected={setSelected}
                          value={values[field.name]}
                          handleDropdownChange={handleDropdownChange}
                        />
                      ) : null}
                      {errors[field.name] ? (
                        <span style={{ color: "red", fontSize: '1.3rem', position: 'absolute'}}>
                          {errors[field.name]}
                        </span>
                      ) : null}
                    </Label>
                  </React.Fragment>
                ))}
              <ButtonParentStyled $isStep1={step.id === 1}>
              {stepButtons[step.id]}
              </ButtonParentStyled>
            </FormGroupStyled>
          )
      )}
    </FormStyled>
  );
};

export default Form;


