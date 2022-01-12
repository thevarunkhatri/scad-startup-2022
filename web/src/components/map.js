import React, {useState, useEffect, useRef} from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapMarker from "../assets/img/sessions/mapMarker.png"

const containerStyle = {
    width: '100%',
    paddingTop: "100%"
};



const MyMapComponent = (props) => {

    const ref = useRef();

    let center = {
      lat: 32.080,
      lng: -81.091
    };

    if(props.location) {
      center = {
        lat: props.location.lat,
        lng: props.location.lng
      }
    }

    useEffect(() => {
      const mapping = new window.google.maps.Map(ref.current, {
        mapId: "3c66a21d62a1ee76",
        center,
        zoom: 16,
        disableDefaultUI: true,
      });

      new window.google.maps.Marker({
        position: center,
        map: mapping,
        icon: MapMarker,
      });
    
    });
  
    return <div style={containerStyle} ref={ref} id="map" />;
}

const Map = (props) => {
    
    // const render = (status: Status) => {
    //     return <h1>{status}</h1>;
    //   };

    return(
        <Wrapper apiKey={process.env.GATSBY_GOOGLE_API_KEY}>
            <MyMapComponent location={props.location}/>
        </Wrapper>
    )
};

export default Map;
