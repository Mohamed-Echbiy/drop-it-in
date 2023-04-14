import { FC } from "react";

const Header: FC = () => {
  return (
    <header className='w-full h-[80px] flex justify-center items-center mb-12'>
      <div className='navbar'>
        <a className='btn btn-ghost normal-case text-xl mx-auto'>DRAG IN</a>
      </div>
    </header>
  );
};

export default Header;
