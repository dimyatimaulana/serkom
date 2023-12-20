import { useEffect, useState } from "react";
import Layout from "./Layout";
import axios from "axios";

const Hasil = () => {
  const [pendaftar, setPendaftar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const rows = pendaftar.slice(firstIndex, lastIndex);
  const npage = Math.ceil(pendaftar.length / rowsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const getPendaftar = async () => {
    await axios
      .get("http://localhost:5000/pendaftar")
      .then(setIsLoading(true))
      .then((response) => {
        setPendaftar(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPendaftar();
  }, []);

  const prevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurPage = (number) => {
    setCurrentPage(number);
  };

  if (isLoading === true) {
    <Layout>
      <div className=" flex h-screen justify-center bg-background">
        <div className="container w-4/5 pt-4 lg:flex lg:flex-col lg:place-items-center">
          <h1 className="text-xl font-bold mb-4">Hasil</h1>
          <div className="pt-4 text-center">
            <span className="loading loading-spinner text-error"></span>
          </div>
        </div>
      </div>
    </Layout>;
  }

  if (pendaftar.length <= 0) {
    return (
      <Layout>
        <div className=" flex h-screen justify-center bg-background">
          <div className="container w-4/5 pt-4 lg:flex lg:flex-col lg:place-items-center">
            <h1 className="text-xl font-bold mb-4">Hasil</h1>
            <div className="pt-4 text-center">
              <h2>Tidak ada hasil untuk ditampilkan</h2>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className=" flex h-screen justify-center bg-background">
        <div className="container w-4/5 pt-4 lg:flex lg:flex-col lg:place-items-center">
          <h1 className="text-xl font-bold mb-4">Hasil</h1>
          <div className="grid gap-4">
            <div className="overflow-x-auto">
              <table className="table table-zebra border-collapse border border-slate-400">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-slate-300">Id</th>
                    <th className="border border-slate-300">Nama</th>
                    <th className="border border-slate-300">Email</th>
                    <th className="border border-slate-300">No. HP</th>
                    <th className="border border-slate-300">Semester</th>
                    <th className="border border-slate-300">IPK</th>
                    <th className="border border-slate-300">Jenis Beasiswa</th>
                    <th className="border border-slate-300">Bukti</th>
                    <th className="border border-slate-300">Status Ajuan</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((obj, idx) => {
                    return (
                      <tr key={idx}>
                        <th className="border border-slate-300">{obj.id}</th>
                        <td className="border border-slate-300">{obj.name}</td>
                        <td className="border border-slate-300">{obj.email}</td>
                        <td className="border border-slate-300">{obj.noHP}</td>
                        <td className="border border-slate-300">
                          {obj.semester}
                        </td>
                        <td className="border border-slate-300">{obj.ipk}</td>
                        <td className="border border-slate-300">
                          {obj.jenis_beasiswa}
                        </td>
                        <td className="border border-slate-300">
                          {obj.evidence}
                        </td>
                        <td className="border border-slate-300">
                          {obj.status_pengajuan}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <nav className="flex justify-center">
              <ul className="join">
                <li className="join-item btn border border-slate-300">
                  <a href="#" className="page-link " onClick={prevPage}>
                    Prev
                  </a>
                </li>
                {numbers.map((number, idx) => {
                  return (
                    <li
                      className={`join-item btn border border-slate-300 ${
                        currentPage === number ? "active" : ""
                      }`}
                      key={idx}
                    >
                      <a
                        href="#"
                        className="page-link"
                        onClick={() => changeCurPage(number)}
                      >
                        {number}
                      </a>
                    </li>
                  );
                })}
                <li className="join-item btn border border-slate-300">
                  <a href="#" className="page-link" onClick={nextPage}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hasil;
