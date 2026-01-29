import { useState, useEffect } from 'react';
import fallbackShip from './assets/fallback-ship.jpg';

const API_BASE = 'https://swapi.dev/api';

const getShipId = (url) => url.split('/').filter(Boolean).pop();

const getShipSources = (id) => [
  `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${id}.jpg`,
  `https://raw.githubusercontent.com/eoebio/starwars-visualguide/master/assets/img/starships/${id}.jpg`,
  `https://raw.githubusercontent.com/FedeSca/star-wars-wiki/master/public/assets/img/starships/${id}.jpg`
];


// ================= SMART IMAGE =================
const SmartImage = ({ shipUrl, className }) => {
  const id = getShipId(shipUrl);
  const sources = [...getShipSources(id), fallbackShip];

  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setIndex(0);
    setLoaded(false);
  }, [shipUrl]);

  const handleError = () => {
    if (index < sources.length - 1) {
      setIndex(prev => prev + 1);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-neutral-800" />}
      <img
        key={sources[index]}
        src={sources[index]}
        onError={handleError}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${loaded ? 'opacity-100' : 'opacity-0'} object-contain transition-opacity duration-300`}
        alt=""
      />
    </div>
  );
};


// ================= APP =================
export default function App() {
  const [ships, setShips] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // 🔥 TÜM SAYFALARI ÇEKEN FONKSİYON
  const fetchShips = async (query = '') => {
    setLoading(true);

    let url = `${API_BASE}/starships/?search=${query}`;
    let allShips = [];

    try {
      while (url) {
        const res = await fetch(url);
        const data = await res.json();
        allShips = [...allShips, ...data.results];
        url = data.next;
      }

      setShips(allShips);
      if (allShips.length) setSelected(allShips[0]);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchShips();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => fetchShips(search), 500);
    return () => clearTimeout(t);
  }, [search]);

  return (
    <div className="h-screen flex flex-col bg-void">
      <header className="border-b border-red-600/40 p-6 text-center bg-black">
        <h1 className="font-orbitron text-3xl text-accent tracking-widest">
          GALACTIC DATABASE
        </h1>
      </header>

      <div className="flex flex-1 overflow-hidden">

        {/* SOL PANEL */}
        <aside className="w-full md:w-80 border-r border-gray-800 flex flex-col bg-panel">
          <div className="p-4">
            <input
              placeholder="SEARCH SHIP..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-gray-700 p-3 text-xs text-accent"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {loading && <div className="text-xs text-gray-500">Loading ships...</div>}

            {ships.map((ship) => (
              <div
                key={ship.url}
                onClick={() => setSelected(ship)}
                className={`p-2 border flex gap-3 cursor-pointer ${
                  selected?.url === ship.url ? 'border-accent bg-accent/10' : 'border-gray-800'
                }`}
              >
                <SmartImage shipUrl={ship.url} className="w-16 h-12" />
                <div>
                  <h4 className="text-xs text-accent">{ship.name}</h4>
                  <p className="text-[10px] text-gray-500">{ship.model}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* SAĞ PANEL */}
        <main className="flex-1 p-10 overflow-y-auto">
          {selected && (
            <div className="max-w-3xl mx-auto border border-gray-800 bg-panel p-8">
              <h2 className="text-4xl text-accent mb-6">{selected.name}</h2>

              <div className="border border-accent/30 bg-black p-4 mb-8">
                <SmartImage key={selected.url} shipUrl={selected.url} className="w-full h-80" />
              </div>

              <div className="grid grid-cols-2 gap-6 text-gray-300">
                <DataField label="Crew" value={selected.crew} />
                <DataField label="Passengers" value={selected.passengers} />
                <DataField label="Speed" value={selected.max_atmosphering_speed} />
                <DataField label="Cargo" value={selected.cargo_capacity} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const DataField = ({ label, value }) => (
  <div>
    <div className="text-xs text-gray-500">{label}</div>
    <div className="text-lg">{value}</div>
  </div>
);
