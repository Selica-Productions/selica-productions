import { useRef, useEffect, useState } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import axios from "axios";
import CountryModal from "../country-modal/country-modal";
import "/src/styles/animations.css"

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

      function style() {
        return {
          fillColor: "rgb(109, 187, 201)", 
          weight: 1,
          color: "#000000", 
          dashArray: "2",
          fillOpacity: 0.7,
        };
      }
      // --Add the countries to the map:--:
      const countriesLayer = L.geoJson( data, { style } ).addTo( map );

      // --Add the event click to each country ( layer )--:
      countriesLayer.eachLayer( (layer) => {
        layer.addEventListener( "click", () => {
          // --Get the name of the selected country--:
          const country = layer.feature.properties;
          setSelectedCountry( country );
        });

        //-- Hover on Country--
        layer.on("mouseover", () => {
          layer.setStyle({
            fillColor: " rgb(49, 149, 167)", 
          });
        });

        //-- Reset the style when mouse leaves the country--
        layer.on("mouseout", () => {
          countriesLayer.resetStyle(layer); 
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
    <div className="container my-3">
    <div className="d-flex flex-column align-items-center gap-4">
      <h1 className="text-center">
        🌍 Discover Movies by Country 🗺️
      </h1>
      <p className="typing fs-4 lead text-center text-muted">
        Click on any country on the map to discover the films produced there.
        Explore the unique cinematic culture of each region!
      </p>

      <div 
        id="map" 
        style={{ height: "600px", width: "100%" }} 
        ref={mapRef}
        className="rounded-3 shadow-lg"
      ></div>

      {selectedCountry && <CountryModal country={selectedCountry} />}
    </div>
  </div>
  )
}

export default CountryMap;