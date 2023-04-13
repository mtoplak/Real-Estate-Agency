import React, { SetStateAction, useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export interface AdInterface {
  address: string;
  region: string;
  floor: number;
  owner: string;
  seller: string;
  contact: number;
  cadastral: string;
  price: number;
  type: string;
  date: string;
  image1?: string;
  image2?: string;
  image3?: string;
  finished: boolean;
  archived: boolean;
  id: number;
}

interface AddProps {
  ads: AdInterface[];
  setAds: React.Dispatch<SetStateAction<AdInterface[]>>;
}

const initialState: AdInterface = {
  address: "",
  region: "",
  floor: 0,
  seller: "",
  owner: "",
  contact: 0,
  cadastral: "",
  price: 0,
  type: "",
  date: "",
  image1: "",
  image2: "",
  image3: "",
  finished: false,
  archived: false,
  id: 0,
};

function Add({ ads, setAds }: AddProps) {
  console.log(ads);
  const [ad, setAd] = useState<AdInterface>(initialState);

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;

    setAd((prevState: AdInterface) => {
      const nextState = {
        ...prevState,
        [name]: value,
      };
      //console.log(nextState);

      return nextState;
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("to je za dodat");
    if (ads.length !== 0) {
      ad.id = ads[ads.length - 1].id + 1;
    }
    console.log(ad);
    setAds((prevState: AdInterface[]) => [...prevState, ad]);
    setAd(initialState);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            name="address"
            onChange={handleChange}
            value={ad.address}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Region</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="region"
            value={ad.region}
            onChange={handleChange}
          >
            <option>Select region</option>
            <option value="podravska">Podravska</option>
            <option value="savinjska">Savinjska</option>
            <option value="primorska">Primorska</option>
            <option value="gorenjska">Gorenjska</option>
            <option value="pomurska">Pomurska</option>
            <option value="osrednjeslovnska">Osrednjeslovenska</option>
            <option value="koroška">Koroška</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Floor</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Floor number"
            name="floor"
            value={ad.floor}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seller</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Seller"
            name="seller"
            value={ad.seller}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Owner(s)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Owner(s)"
            name="owner"
            value={ad.owner}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Contact Number"
            name="contact"
            value={ad.contact}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cadastral number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Cadastral number"
            name="cadastral"
            value={ad.cadastral}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            name="price"
            value={ad.price}
            onChange={handleChange}
          />
          <InputGroup.Text id="basic-addon2">€</InputGroup.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="type"
            value={ad.type}
            onChange={handleChange}
          >
            <option>Select type</option>
            <option value="sell">Sell</option>
            <option value="rent">Rent</option>
            <option value="buy">Buy</option>
            <option value="primorska">Najem</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="duedate">
          <Form.Label>Date of possible handover</Form.Label>
          <Form.Control
            type="date"
            name="date"
            placeholder="Date of possible handover"
            value={ad.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image 1</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image src"
            name="image1"
            value={ad.image1}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image 2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image src"
            name="image2"
            value={ad.image2}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image 3</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image src"
            name="image3"
            value={ad.image3}
            onChange={handleChange}
          />
        </Form.Group>

        <br />
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
