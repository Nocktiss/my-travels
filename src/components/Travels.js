import Travel from './Travel'
import React from "react";

const travels = [
    {
        destination: "USA",
        country: "New York",
        distance: "Loin km",
        photo: "https://www.i-travelled.com/wp-content/uploads/2017/06/new-york.jpg"
    },

    {
        destination: "Espagne",
        country: "Madrid",
        distance: "1.000 km",
        photo: "https://img.static-rmg.be/a/view/q75/w720/h480/2105157/madrid-jpg.jpg"
    },

    {
        destination: "Australie",
        country: "Sydney",
        distance: "10.000+ km",
        photo: "https://www.sydney.com/sites/sydney/files/styles/full_height_image/public/2018-02/syd-1-1_0.jpg?itok=UawSK9dM"
    },

    {
        destination: "Thaïlande",
        country: "Koh PhiPhi",
        distance: "10.000+ km",
        photo: "http://www.odepart.fr/blog/wp-content/uploads/2015/04/Ko-Tapu-Thailand.jpg?w=640"
    }
];

const Travels = () => (
    <div>
      {travels.map(travel => (
         <Travel {...travel}  key={travel.id}/>
      ))}
    </div>
  );

export default Travels