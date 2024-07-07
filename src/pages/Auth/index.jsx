import { useState } from "react";

function Auth() {
  const [isLoged, setIsLoged] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPasswd, setConfirmationPasswd] = useState("");

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangesConfirmationPasswd = (e) => {
    setConfirmationPasswd(e.target.value);
  };

  return (
    <div className="w-[100%] min-h-[100vh] flex justify-center items-center">
      <div className="w-[430px] min-h-[434px] shadow-2xl bg-[white] rounded-[12px] px-[28px]">
        {isLoged ? (
          <div className="my-9">
            <h1 className="mt-[48px] text-center text-[36px] text-[#151515]">
              Sign in
            </h1>
            <form action="">
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor=""
                  className="mb-1 font-sans text-[14px] text-[#151515]"
                >
                  Username
                </label>
                <input
                  className="w-full rounded-[6px] border-[1px] border-[solid] border-[#EBEBEB] px-[16px] py-[14px]"
                  value={userName}
                  type="text"
                  name=""
                  id=""
                  placeholder="john doe"
                  onChange={handleChangeUserName}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="mb-1 font-sans text-[14px] text-[#151515]"
                >
                  Password
                </label>
                <input
                  className="w-full rounded-[6px] border-[1px] border-[solid] border-[#EBEBEB] px-[16px] py-[14px]"
                  type="password"
                  value={password}
                  name=""
                  id=""
                  placeholder="Repeat the password"
                  onChange={handleChangePassword}
                />
              </div>
              <button
                type="submit"
                className="w-full min-h-[40px] bg-[#6200EE] rounded-[4px] text-[#FEFEFE] text-base"
              >
                Submit
              </button>
            </form>
            <p className="mt-[12px] text-center font-light">
              Already signed up?
              <span
                className="text-[#6200EE] pl-1 cursor-pointer"
                onClick={() => setIsLoged(!isLoged)}
              >
                Go to sign up.
              </span>
            </p>
          </div>
        ) : (
          <div className="my-9">
            <h1 className="mt-[48px] text-center text-[36px] text-[#151515]">
              Sign up
            </h1>
            <form action="">
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor=""
                  className="mb-1 font-sans text-[14px] text-[#151515]"
                >
                  Username
                </label>
                <input
                  className="w-full rounded-[6px] border-[1px] border-[solid] border-[#EBEBEB] px-[16px] py-[14px]"
                  value={userName}
                  type="text"
                  name=""
                  id=""
                  placeholder="john doe"
                  onChange={handleChangeUserName}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="mb-1 font-sans text-[14px] text-[#151515]"
                >
                  Password
                </label>
                <input
                  className="w-full rounded-[6px] border-[1px] border-[solid] border-[#EBEBEB] px-[16px] py-[14px]"
                  type="password"
                  value={password}
                  name=""
                  id=""
                  placeholder="Repeat the password"
                  onChange={handleChangePassword}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="mb-1 font-sans text-[14px] text-[#151515]"
                >
                  Confirm password
                </label>
                <input
                  className="w-full rounded-[6px] border-[1px] border-[solid] border-[#EBEBEB] px-[16px] py-[14px]"
                  type="password"
                  value={confirmationPasswd}
                  name=""
                  id=""
                  placeholder="Enter your confirm password"
                  onChange={handleChangesConfirmationPasswd}
                />
              </div>
              <button
                type="submit"
                className="w-full min-h-[40px] bg-[#6200EE] rounded-[4px] text-[#FEFEFE] text-base"
              >
                Submit
              </button>
            </form>
            <p className="mt-[12px] text-center font-light">
              Already signed up?
              <span
                className="text-[#6200EE] pl-1 cursor-pointer"
                onClick={() => setIsLoged(!isLoged)}
              >
                Go to sign in.
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
