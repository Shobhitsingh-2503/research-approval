import { useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import Card from "./components/card/Card";
import { abi, deployedAddress } from "./const.js";

function App() {
  const [cnct, setCnct] = useState("CONNECT");
  var [list, setList] = useState([]);
  const [topic, setTopic] = useState("");
  const [auth, setAuth] = useState("");
  var [file, setFile] = useState();
  var [cid, setCid] = useState("");

  useState(async () => {
    if (window.ethereum) {
      const provider = new ethers.JsonRpcProvider(
        process.env.REACT_APP_PROVIDER_API_KEY
      );
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(deployedAddress, abi, signer);
      contract.getPapers().then((res) => {
        setList(res);
      });
    } else {
      console.log(`no window.ethreum`);
    }
  });

  async function connect() {
    if (window.ethereum) {
      const provider = new ethers.JsonRpcProvider(
        process.env.REACT_APP_PROVIDER_API_KEY
      );
      const signer = await provider.getSigner();
      await signer.getAddress().then((res) => {
        setCnct(res.toString());
      });
    } else {
      alert(`Install a Wallet`);
    }
  }

  async function submit() {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_JWT}`,
      },
      body: formData,
    });
    await res.json().then(async (rslt) => {
      setCid(await rslt.IpfsHash);
      console.log(cid);
    });
    const provider = new ethers.JsonRpcProvider(
      process.env.REACT_APP_PROVIDER_API_KEY
    );
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(deployedAddress, abi, signer);
    await contract
      .submitPaper(topic, auth, cid)
      .then(async () => {
        await contract.getPapers().then((res) => {
          setList(res);
        });
      })
      .catch((err) => {
        console.error(err);
        alert(err.reason);
      });
  }
  return (
    <div>
      <div id="nav" align="right">
        <button onClick={connect}>{cnct}</button>
      </div>
      <div align="center">
        <u>UPLOAD YOUR RESEARCH PAPER</u>
      </div>
      <div id="upload" align="center">
        <div>
          <input
            required
            type="text"
            placeholder="Enter the topic of Research"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            required
            placeholder="Enter Author's name"
            type="text"
            onChange={(e) => {
              setAuth(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="file"
            required
            accept="application/pdf"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          (please upload only PDF file)
        </div>
        <button onClick={submit}>SUBMIT</button>
      </div>
      <div align="center">
        <u>LIST OF SUBMITTED RESEARCH PAPERS</u>
      </div>

      <div id="display" align="center">
        {list?.map((items, key) => {
          return (
            <Card
              index={key}
              auth={items.auth}
              topic={items.topic}
              cid={items.cid}
              setList={setList}
              approval={parseInt(items.approval)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
