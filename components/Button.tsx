import { Button } from "react-bootstrap";

interface ButtonProps {
  displayText: string;
  icon?: React.ReactNode;
  full?: boolean;
  className?: string;
  isSubmit?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DefaultButton = (props: ButtonProps) => {
  return (
    <div className={props.className}>
      <Button
        variant="default"
        size={"lg"}
        onClick={props.onClick}
        type={props.isSubmit ? "submit" : "button"}
      >
        <div className="flex">
          <div>{props.displayText}</div>
          <div className="flex--center ml-1">{props.icon}</div>
        </div>
      </Button>
    </div>
  );
};

export default DefaultButton;
