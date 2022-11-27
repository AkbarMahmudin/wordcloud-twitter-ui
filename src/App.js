// import './App.css';
import { useState } from "react";
import Input from "./components/Input";
import logo from "./logo.png";

function App() {
  const [topic, setTopic] = useState("");
  const [placeholder, setPlaceholder] = useState("Topik yang kamu minati");
  const [btnval, setBtnval] = useState("Selanjutnya");
  // const [wordcloud, setWordcloud] = useState({
  //   status: false,
  //   img: "",
  // });

  const onChange = (event) => setTopic(event.target.value);


  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaceholder("Jumlah tweet yang ingin ditelusuri");
    console.log(topic);

    setBtnval("Buat Wordcloud");
    setTopic("");
  };

  const handleBack = (e) => {
    e.preventDefault();
    setPlaceholder("Topik yang kamu minati");
    setBtnval("Selanjutnya");
    setTopic("");
  }

  
  
  function FooterCopyright() {
    return (
      <div className="flex flex-col absolute bottom-5 left-0 right-0">
        {/* Designed by */}
        <div className="flex justify-center items-center gap-2">
          <span className="text-white text-opacity-30 text-sm">
            Designed by Kelompok 2
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#14171A] w-screen h-screen">
      {/* wrapper */}
      <div className="wrapper flex flex-col items-center justify-center my-auto  pt-20 ">
        <div className="">
          <img src={logo} alt="" className="md:w-full w-44" />
        </div>

        <Input 
          placeholder={placeholder}
          topic={topic}
          onChange={onChange}
          btnval={btnval}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />

      </div>
      <FooterCopyright />
    </div>
  );
}

export default App;
