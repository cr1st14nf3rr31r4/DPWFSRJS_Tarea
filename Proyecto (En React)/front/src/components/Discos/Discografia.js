import React from 'react';
import Disco from './Disco';

const Discografia = () => {
    return (
        <div className="discografia">
            <Disco
                anio="2022"
                spotifyLink="https://open.spotify.com/album/3QcqA0KY8yyjp6lO9PQVxT"
                bandcampLink={0}
                youtubeLink={0}
                tapa="img/discos/diarios.jpg"
                tapaAlt="Soko Rodrigo / Virginia Innocenti"
                pieDisco1={0}
            />

            <Disco
                anio="2020"
                spotifyLink="https://open.spotify.com/album/62lVfvl2oahbhMSNHltzAo"
                bandcampLink="https://reincidente.bandcamp.com/album/canciones-importadas"
                youtubeLink={0}
                tapa="img/discos/cometogether.jpg"
                tapaAlt="Reincidente"
                pieDisco1="[ Track 5 ]"
            />

            <Disco
                anio="2019"
                spotifyLink="https://open.spotify.com/album/4zdGgSwn6rKT5acYNEP7sX"
                bandcampLink={0}
                youtubeLink={0}
                tapa="img/discos/npd.jpg"
                tapaAlt="Nacho Ladisa"
                pieDisco1="Nacho Ladisa Blues Club"
                pieDisco2="No Puedo Dejarlo / Single"
            />

            <Disco
                anio="2019"
                spotifyLink="https://open.spotify.com/album/3Od7iF6mK7CjWZPRdZaEHT"
                bandcampLink={0}
                youtubeLink={0}
                tapa="img/discos/camalote.jpg"
                tapaAlt="Camalote"
                pieDisco1="ZZZ Musique Label"
            />

            <Disco
                anio="2018"
                spotifyLink="https://open.spotify.com/album/0JlTbD6m6IGTvPtDJq2OxR"
                bandcampLink={0}
                youtubeLink={0}
                tapa="img/discos/equilibrios.jpg"
                tapaAlt="Mauro Vicino"
                pieDisco1={0}
            />

            <Disco
                anio="2016"
                spotifyLink={0}
                bandcampLink={0}
                youtubeLink="https://youtu.be/dPQrtm5RGGk"
                tapa="img/discos/otraforma.jpg"
                tapaAlt="Alunco"
                pieDisco1={0}
            />

            <Disco
                anio="2014"
                spotifyLink="https://open.spotify.com/album/3B50rWyESffaZqoVEYF0VP"
                bandcampLink="https://aluncoquinteto.bandcamp.com/album/alunco"
                youtubeLink="https://youtu.be/dg6qqv6JClQ"
                tapa="img/discos/alunco.jpg"
                tapaAlt="Alunco"
                pieDisco1={0}
            />

            <Disco
                anio="2013"
                spotifyLink="https://open.spotify.com/album/4LzIz82EaSCAxyFa5qLDTk"
                bandcampLink={0}
                youtubeLink={0}
                tapa="img/discos/5guitarras.jpg"
                tapaAlt="Julio Fabiani"
                pieDisco1="[ Tracks 5 & 8 ]"
            />

            <Disco
                anio="2012"
                spotifyLink="https://open.spotify.com/album/56J3Z1ZxeMlGy8wYGGgWMW"
                bandcampLink="https://nacholadisabluesclub.bandcamp.com/album/nacho-ladisa-blues-club"
                youtubeLink={0}
                tapa="img/discos/bluesclub.jpg"
                tapaAlt="Nacho Ladisa"
                pieDisco1={0}
            />
        </div>
    );
}

export default Discografia;