import { v4 as uuidv4 } from 'uuid';

const Register = ({handleState}:any) => {
  const handleRegister = () => {
    const registrationData = {
      email: 'user@gmail.com',
      phoneNumber: '1234567890',
      username: 'user123',
      password: 'password123',
    };
    const userToken = uuidv4();
    localStorage.setItem(userToken, JSON.stringify(registrationData));
    handleState();
  }
  return (
    <div className="bg-[#E4DBF5] pl-[40px] pr-[40px] pb-[40px] pt-[20px] border-[grey] border-[1px] round-[5px] w-[550px] h-[590px] shadow-[rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;]">
        <div className="pb-[20px]">
        <div className="pb-[10px] text-[black] text-[18px] font-[15px]">Email Adress</div>
        <input className="border-[grey] border-[1px] p-[20px] w-[470px] h-[30px]" type="text" placeholder="Email Adress" ></input>
        </div>
        <div className="pb-[20px]">
        <div className="pb-[10px] text-[black] text-[18px] font-[15px]">Phone Number <small>optional</small></div>
        <input className="border-[grey] border-[1px] p-[20px] w-[470px] h-[30px]" type="text" placeholder="Phone Number" ></input>
        </div>
        <div className="pb-[20px]">
        <div className="pb-[10px] text-[black] text-[18px] font-[15px]">Username</div>
        <input className="border-[grey] border-[1px] p-[20px] w-[470px] h-[30px]" type="text" placeholder="Username" ></input>
        </div>
        <div className="pb-[20px]">
        <div className="pb-[10px] text-[black] text-[18px] font-[15px]">Password</div>
        <input className="border-[grey] border-[1px] p-[20px] w-[470px] h-[30px]" type="text" placeholder="Password" ></input>
        </div>
        <div className="pb-[15px]">
        <div className="pb-[10px] text-[black] text-[18px] font-[15px]">Confirm Password*</div>
        <input className="border-[grey] border-[1px] p-[20px] w-[470px] h-[30px]" type="text" placeholder="Confirm Password"></input>
        </div>
        <button className="border-[grey] border-[1px] round-[5px] pl-[20px] pt-[3px] pr-[20px] pb-[6px] ml-[357px] bg-[#FBA31A] text-[20px] hover:text-[white] font-[20px]" onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register