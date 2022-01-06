import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";

interface StepHeadProps {
  count: number;
  label: string;
  currentStep: number;
}

const StepHead = ({ count, label, currentStep }: StepHeadProps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`
      w-8 h-8 flex items-center justify-center rounded-full text-white mr-2
      ${currentStep >= count ? "bg-buttonGradient" : "bg-primaryGrey-100"} 
      `}
      >
        {currentStep > count ? <DoneIcon fontSize="small" /> : count + 1}
      </div>
      <Text small>{label}</Text>
    </div>
  );
};

interface StepBodyProps {
  children: JSX.Element | string;
}
const StepBody = ({ children }: StepBodyProps) => {
  return <div>{children}</div>;
};

interface Props {
  steps: { label: string; info: string }[];
  finishInfo: string | JSX.Element;
  currentStepProp?: number;
  onContinue?: () => void;
}

export default function Stepper({
  steps,
  finishInfo,
  currentStepProp,
  onContinue,
}: Props) {
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  return (
    <div className="grid grid-rows-3 gap-5">
      <div className="flex-row flex justify-between items-center my-2">
        {steps.map((step, headIndex) => {
          return (
            <StepHead
              key={headIndex}
              count={headIndex}
              label={step.label}
              currentStep={currentStep}
            />
          );
        })}
      </div>
      <div>
        {steps.map(
          (step, index) =>
            index === currentStep && (
              <StepBody key={index}>{step.info}</StepBody>
            )
        )}
        {currentStep === steps.length && <StepBody>{finishInfo}</StepBody>}
      </div>
      <div className="flex justify-between">
        <Button
          secondary
          small
          onClick={() => {
            setCurrentStep(currentStep - 1);
          }}
          disabled={currentStep === 0 || steps.length === currentStep}
        >
          Back
        </Button>
        {currentStep < steps.length - 1 ? (
          <Button
            secondary
            small
            onClick={() => {
              setCurrentStep(currentStep + 1);
            }}
          >
            Next
          </Button>
        ) : (
          <div>
            {currentStep < steps.length && (
              <Button
                secondary
                small
                onClick={() => {
                  if (currentStep < steps.length)
                    setCurrentStep(currentStep + 1);
                }}
              >
                Finish
              </Button>
            )}
            {currentStep === steps.length && (
              <Button secondary small onClick={onContinue}>
                Continue
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
