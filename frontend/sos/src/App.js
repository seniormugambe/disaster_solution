// import React, { useState } from 'react';
// import Map from './components/Map';
// import axios from 'axios';

// const App = () => {
//     const [phone, setPhone] = useState('');
//     const [locationLink, setLocationLink] = useState('');
//     const [websiteLink, setWebsiteLink] = useState('https://my-website.com');

//     // Function to send SOS via SMS
//     const sendSOS = async () => {
//         try {
//             await axios.post('http://localhost:5000/send-sos', {
//                 phone,
//                 locationLink,
//                 websiteLink
//             });
//             alert('SOS sent successfully');
//         } catch (error) {
//             alert('Failed to send SOS');
//         }
//     };

//     // Function to make a call for emergency
//     const makeCall = async () => {
//         try {
//             await axios.post('http://localhost:5000/make-call', { phone });
//             alert('Call initiated');
//         } catch (error) {
//             alert('Failed to make call');
//         }
//     };

//     // Function to share airtime
//     const shareAirtime = async (amount) => {
//         try {
//             await axios.post('http://localhost:5000/share-airtime', { phone, amount });
//             alert('Airtime shared successfully');
//         } catch (error) {
//             alert('Failed to share airtime');
//         }
//     };

//     return (
//         <div>
//             <h1>Disaster Alert System</h1>
//             <Map setLocationLink={setLocationLink} />
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Phone Number"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                 />
//                 <button onClick={sendSOS}>Send SOS</button>
//                 <button onClick={makeCall}>Make Emergency Call</button>
//                 <button onClick={() => shareAirtime('KES 100')}>Share Airtime</button>
//             </div>
//         </div>
//     );
// };

// export default App;




// import React, { useState } from 'react';
// import MapComponent from './components/Map';  // Assuming the MapComponent is in components folder
// import axios from 'axios';

// const App = () => {
//     const [phone, setPhone] = useState('');
//     const [locationLink, setLocationLink] = useState('');
//     const [websiteLink] = useState('https://my-website.com');

//     // Function to send SOS via SMS
//     const sendSOS = async () => {
//         try {
//             await axios.post(`${process.env.REACT_APP_BACKEND_URL}/send-sos`, {
//                 phone,
//                 locationLink,
//                 websiteLink
//             });
//             alert('SOS sent successfully');
//         } catch (error) {
//             alert('Failed to send SOS');
//         }
//     };

//     // Function to make a call for emergency
//     const makeCall = async () => {
//         try {
//             await axios.post('http://localhost:5000/make-call', { phone });
//             alert('Call initiated');
//         } catch (error) {
//             alert('Failed to make call');
//         }
//     };

//     // Function to share airtime
//     const shareAirtime = async (amount) => {
//         try {
//             await axios.post('http://localhost:5000/share-airtime', { phone, amount });
//             alert('Airtime shared successfully');
//         } catch (error) {
//             alert('Failed to share airtime');
//         }
//     };

//     return (
//         <div>
//             <h1>Disaster Alert System</h1>

//             <div style={{ zIndex: 2 }}>
//                 <input
//                     type="text"
//                     placeholder="Phone Number"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     style={{ padding: '10px', margin: '5px' }}
//                 />
//                 <button onClick={sendSOS}>Send SOS</button>
//                 <button onClick={makeCall}>Make Emergency Call</button>
//                 <button onClick={() => shareAirtime('KES 100')}>Share Airtime</button>
//             </div>

//             <MapComponent setLocationLink={setLocationLink} />
//         </div>
//     );
// };

// export default App;

import React, { useState } from 'react';
import MapComponent from './components/Map';  // Assuming the MapComponent is in components folder
import axios from 'axios';

const App = () => {
    const [phone, setPhone] = useState('');
    const [locationLink, setLocationLink] = useState('');
    const [websiteLink] = useState('https://my-website.com'); // This can also be managed through an environment variable if needed

    // Function to send SOS via SMS
    const sendSOS = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/send-sos`, {
                phone,
                locationLink,
                websiteLink
            });
            alert('SOS sent successfully');
        } catch (error) {
            alert('Failed to send SOS');
            console.error('Error sending SOS:', error); // Log error for debugging
        }
    };

    // Function to make a call for emergency
    const makeCall = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/make-call`, { phone });
            alert('Call initiated');
        } catch (error) {
            alert('Failed to make call');
            console.error('Error making call:', error); // Log error for debugging
        }
    };

    // Function to share airtime
    const shareAirtime = async (amount) => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/share-airtime`, { phone, amount });
            alert('Airtime shared successfully');
        } catch (error) {
            alert('Failed to share airtime');
            console.error('Error sharing airtime:', error); // Log error for debugging
        }
    };

    return (
        <div>
            <h1>Disaster Alert System</h1>

            <div style={{ zIndex: 2 }}>
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ padding: '10px', margin: '5px' }}
                />
                <button onClick={sendSOS}>Send SOS</button>
                <button onClick={makeCall}>Make Emergency Call</button>
                <button onClick={() => shareAirtime('KES 100')}>Share Airtime</button>
            </div>

            <MapComponent setLocationLink={setLocationLink} />
        </div>
    );
};

export default App;
