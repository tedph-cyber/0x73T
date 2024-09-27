export default function Footer() {
    return (
      <div className="bg-white dark:bg-black border-t dark:border-t-[#403d39] border-b-[#e8e6e5] text-sm leading-7 text-center pt-5 pb-5 px-6 space-y-3">
        <p className="text-black dark:text-white">
          &copy; {new Date().getFullYear()}
          <b> 0x73tari.eth</b> | All Rights Reserved.
        </p>
      </div>
    );
}