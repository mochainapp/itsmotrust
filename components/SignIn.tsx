import Image from "next/future/image";
import LogoImage from "../images/logo.png";

export const SignIn = ({ logIn }: any) => {
  return (
    <div className="row vh-100 justify-content-center align-items-center">
      <div className="col-lg-6 col-md-6">
        <div className="login-card">
          <Image
            className="logo"
            src={LogoImage}
            width={100}
            height={100}
            alt={process.env.NEXT_PUBLIC_APP_NAME ?? "EscrowHub"}
          />
          <button
            className="btn singInButton btn-warning btn-lg w-100"
            onClick={logIn}
          >
            Continue to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
