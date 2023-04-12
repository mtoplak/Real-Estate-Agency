import React from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export interface AddInterface {
  address: string;
  region: string;
  floor: number;
  owner: string;
  contact: number;
  cadastral: string;
  price: number;
  type: string;
  date: string;
  image1: string;
  image2: string;
  image3: string;
  finisged: boolean;
  archived: boolean;
}

function Add() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Region</Form.Label>
          <Form.Select aria-label="Default select example">
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
          <Form.Control type="number" placeholder="Enter Floor number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seller</Form.Label>
          <Form.Control type="text" placeholder="Enter Seller" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Owner(s)</Form.Label>
          <Form.Control type="text" placeholder="Enter Owner(s)" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contact number</Form.Label>
          <Form.Control type="number" placeholder="Enter Contact Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cadastral number</Form.Label>
          <Form.Control type="text" placeholder="Enter Cadastral number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" />
          <InputGroup.Text id="basic-addon2">€</InputGroup.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select type</option>
            <option value="sell">Podravska</option>
            <option value="rent">Savinjska</option>
            <option value="primorska">Primorska</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="duedate">
          <Form.Label>Date of possible handover</Form.Label>
          <Form.Control
            type="date"
            name="date"
            placeholder="Date of possible handover"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image 1</Form.Label>
          <Form.Control type="text" placeholder="Enter image src" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image 2</Form.Label>
          <Form.Control type="text" placeholder="Enter image src" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image 3</Form.Label>
          <Form.Control type="text" placeholder="Enter image src" />
        </Form.Group>

        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
