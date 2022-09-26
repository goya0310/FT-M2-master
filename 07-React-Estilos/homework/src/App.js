import React from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </header>
      <main className={styles.Main}>
        <section className={styles.MainCity}>
          {/* solicita y pasa como props al modulo Card lo siguiente*/}
          <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
            // le digo a esta que es la Card ppal p/q' me pase otro estilo
            main={true}
          />
        </section>
        <section className={styles.ReelCities}>
          {/* pasa como props a Cards las ciudades en data.js  */}
          <Cards
            cities={data}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
