import Link from "next/link";

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center gap-5 flex-col'>
      <div className='h-12 flex justify-center items-center text-xl rounded-3xl bg-rose-400 min-w-[140px] text-white hover:opacity-80'>
        {" "}
        <Link href='/signup'>Sign Up</Link>{" "}
      </div>
      <div className='h-12 flex justify-center items-center text-xl rounded-3xl bg-white min-w-[140px] text-rose-400 hover:opacity-80'>
        {" "}
        <Link href='/login'>Login</Link>{" "}
      </div>
    </div>
  );
}
