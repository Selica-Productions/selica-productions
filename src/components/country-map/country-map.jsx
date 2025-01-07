import { useRef, useEffect, useState } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import axios from "axios";
import CountryModal from "../country-modal/country-modal";

function CountryMap() {
  // --Ref-- -> div element that will contain the map
  const mapRef = useRef();

  //--State selected country:--
  const [ selectedCountry, setSelectedCountry ] = useState( null );

  // --File path-- ( data of countries )
  const countriesJSON = "/src/assets/geojson/countries.json";

  useEffect(() => {
    // -- Instance the map --:
    // 0,0 cordinates ( centered ) and zoom 2:
    const map = L.map( mapRef.current ).setView([ 0, 0 ], 2);

    // -- Add the tile layer ( OpenStreetMap and CartoDB ) --:
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
      minZoom: 2, 
      maxZoom: 4, 
    }).addTo( map );

    // -- Get the countries --:
    axios.get( countriesJSON )
    .then( (response) => {
      // --Set the countries--:
      const data = response.data;
      // --Add the countries to the map:--:
      const countriesLayer = L.geoJson( data ).addTo( map );

      // --Add the event click to each country ( layer )--:
      countriesLayer.eachLayer( (layer) => {
        layer.addEventListener( "click", () => {
          // --Get the name of the selected country--:
          const country = layer.feature.properties;
          setSelectedCountry( country );
        });
      })
    })
    .catch( (error) => {
      console.log( "Error loading GeoJson -> ", error );
    });

    // --Remove the map when the component is unmounted--:
    return () => {
      map.remove();
    }

  }, [] );

  return (
    <div className="mx-5 my-3">
        <div className="d-flex flex-column gap-3">
          <h1>Countries Map</h1>
          <div id="map" style={{ height: "600px", width: "100%" }} ref={ mapRef }></div>
        </div>
        { selectedCountry && <CountryModal country = { selectedCountry }/> }
    </div>
  )
}

export default CountryMap;