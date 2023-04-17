import React from "react";
import "./App.css";
import Routing from "./components/routing/Routing";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { AdInterface } from "./components/Add";

const initialAds: AdInterface[] = [
  {
    address: "123 Main St",
    region: "Koroška",
    floor: 4,
    owner: "John Smith",
    seller: "Jane Doe",
    contact: 1234567890,
    cadastral: "ABC123",
    price: 500000,
    type: "Sell",
    date: "2022-02-14",
    image1:
      "https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
    image2:
      "https://media.istockphoto.com/id/1273896468/photo/modern-home-and-electric-car.jpg?s=612x612&w=0&k=20&c=eUtbHUHT3nC1al1CIJQxribAtyJGQqwHGrmNzMIZjkY=",
    image3:
      "https://media.istockphoto.com/id/1251253124/photo/modern-house-and-electric-car.jpg?s=612x612&w=0&k=20&c=lBQ1x5WoG9I8WV3aYh7MFV3XTL1OlHfnD0YVahCpVvc=",
    finishReason: "",
    archived: false,
    id: 1,
  },
  {
    address: "456 Oak Ave",
    region: "Osrednjeslovenska",
    floor: 2,
    owner: "Jane Doe",
    seller: "John Smith",
    contact: 9876543210,
    cadastral: "DEF456",
    price: 800000,
    type: "Rent",
    date: "2022-03-15",
    image1:
      "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg",
    image2:
      "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg",
    image3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReePcgaxS_YZw9nCLg4c-03CUtRXO4PpwuSFJf7XwSAQYQnFRG-KDLAaY-jvZ6SVWvma8&usqp=CAU",
    finishReason: "",
    archived: false,
    id: 2,
  },
  {
    address: "789 Elm St",
    region: "Podravska",
    floor: 1,
    owner: "Bob Johnson",
    seller: "Sara Lee",
    contact: 5551234567,
    cadastral: "GHI789",
    price: 2500000,
    type: "Sell",
    date: "2022-04-16",
    image1:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80",
    image2:
      "https://nzarchitects.com.pk/wp-content/uploads/2021/09/1-kanal-20marla-modern-house-design-bahria-enclave-islamabad-rawalpindi-spanish-style-architecture-by-nz-architects-pakistan.jpg",
    image3:
      "https://cdn.luxe.digital/media/20230123162705/most-expensive-houses-in-the-world-reviews-luxe-digital.jpg",
    finishReason: "",
    archived: false,
    id: 3,
  },
];

function App() {
  const [ads, setAds] = React.useState<AdInterface[]>(initialAds);
  const [finishedAds, setFinishedAds] = React.useState<AdInterface[]>([]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routing
            ads={ads}
            setAds={setAds}
            finishedAds={finishedAds}
            setFinishedAds={setFinishedAds}
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
