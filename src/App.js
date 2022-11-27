// import './App.css';
import { useState } from "react";
import Input from "./components/Input";
import logo from "./logo.png";
import WordcloudImg from "./images/wcloud.png";
import Wordcloud from "./components/Wordcloud";

function App() {
  const [topic, setTopic] = useState("");
  const [placeholder, setPlaceholder] = useState("Topik yang kamu minati");
  const [btnval, setBtnval] = useState("Selanjutnya");
  const [fetching, setFetching] = useState(null);
  const [wordcloud, setWordcloud] = useState(null);

  const onChange = (event) => setTopic(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaceholder("Jumlah tweet yang ingin ditelusuri");
    console.log(topic);

    setBtnval("Buat Wordcloud");
    setTopic("");

    if (btnval === "Buat Wordcloud") {
      setFetching(true);
      setTimeout(() => {
        setWordcloud(WordcloudImg);
        setFetching(false);
      }, 5000);
    }
  };

  const handleNext = (e) => {
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
    console.log();
    // refresh page
    window.location.reload();
  };
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
      <div className="wrapper flex flex-col items-center justify-center my-auto  pt-14 ">
        <div className="">
          <img src={logo} alt="" className="md:w-52 w-40" />
        </div>
        {wordcloud ? (
          <Wordcloud WordcloudImg={wordcloud} handleBack={handleBack} />
        ) : (
          <Input
            placeholder={placeholder}
            topic={topic}
            onChange={onChange}
            btnval={btnval}
            fetching={fetching}
            handleSubmit={handleSubmit}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}
      </div>
 
      <FooterCopyright />
    </div>
  );
}

export default App;
