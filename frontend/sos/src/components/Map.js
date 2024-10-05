// import React, { useState, useEffect } from 'react';
// import ReactMapGL, { Marker, Popup } from 'react-map-gl';

// const MapComponent = ({ setLocationLink }) => {
//   const [viewport, setViewport] = useState({
//     latitude: -1.2921,  // Default to Nairobi
//     longitude: 36.8219,
//     zoom: 10,
//     width: '100%',
//     height: '500px',
//   });

//   const [selectedLocation, setSelectedLocation] = useState(null); // For showing popups on marker click

//   const disasterLocations = [
//     { latitude: -1.286389, longitude: 36.817223, description: 'Flood Zone' },
//     { latitude: -1.2921, longitude: 36.8219, description: 'Earthquake Zone' },
//   ];

//   useEffect(() => {
//     const handleClickOutside = () => setSelectedLocation(null);
//     window.addEventListener('click', handleClickOutside);

//     // Clean up the event listener on component unmount
//     return () => window.removeEventListener('click', handleClickOutside);
//   }, []);

//   const handleMarkerClick = (location) => {
//     const link = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
//     setLocationLink(link);
//     setSelectedLocation(location); // Set the selected location for the popup
//   };

//   return (
//     <ReactMapGL
//       {...viewport}
//       mapboxApiAccessToken="pk.eyJ1IjoidXByaXNpbmdzdGFja3MiLCJhIjoiY20xdjg0eGVuMDhpMDJrcjNlMG9kbXFhOCJ9.WmrZEZO6MGJL7WNqcCYvLw"
//       onViewportChange={(nextViewport) => setViewport(nextViewport)}
//     >
//       {disasterLocations.map((location, index) => (
//         <Marker
//           key={index}
//           latitude={location.latitude}
//           longitude={location.longitude}
//         >
//           <div
//             style={{
//               backgroundColor: 'red',
//               width: '30px',
//               height: '30px',
//               borderRadius: '50%',
//               cursor: 'pointer',
//             }}
//             onClick={() => handleMarkerClick(location)}
//           />
//         </Marker>
//       ))}

//       {selectedLocation && (
//         <Popup
//           latitude={selectedLocation.latitude}
//           longitude={selectedLocation.longitude}
//           onClose={() => setSelectedLocation(null)}
//           closeOnClick={false}
//           anchor="top"
//         >
//           <div>
//             <h3>{selectedLocation.description}</h3>
//             <p>Coordinates: {selectedLocation.latitude}, {selectedLocation.longitude}</p>
//           </div>
//         </Popup>
//       )}
//     </ReactMapGL>
//   );
// };

// export default MapComponent;















import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapComponent.css'; // Optional: for container styling

const MapComponent = ({ setLocationLink }) => {
  useEffect(() => {
    // Set the Mapbox access token
    mapboxgl.accessToken = 'pk.eyJ1IjoidXByaXNpbmdzdGFja3MiLCJhIjoiY20xdjg0eGVuMDhpMDJrcjNlMG9kbXFhOCJ9.WmrZEZO6MGJL7WNqcCYvLw';

    // Initialize the map
    const map = new mapboxgl.Map({
      container: 'map-container', // ID of the HTML container
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [36.8219, -1.2921], // Longitude, Latitude for Nairobi
      zoom: 10,
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Example disaster locations
    const disasterLocations = [
      { longitude: 36.817223, latitude: -1.286389, description: 'Flood Zone' },
    //   { longitude: 36.8219, latitude: -1.2921, description: 'Earthquake Zone' },
    ];

    // Add markers for disaster locations
    disasterLocations.forEach((location) => {
      const marker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat([location.longitude, location.latitude])
        .addTo(map);

      // Popup on marker click
      marker.getElement().addEventListener('click', () => {
        const link = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
        setLocationLink(link);

        new mapboxgl.Popup()
          .setLngLat([location.longitude, location.latitude])
          .setHTML(`<h3>${location.description}</h3><p>Coordinates: ${location.latitude}, ${location.longitude}</p>`)
          .addTo(map);
      });
    });

    return () => map.remove(); // Clean up map instance on component unmount
  }, [setLocationLink]);

  return (
    <div id="map-container" style={{ width: '100%', height: '500px' }}></div>
  );
};

export default MapComponent;
