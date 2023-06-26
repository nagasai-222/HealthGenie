// import React from "react";
// import "./AmbulanceService.css";
// import fb from "../../assets/About/Icons/facebook.png";
// import youtube from "../../assets/About/Icons/youtube.png";
// import insta from "../../assets/About/Icons/instagram.png";
// import line from "../../assets/About/Icons/line.png";
// import twitter from "../../assets/About/Icons/twitter.png";
// import { Link } from "react-router-dom";
// import useTitle from "../../hooks/useTitle";
// const AmbulanceService = () => {
//   useTitle('Ambulance Service')
//   return (
//     <section>
//       <div className="ambulanceServiceCover">
//         <h1 className=" text-gray-300 lg:text-6xl sm:text-4xl font-bold flex justify-center items-center h-full">
//           Ambulance Service
//         </h1>
//         {/* <img
//            className=" h-96 w-full hover:grayscale-0  grayscale  object-cover"
//            src={logo}
//            alt=""
//          /> */}
//       </div>
//       <div className="w-5/6 mx-auto mt-20 mb-52  space-y-5 text-slate-500">
//         <div className="border border-teal-500 rounded px-8 py-16">
//           <p className="text-xl font-medium  text-teal-600">
//             To refer a patient to our facility please contact us:
//           </p>

//           <a
//             href="tel:+91 6262993939"
//             className="text-lg font-medium text-teal-700"
//           >
//             Telephone: +015500000
//           </a>

//           <p>E - mail address: DoctorPlanet@example.com</p>
//         </div>

//         <hr />
//         {/* <p className="text-lg font-medium text-teal-700">Mission</p> */}

//         <p>
//           Owing to the current COVID-19 situation, foreigners are not allowed to
//           enter the Kingdom Of Bangladesh freely as before. However, some of our
//           patients are in need of transfer into Bangladesh for treatment,
//           despite the restrictions under Ministry of PHero Affairs (MPA).
//         </p>
//         <img
//           className="w-full h-96 object-cover"
//           src="https://i.ibb.co/SV6z8FM/view-from-inside-ambulance-uniformed-emergency-services-workers-caring-patient-stretcher-during-coro.jpg"
//           alt=""
//         />
//         <hr />
//         <p>
//           Owing to the current COVID-19 situation, foreigners are not allowed to
//           enter the Kingdom Of Bangladesh freely as before. However, some of our
//           patients are in need of transfer into Bangladesh for treatment,
//           despite the restrictions under Ministry of PHero Affairs (MPA).
//         </p>
//         <img
//           className="w-full h-96 object-cover"
//           src="https://i.ibb.co/dm2GWGb/side-british-ambulance.jpg"
//           alt=""
//         />
//         <hr />
//         <p>
//           We have successfully facilitated the process for the incoming patient
//           who has indication to be treated urgently, the whole process takes 1 –
//           2 weeks. However, the MFA mandated that only 1 – 2 companions
//           (attendants) are allowed if the permission is granted. The quarantine
//           for the attendant can be managed in the hospital, either in the same
//           ward room with the patient or at BI Residence on the 9th floor of the
//           hospital building.
//         </p>

//         <p>We believe that:</p>
//         <ol>
//           <li>1. Safety shall never be compromised</li>
//           <li>2. All errors are preventable.</li>
//           <li>
//             3. Nothing is more important to Doctors planet than the safety of
//             our patients and our staff.
//           </li>
//         </ol>
//       </div>
//       <div className="flex items-center justify-center gap-6 my-5 mt-10">
//         <Link>
//           <img className="w-8 h-8" src={fb} alt="fb" />
//         </Link>
//         <Link>
//           <img className="w-8 h-8" src={twitter} alt="twitter" />
//         </Link>
//         <Link>
//           <img className="w-8 h-8" src={youtube} alt="youtube" />
//         </Link>
//         <Link>
//           <img className="w-8 h-8" src={insta} alt="insta" />
//         </Link>
//         <Link>
//           <img className="w-8 h-8" src={line} alt="line" />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default AmbulanceService;






import React, { useEffect, useState } from 'react'
import Map, { Marker } from "react-map-gl"
// import 'maplibre-gl/dist/maplibre-gl.css'
import maplibregl from "maplibre-gl"
// import { diagnostics } from "../JSON/diagnostics"
import { hospitals } from "../JSON/hospitals.js"
// import { medical } from "../JSON/medical"
// import { allData } from "../JSON/allData"
import { Scrollbars } from "react-custom-scrollbars"
import "../CSS/Maps.css"
// import mapLoading from "../Images/mapLoading.svg"
// import SelectInput from '@mui/material/Select/SelectInput'
// import hello from "react-progressive-image"
// import { Popup } from "react-leaflet"
import Modal from "react-modal"

