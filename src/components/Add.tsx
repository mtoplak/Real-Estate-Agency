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
  images: string[];
  archived: boolean;
  finishReason: string;
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
  images: [],
  finishReason: "",
  archived: false,
  id: 0,
};

function Add({ ads, setAds }: AddProps) {
  const [ad, setAd] = useState<AdInterface>(initialState);
  const [numImages, setNumImages] = useState(1);
  const [imageValues, setImageValues] = useState<string[]>([]);

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;

    setAd((prevState: AdInterface) => {
      const nextState = {
        ...prevState,
        [name]: value,
      };

      return nextState;
    });
  };

  const handleImageChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;

    setAd((prevState: AdInterface) => {
      const index = Number(name.slice(5)); // Extract the index from the input name (e.g., "image0" => 0)
      const images = [...prevState.images];

      if (images[index]) {
        // An image already exists at this index, so replace it with the new value
        images[index] = value;
      } else {
        // No image exists at this index, so add the new value to the end of the array
        images.push(value);
      }

      const nextState = {
        ...prevState,
        images,
      };

      setImageValues(images); // Update the imageValues state with the new images array

      return nextState;
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (ads.length !== 0) {
      ad.id = ads[ads.length - 1].id + 1;
    }

    setAds((prevState: AdInterface[]) => [...prevState, ad]);
    setAd(initialState);
    setNumImages(1);
    setImageValues([]); // Reset the imageValues state
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
            <option value="Podravska">Podravska</option>
            <option value="Savinjska">Savinjska</option>
            <option value="Primorska">Primorska</option>
            <option value="Gorenjska">Gorenjska</option>
            <option value="Pomurska">Pomurska</option>
            <option value="Osrednjeslovnska">Osrednjeslovenska</option>
            <option value="Koroška">Koroška</option>
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Control
              type="number"
              placeholder="Enter Price"
              name="price"
              value={ad.price}
              onChange={handleChange}
            />
            <InputGroup.Text id="basic-addon2" style={{ marginLeft: "5px" }}>
              €
            </InputGroup.Text>
          </div>
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

        <Form.Group className="mb-3" controlId="images">
          <Form.Label>Images</Form.Label>
          {[...Array(numImages)].map((_, index) => (
            <Form.Group
              className="mb-3"
              key={index}
              controlId={`formBasicImage${index + 1}`}
            >
              <Form.Control
                key={index}
                type="text"
                placeholder={`Enter image ${index + 1} src`}
                name={`image${index}`}
                value={imageValues[index] || ""}
                onChange={handleImageChange}
              />
            </Form.Group>
          ))}
        </Form.Group>
        <Button variant="light" onClick={() => setNumImages(numImages + 1)}>
          Add Image
        </Button>
        <br />
        <br />
        <Button variant="success" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
