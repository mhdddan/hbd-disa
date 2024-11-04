import foto from "../foto1.jpg";
function Profile() {
    return (
      <img
        src={foto.src}
        alt="Disa Indah Ramadanti"
        className="fotoku"
      />
    );
  }

export default function Hero () {
    return (
        
                <div className="container mx-auto p-2 text-center">
                <h1 className="text-white-400 font-bold" >Happy Birthday</h1>
                <h1 className="text-3xl text-blue-900 font-bold">Disa Indah Ramadanti</h1>
                <Profile />
             
                <p>Saya sedang ulang tahun ke-21</p>
                </div>
    );
}