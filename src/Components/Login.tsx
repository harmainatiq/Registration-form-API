import { useState } from "react";

const Login = ({ handleState }: any) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleLogin = () => {
    

    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString);

    if (
      userData.email === email &&
      userData.password === password
    ) {
      // Successful login
      alert("Login Successful!");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="bg-[#E4DBF5] p-[40px] mt-[130px] ml-[70px] border-[grey] border-[1px] round-[5px] w-[390px] h-[340px] shadow-[rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;]">
      <div className="pb-[20px]">
        <div className="pb-[10px] text-[black] text-[18px] font-[15px]">
          Email or Phone Number
        </div>
        <input
        onChange={(e) => setEmail(e.target.value) }
          className="border-[grey] border-[1px] p-[20px] w-[300px] h-[30px]"
          type="text"
          placeholder="Email or Phone Number"
        ></input>
      </div>
      <div className="pb-[15px]">
        <div className="pb-[10px] text-[black] text-[18px] font-[15px]">
          Password
        </div>
        <input
              onChange={(e) => setPassword(e.target.value) }
          className="border-[grey] border-[1px] p-[20px] w-[300px] h-[30px]"
          type="text"
          placeholder="Password"
        ></input>
      </div>
      <button className="ml-[240px] pb-[15px]" onClick={handleState}>
        Register
      </button>
      <button
        className="border-[grey] border-[1px] round-[5px] pl-[20px] pt-[3px] pr-[20px] pb-[6px] bg-[#FBA31A] text-[20px] hover:text-[white] font-[20px]"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
