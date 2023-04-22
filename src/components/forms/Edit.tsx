import React, { SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdInterface } from "../../models/ad";
import { Button, Form, InputGroup } from "react-bootstrap";

interface EditProps {
  ads: AdInterface[];
  setAds: React.Dispatch<SetStateAction<AdInterface[]>>;
}

function Edit({ ads, setAds }: EditProps) {
  const { id } = useParams<{ id: string }>();
  const [ad, setAd] = useState<AdInterface | null>(null);

  const [numImages, setNumImages] = useState(1);
  const [imageValues, setImageValues] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;

    setAd((prevState: AdInterface | null) => {
      if (!prevState) {
        return null; // handle the case where prevState is null
      }

      const nextState = {
        ...prevState,
        [name]: value,
      };

      return nextState;
    });
  };

  const handleImageChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;

    setAd((prevState: AdInterface | null) => {
      if (!prevState) {
        return null; // handle the case where prevState is null
      }

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
    const adIndex = ads.findIndex((ad) => ad.id === Number(id)); // Find the index of the ad with the given ID
    if (adIndex !== -1) {
      // If the ad exists in the array
      const updatedAd = { ...ads[adIndex], ...ad }; // Create a new object with the updated properties of the ad
      const newAds = [...ads]; // Create a copy of the ads array
      newAds[adIndex] = updatedAd; // Replace the old ad with the updated ad at the same index
      setAds(newAds); // Update the state with the new array of ads
    }
    setNumImages(1);
    setImageValues([]); // Reset the imageValues state
    navigate("/");
  };

  useEffect(() => {
    console.log("to so vsi oglasi");
    console.log(ads);
    console.log("to je id");
    console.log(id);
    const adToEdit = ads.find((ad) => ad.id === Number(id));
    if (adToEdit) {
      console.log("oglas najden:");
      console.log(adToEdit);
      setAd(adToEdit);
      setNumImages(adToEdit.images.length);
      setImageValues(adToEdit.images);
    }
  }, [id, ads]);

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      {ad ? (
        <Form>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ maxWidth: "800px" }}
          >
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              name="address"
              onChange={handleChange}
              value={ad.address}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ maxWidth: "800px" }}
          >
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

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ maxWidth: "800px" }}
          >
            <Form.Label>Floor</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Floor number"
              name="floor"
              value={ad.floor}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ maxWidth: "800px" }}
          >
            <Form.Label>Seller</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Seller"
              name="seller"
              value={ad.seller}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ maxWidth: "800px" }}
          >
            <Form.Label>Owner(s)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Owner(s)"
              name="owner"
              value={ad.owner}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ maxWidth: "800px" }}
          >
            <Form.Label>Contact number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Contact Number"
              name="contact"
              value={ad.contact}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ maxWidth: "800px" }}
          >
            <Form.Label>Cadastral number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Cadastral number"
              name="cadastral"
              value={ad.cadastral}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ maxWidth: "800px" }}
          >
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

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ maxWidth: "800px" }}
          >
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

          <Form.Group controlId="duedate" style={{ maxWidth: "800px" }}>
            <Form.Label>Date of possible handover</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Date of possible handover"
              value={ad.date}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="images"
            style={{ maxWidth: "800px" }}
          >
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
            Submit edit
          </Button>
        </Form>
      ) : (
        <h1>Ad with this ID was not found</h1>
      )}
    </div>
  );
}

export default Edit;
