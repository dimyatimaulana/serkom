import Graduation from "../assets/graduation3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1200, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div
      className="flex justify-center h-screen"
      style={{ backgroundImage: `url(${Graduation})` }}
    >
      <div className="flex items-center">
        <div className="grid p-4 text-white gap-3 lg:px-12">
          <h1 className="font-bold text-2xl md:text-5xl" data-aos="fade-up">
            Selamat Datang di Portal Pendaftaran Beasiswa
          </h1>
          <h1 className="font-bold text-xl md:text-3xl" data-aos="fade-up">
            Untuk melanjutkan silahkan pilih menu daftar
          </h1>
          <div className="p-4 ps-0" data-aos="fade-up">
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
