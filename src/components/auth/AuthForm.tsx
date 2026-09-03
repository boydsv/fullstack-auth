import Link from "next/link";
import SubmitForm from "./SubmitForm";
import { SubmitEventHandler } from "react";

const AuthForm = ({
  Inputs,
  SubmitText,
  Footer,
  isSubmitting,
  onSubmit,
}: {
  Inputs: React.ReactNode;
  SubmitText: string;
  Footer?: React.ReactNode;
  isSubmitting: boolean;
  onSubmit: SubmitEventHandler<HTMLFormElement>;
}) => {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="space-y-2 flex flex-col items-center"
      >
        {Inputs}

        <SubmitForm text={SubmitText} isSubmitting={isSubmitting} />
      </form>

      {Footer}
    </>
  );
};

export default AuthForm;
