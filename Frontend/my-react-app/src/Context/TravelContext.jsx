import {createContext,useState } from "react";

export const TravelContext = createContext();

const TravelProvider = ({ children }) => {

  //Tabs
  const [activeTab, setActiveTab] = useState("Flights");

  //Trip Type
  const [tripType, setTripType] = useState("oneway");
  
  //Flight Details
  const [from, setFrom] = useState("Tirupati (Tri)");
  const [to,setTo] = useState("Hyderabad (Hyd)");

  const [depart,setDepart] = useState("thur,07 may 26");

  const [returnDate,setReturnDate] = useState("");

  const [traveller,setTraveller] = useState("1 Traveller, Economy");

  //Fares

  const [selectedFare,setSelectedFare] = useState("");

  const [nonStop,setNonStop] = useState(false);


  return(
    <TravelContext.Provider
      value={{
        activeTab,
        setActiveTab,

        tripType,
        setTripType,

        from,
        setFrom,

        to,
        setTo,

        depart,
        setDepart,

        returnDate,
        setReturnDate,
        
        traveller,
        setTraveller,

        selectedFare,
        setSelectedFare,

        nonStop,
        setNonStop,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default TravelProvider;