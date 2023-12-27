import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./Layout";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Daftar = () => {
  const [nama, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHP, setNoHP] = useState("");
  const [semester, setSemester] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [ipk, setIPK] = useState("");
  const [beasiswa, setBeasiswa] = useState("");
  const [dokumen, setDokumen] = useState("");
  const [msg, setMsg] = useState("");
  const [emailValMsg, setEmailValMsg] = useState("");
  const navigate = useNavigate();

  const [pendaftar, setPendaftar] = useState([]);
  const [prevIPK, setPrevIPK] = useState(3);

  const getPendaftar = async () => {
    await axios
      .get("http://localhost:5000/pendaftar")
      .then((response) => {
        setPendaftar(response.data);
      })
      .catch((error) => toast.error(`${error.data.message}`));
  };

  useEffect(() => {
    getPendaftar();
  }, []);

  const getFilteredPendaftar = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter((pendaftar) => pendaftar.name.includes(query));
  };

  const filteredPendaftar = getFilteredPendaftar(nama, pendaftar);

  const setIPKTerdaftar = () => {
    setTimeout(() => {
      if (filteredPendaftar.length > 0) {
        setPrevIPK(filteredPendaftar[0].ipk);
      } else {
        setPrevIPK("");
      }
    }, 5000);
  };

  const daftarBeasiswa = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/pendaftar", {
        name: nama,
        email: email,
        noHP: noHP,
        semester: semester,
        ipk: ipk,
        jenis_beasiswa: beasiswa,
        evidence: dokumen,
        status_pengajuan: "belum diverifikasi",
      })
      .then((response) => {
        toast.success(`${response.data.msg}`);
        setTimeout(() => {
          navigate("/hasil");
        }, 5000);
      })
      .catch((error) => {
        if (error.response) {
          setMsg(error.response.data.message);
          toast.error(`${msg}`);
        }
      });
  };

  const validateEmail = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      setEmailValMsg("Email yang Anda masukan valid");
    } else {
      setEmailValMsg("Email yang Anda masukan tidak valid");
    }
  };

  const checkIPK = (prevIPK) => {
    if (parseFloat(prevIPK) < 3) {
      return (
        <input
          type="number"
          step="0.01"
          placeholder="E.g. 3,5"
          id="ipk"
          className="input input-bordered input-error w-full max-w-xs text-black"
          value={prevIPK}
          readOnly
        ></input>
      );
    } else if (parseFloat(prevIPK) > 3) {
      document.getElementById("beasiswa").focus();
      return (
        <input
          type="number"
          step="0.01"
          placeholder="E.g. 3,5"
          id="ipk"
          className="input input-bordered input-error w-full max-w-xs text-black"
          value={prevIPK}
          readOnly
        ></input>
      );
    } else {
      // untuk pendaftar baru memasukan ipk
      return (
        <input
          type="number"
          step="0.01"
          placeholder="E.g. 3,5"
          id="ipk"
          className="input input-bordered input-error w-full max-w-xs text-black"
          value={ipk}
          onChange={(e) => setIPK(e.target.value)}
        ></input>
      );
    }
  };

  return (
    <Layout>
      <div className="flex h-screen justify-center">
        <ToastContainer />
        <div className="container w-4/5 pt-4 lg:flex lg:flex-col lg:place-items-center">
          <h1 className="text-xl font-bold mb-4">Daftar</h1>
          <form
            className="form-container grid gap-2 lg:gap-4 p-12 rounded-lg bg-primary text-white lg:max-w-fit"
            onSubmit={(e) => daftarBeasiswa(e)}
          >
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-2 max-w-lg">
              <span className="flex items-center">Nama</span>
              <input
                type="text"
                placeholder="E.g. Maulana Dimyati"
                className="input input-bordered input-error w-full max-w-xs text-black"
                id="name"
                value={nama}
                onChange={(e) => {
                  setName(e.target.value);
                  setIPKTerdaftar();
                }}
                required
              />
            </div>
            <div className="grid grid-flow-row lg:grid-cols-2 gap-2 max-w-lg">
              <span className="flex items-center">Email</span>
              <Input
                type={"email"}
                placeholder={"E.g. maulanadimyati24@gmail.com"}
                id={"email"}
                value={email}
                onChange={setEmail}
                validateEmail={validateEmail}
              />
              <div className="hidden lg:block"></div>
              <span className="flex gap-2 items-center text-xs">
                {emailValMsg}
                {emailValMsg === "Email yang Anda masukan valid" ? (
                  <FaCheck />
                ) : (
                  <div className="hidden" />
                )}
                {emailValMsg === "Email yang Anda masukan tidak valid" ? (
                  <ImCross />
                ) : (
                  <div className="hidden" />
                )}
              </span>
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-2 max-w-lg">
              <span className="lg:flex-1 flex items-center">No. Handphone</span>
              <Input
                type={"text"}
                placeholder={"E.g. 087855237969"}
                id={"noHP"}
                value={noHP}
                onChange={setNoHP}
              />
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-2 max-w-lg">
              <span className="flex items-center">Semester saat ini</span>
              {/* <Select id={"semester"} value={semester} onChange={setSemester} /> */}
              <select
                className="select select-error w-full max-w-xs text-black flex items-center"
                id={"semester"}
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-2 max-w-lg">
              <span className="flex items-center">IPK terakhir</span>
              {checkIPK(prevIPK)}
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-2 max-w-lg">
              <span className="flex items-center">Pilihan Beasiswa</span>
              {parseFloat(prevIPK) < 3 ? (
                <select
                  className="select select-error w-full max-w-xs text-black flex items-center"
                  id={"beasiswa"}
                  disabled
                >
                  <option value={"Beasiswa International"}>
                    Beasiswa International
                  </option>
                </select>
              ) : (
                <select
                  className="select select-error w-full max-w-xs text-black flex items-center"
                  id={"beasiswa"}
                  value={beasiswa}
                  onChange={(e) => setBeasiswa(e.target.value)}
                  required
                >
                  <option value={"Beasiswa International"}>
                    Beasiswa International
                  </option>
                  <option value={"Beasiswa Akademik"}>Beasiswa Akademik</option>
                  <option value={"Beasiswa Non-Akademik"}>
                    Beasiswa Non-Akademik
                  </option>
                </select>
              )}
            </div>
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 gap-2 max-w-lg">
              <span className="flex items-center">Dokumen</span>
              {parseFloat(prevIPK) < 3 ? (
                <input
                  type="file"
                  className="file-input input-bordered input-error w-full max-w-xs flex items-center"
                  id="dokumen"
                  disabled
                />
              ) : (
                <input
                  type="file"
                  className="file-input input-bordered input-error w-full max-w-xs flex items-center"
                  id="dokumen"
                  value={dokumen}
                  onChange={(e) => setDokumen(e.target.value)}
                />
              )}
            </div>
            <div className="grid grid-flow-row gap-2 mt-4">
              <button type="button" className="btn">
                <a
                  href="/"
                  className="w-full h-full flex justify-center items-center"
                >
                  Batal
                </a>
              </button>
              <button type="submit" className="btn btn-neutral">
                Daftar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Daftar;
