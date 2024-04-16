import { Params, useParams } from "react-router-dom";
import { ListCustomer } from "../listCustomer/listCustomer";
import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { CustomerInfo } from "../../CustomerInfo/CustomerInfo";
import customers from "../../CustomerInfo/CustomerInfo";
import "./detailsCustomer.css";
export const DetailsCustomer = () => {
  const id = useParams();
  const [photos, setPhotos] = useState([]);
  const [photoUrl, setPhotoUrl] = useState("");
  const unsplash = createApi({
    accessKey: "YOUR_ACCESS_KEY", // Replace with your Unsplash API access key
  });
  const customer: CustomerInfo | undefined = customers.find(
    (customer) => customer.id === Number(id.id)
  );
  if (!customer) {
    return <div>No customer found with ID: {id.id}</div>;
  }

  // useEffect(() => {
  //     const fetchPhoto = async () => {
  //       try {
  //         const response = await unsplash.photos.getPhoto("pFqrYbhIAXs");
  //         if (response.errors) {
  //           throw new Error(response.errors[0]);
  //         }
  //         setPhotoUrl(response.response.urls.regular);
  //       } catch (error) {
  //         console.error("Error fetching photo:", error);
  //       }
  //     };

  //     fetchPhoto();
  //   }, []);

  //   const intervalId = setInterval(fetchPhoto, 10000); // Fetch photos every 10 seconds

  //   return () => clearInterval(intervalId); // Cleanup function to clear interval
  // }, []);
  return (
    <div className="main">
      <ListCustomer />
      <div>
        <div className="detailsCustomer">{id.id}</div>
        <h2>Customer Details</h2>
        <p>Name: {customer.name}</p>
        <p>Title: {customer.title}</p>
        <p>Address: {customer.address}</p>
      </div>
    </div>
  );
};
