import { SignUpForm } from "@/components/auth/signup/companySignUp";
import "@/app/globals.css";

const SignUp = () => {
  return (
    <div className="Auth__mainContainer">
      <SignUpForm />
    </div>
  );
};

export default SignUp;