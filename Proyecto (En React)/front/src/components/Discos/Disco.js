import React from 'react';

const Disco = (props) => {
    const { anio, spotifyLink, bandcampLink, youtubeLink, tapa, tapaAlt, pieDisco1, pieDisco2 } = props
    return (
        <div className="disco">
            <div className="cabecera_disco">
                <h3>• {anio}</h3>
                <div className="escuchar">
                    {spotifyLink != 0 &&
                        <a href={spotifyLink} target="_blank"><i
                            className="fa fa-spotify"></i></a>
                    }
                    {bandcampLink != 0 &&
                        <a href={bandcampLink} target="_blank"><i
                            className="fa fa-bandcamp"></i></a>
                    }
                    {youtubeLink != 0 &&
                        <a href={youtubeLink} target="_blank"><i
                            className="fa fa-youtube-play"></i></a>
                    }
                </div>
            </div>
            <img src={tapa} alt={tapaAlt} />

            <div className="pie_disco">
                {pieDisco1 != 0 &&
                    <h3>{pieDisco1}<br/>{pieDisco2}</h3>
                }
            </div>
        </div>
    );
}

export default Disco;