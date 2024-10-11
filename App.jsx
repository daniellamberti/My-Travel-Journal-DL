import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  // Using .map() to create a list of Card components
  const cards = data.map((place) => {
    return (
      <Card
        key={place.id}
        img={place.imageUrl}
        mapsIcon={place.mapsIcon}
        destCountry={place.location}
        destGoogleMaps={place.googleMapsUrl}
        destName={place.title}
        startDate={place.startDate}
        endDate={place.endDate}
        destDescription={place.description}
      />
    );
  });

  return (
    <div className="main-container">
      <Header />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
