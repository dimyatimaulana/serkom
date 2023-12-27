import Graduation from "../assets/graduation3.jpg";

const Welcome = () => {
  return (
    <div
      className="flex justify-center h-screen"
      style={{ backgroundImage: `url(${Graduation})` }}
    >
      <div className="flex items-center">
        <div className="grid p-4 text-white gap-3 lg:px-12">
          <h1 className="font-bold text-2xl md:text-5xl">
            Selamat Datang di Portal Pendaftaran Beasiswa
          </h1>
          <h1 className="font-bold text-xl md:text-3xl">
            Untuk melanjutkan silahkan pilih menu daftar
          </h1>
          <div className="p-4 ps-0">
            <a href="/daftar" className="p-4 ps-6 pe-6 bg-black rounded-xl">
              Daftar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
