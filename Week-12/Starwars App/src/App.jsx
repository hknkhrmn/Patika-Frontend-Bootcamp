import { useState, useEffect } from 'react';
import fallbackShip from './assets/fallback-ship.jpg';

const API_BASE = 'https://swapi.dev/api';

const getShipId = (url) => url.split('/').filter(Boolean).pop();

const getShipSources = (id) => [
  `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/starships/${id}.jpg`,
  `https://raw.githubusercontent.com/eoebio/starwars-visualguide/master/assets/img/starships/${id}.jpg`,
  `https://raw.githubusercontent.com/FedeSca/star-wars-wiki/master/public/assets/img/starships/${id}.jpg`
];

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
    <div className={`relative ${className} overflow-hidden`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-space via-void to-space">
          <div className="absolute inset-0 animate-pulse bg-plasma/10" />
        </div>
      )}
      <img
        key={sources[index]}
        src={sources[index]}
        onError={handleError}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full ${loaded ? 'opacity-100' : 'opacity-0'} object-contain transition-opacity duration-500`}
        alt=""
      />
      {loaded && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-void/60 via-transparent to-transparent" />
      )}
    </div>
  );
};

export default function App() {
  const [ships, setShips] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

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
    <div className="h-screen flex flex-col bg-void relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-plasma/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hyperspace/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className="relative border-b border-empire/40 bg-black/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-empire/10 to-transparent" />
        <div className="relative p-6 text-center">
          <div className="inline-block">
            <h1 className="font-orbitron text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-warning via-plasma to-hyperspace tracking-widest">
              GALACTIC DATABASE
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-empire to-transparent mt-2" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Panel - Ship List */}
        <aside className="w-full md:w-96 border-r border-plasma/30 flex flex-col bg-space/50 backdrop-blur-sm relative z-10">
          {/* Search Box */}
          <div className="p-4">
            <div className="relative group">
              <input
                placeholder="SEARCH SHIP..."
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/80 border-2 border-plasma/40 p-4 text-sm text-plasma font-rajdhani font-semibold tracking-wider placeholder:text-plasma/40 focus:border-hyperspace focus:outline-none focus:ring-2 focus:ring-hyperspace/30 transition-all duration-300"
              />
              <div className="absolute inset-0 border-2 border-hyperspace/0 group-focus-within:border-hyperspace/50 pointer-events-none transition-all duration-300" style={{ transform: 'translate(4px, 4px)' }} />
            </div>
          </div>

          {/* Ship List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {loading && (
              <div className="text-sm text-plasma/60 font-rajdhani tracking-wide animate-pulse">
                ⟳ LOADING SHIPS...
              </div>
            )}

            {ships.map((ship, idx) => (
              <div
                key={ship.url}
                onClick={() => setSelected(ship)}
                className={`p-3 border-2 flex gap-4 cursor-pointer transition-all duration-300 animate-fadeIn relative group ${
                  selected?.url === ship.url
                    ? 'border-hyperspace bg-gradient-to-r from-hyperspace/20 to-plasma/10 shadow-lg shadow-hyperspace/30'
                    : 'border-plasma/30 bg-black/40 hover:border-plasma hover:bg-plasma/5'
                }`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="relative">
                  <SmartImage shipUrl={ship.url} className="w-20 h-16 rounded" />
                  <div className="absolute inset-0 border-2 border-plasma/20 rounded pointer-events-none" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h4 className="text-sm font-orbitron font-bold text-warning tracking-wide">
                    {ship.name}
                  </h4>
                  <p className="text-xs text-plasma/70 font-rajdhani mt-1">
                    {ship.model}
                  </p>
                </div>
                {selected?.url === ship.url && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-hyperspace rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Right Panel - Ship Details */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto relative">
          {selected && (
            <div className="max-w-4xl mx-auto animate-fadeIn">
              {/* Ship Name with Glowing Effect */}
              <div className="mb-8 relative">
                <h2 className="text-5xl md:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-warning via-plasma to-hyperspace">
                  {selected.name}
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-empire via-plasma to-hyperspace mt-4" />
              </div>

              {/* Ship Image with Hologram Effect */}
              <div className="relative mb-10 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-plasma via-hyperspace to-warning rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative border-2 border-plasma/50 bg-black/60 backdrop-blur-sm p-1 rounded-lg overflow-hidden">
                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-plasma/10 to-transparent h-full w-full" style={{ animation: 'scan 4s linear infinite' }} />
                  </div>
                  
                  <SmartImage key={selected.url} shipUrl={selected.url} className="w-full h-96 rounded" />
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-hyperspace" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-hyperspace" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-hyperspace" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-hyperspace" />
                </div>
              </div>

              {/* Ship Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DataField label="CREW CAPACITY" value={selected.crew}  />
                <DataField label="PASSENGERS" value={selected.passengers} />
                <DataField label="MAX SPEED" value={selected.max_atmosphering_speed}  />
                <DataField label="CARGO CAPACITY" value={selected.cargo_capacity} />
                <DataField label="MANUFACTURER" value={selected.manufacturer}  fullWidth />
                <DataField label="CLASS" value={selected.starship_class}  />
                <DataField label="HYPERDRIVE RATING" value={selected.hyperdrive_rating}  />
              </div>
            </div>
          )}

          {!selected && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">🚀</div>
                <p className="text-xl font-orbitron text-plasma/50">
                  SELECT A STARSHIP
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

const DataField = ({ label, value, icon, fullWidth = false }) => (
  <div className={`relative group ${fullWidth ? 'md:col-span-2' : ''}`}>
    <div className="border-2 border-plasma/30 bg-black/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-hyperspace hover:bg-plasma/5 hover:shadow-lg hover:shadow-plasma/20">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <div className="text-xs font-orbitron font-bold text-plasma/60 tracking-widest">
          {label}
        </div>
      </div>
      <div className="text-2xl font-rajdhani font-bold text-warning pl-11">
        {value}
      </div>
      
      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-plasma to-hyperspace group-hover:w-full transition-all duration-500" />
    </div>
  </div>
);