const AmbulanceService = () => {
    const [id, setId] = useState(0);
    const [userLat, setUserLat] = useState(null);
    const [loading, setLoading] = useState(true)
    const [userLong, setUserLong] = useState(null);
    const [modalName, setModalName] = useState();
    const [modalImg, setModalImg] = useState()
    const [modalOpenTimings, setOpenimgTimings] = useState();
    const [modalClosingTimings, setCloseimgTimings] = useState()
    const [modalAvail, setModalAvail] = useState();
    const [modalServices, setModalServices] = useState(["pulmonology", "Ayurvedic"])
    const [modalSchemes, setModalSchemes] = useState(["SC_01", "SC_07"])
    const [modaltype, setModalType] = useState();
    const [modalWebsite, setModalWebsite] = useState();
    const [modalCell, setModalCell] = useState()
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLat(position.coords.latitude)
            setUserLong(position.coords.longitude)


        })
    })

    const [image, setImage] = useState();
    const setImageOf = async () => {

    }

    return (
        <div>
            {
                userLat != null ?
                    <div className='maps'>
                        <div className='mapDisplay'>
                            <Modal isOpen={modalOpen} className="modal">

                                <img src={modalImg}></img>
                                <div className='modalDiv'>
                                    <div>Hospital Name: {modalName}</div>
                                    <div>Opening time: {modalOpenTimings}</div>
                                    <div>Closing time: {modalClosingTimings}</div>
                                    <div>Website: {modalWebsite}</div>
                                    <div>Services:
                                        {
                                            modalServices.map((e) => {
                                                return <span className='ele'>{e}</span>
                                            })
                                        }
                                    </div>
                                    <div>
                                        Schemes:
                                        {
                                            modalServices.map((e) => {
                                                return <span className='ele'>{e}</span>
                                            })
                                        }
                                    </div>
                                    <div>Type: {modaltype}</div>
                                    <div>Availabilty Name: {modalAvail}</div>
                                    <div>Phone no:{modalCell}</div>

                                    <button className='modalButton' style={{ backgroundColor: "green" }}>Share to whatsapp</button>
                                    <button className='modalButton' style={{ backgroundColor: "red" }} onClick={() => setModalOpen(false)}>close</button>
                                </div>


                            </Modal>
                            <Map mapLib={maplibregl}

                                onLoad={() => { setLoading(false) }}
                                initialViewState={{
                                    longitude: userLong,
                                    latitude: userLat,
                                    zoom: 14,
                                }}
                                style={{ width: '85vw', height: '95vh' }}
                                mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=NElc6b3384qGomeYg5QI"
                            >


                                <Marker longitude={userLong} latitude={userLat} color="black"></Marker>
                                <div className='infoBox'>
                                    Metrics:
                                    <div className='info'>
                                        <div className='infoColor' style={{ backgroundColor: "green" }}></div>
                                        Hospitals
                                    </div>
                                    <div className='info'>
                                        <div className='infoColor' style={{ backgroundColor: "blue" }}></div>
                                        Medical-Stores
                                    </div>
                                    <div className='info'>
                                        <div className='infoColor' style={{ backgroundColor: "red" }}></div>
                                        Diagnostics
                                    </div>
                                </div>
                                <div>
                                    {
                                        hospitals.map((hospital) => {
                                            return (<div className='markerPop'>


                                                <Marker longitude={hospital.longitude} color="green" latitude={hospital.lattitude} key={hospital.id} onClick={() => {
                                                    // setId(parseInt(hospital.id[hospital.id.length-1])-1)
                                                    setModalName(hospital.name);
                                                    setModalAvail(hospital.availabilty)
                                                    setModalCell(hospital.cellno)
                                                    setModalImg(hospital.image)
                                                    setModalType(hospital.type)
                                                    setModalWebsite(hospital.website)
                                                    setCloseimgTimings(hospital.closingtime)
                                                    setOpenimgTimings(hospital.openingtime)
                                                    setModalServices(hospital.services)
                                                    console.log(hospital.services)
                                                    setModalOpen(true)

                                                }}></Marker>
                                            </div>)
                                        })
                                    }
                                </div>




                            </Map>
                        </div>



                        <div className='maps-right'>
                            {
                                <Scrollbars>
                                    {
                                        hospitals.map((data) => {
                                            return (<div className='maps-content'>
                                                <img className='hospital' src={data.image}></img>
                                                <div className='maps-content-details'>
                                                    <div><span className='headings'>Name:</span><span className='answers'>{data.name}</span></div>

                                                    <div><span className='headings'>Type:</span ><span className='answers'>{data.type}</span></div>
                                                    <div><span className='headings'>Timings:</span ><span className='answers'>{data.openingtime} -  {data.closingtime}</span></div>
                                                    <div><span className='headings'>Total Schemes:</span ><span className='answers'>6</span></div>

                                                    {
                                                        data.type === "pvt" ? <button className='moredetails' style={{ backgroundColor: "lightcoral" }} onClick={() => {
                                                            setModalName(data.name);
                                                            setModalAvail(data.availabilty)
                                                            setModalCell(data.cellno)
                                                            setModalImg(data.image)
                                                            setModalType(data.type)
                                                            setModalWebsite(data.website)
                                                            setCloseimgTimings(data.closingtime)
                                                            setOpenimgTimings(data.openingtime)
                                                            setModalServices(data.services)
                                                            console.log(data.services)
                                                            setModalOpen(true)
                                                        }}>More details</button> : <button className='moredetails' style={{ backgroundColor: "lightgreen" }}

                                                            onClick={() => {
                                                                setModalName(data.name);
                                                                setModalAvail(data.availabilty)
                                                                setModalCell(data.cellno)
                                                                setModalImg(data.image)
                                                                setModalType(data.type)
                                                                setModalWebsite(data.website)
                                                                setCloseimgTimings(data.closingtime)
                                                                setOpenimgTimings(data.openingtime)
                                                                setModalServices(data.services)
                                                                console.log(data.services)
                                                                setModalOpen(true)
                                                            }}
                                                        >More details</button>
                                                    }



                                                </div>
                                            </div>)
                                        })
                                    }
                                </Scrollbars>
                            }
                        </div>

                    </div> : <div></div>
            }
            Maps
        </div>

    )
}

export default AmbulanceService;
