import Button from "./Button";
import ButtonBack from "./ButtonBack";

export default function Input({
  placeholder,
  topic,
  onChange,
  btnval,
  handleSubmit,
  handleBack,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="md:mt-20 mt-10 md:w-6/12 w-10/12 flex flex-col md:items-end items-center"
    >
      <input
        type={placeholder === "Jumlah tweet yang ingin ditelusuri" ? "number" : "text"}
        className="px-5 py-4 rounded-xl w-full bg-[#1E1E1E] placeholder:text-[#F5F8FA] placeholder:text-opacity-30 text-white placeholder-opacity-50  focus:outline-none"
        placeholder={placeholder}
        value={topic}
        onChange={onChange}
        required
      />

      <div className={`flex flex-col md:flex-row items-center w-full justify-end ${placeholder === "Jumlah tweet yang ingin ditelusuri" ? "justify-between" : ""}  `}>
        {placeholder === "Jumlah tweet yang ingin ditelusuri" ? <ButtonBack handleBack={handleBack} /> : ""}
        <Button value={btnval} />
      </div>
    </form>
  );
}
