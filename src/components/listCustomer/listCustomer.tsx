import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook
import { Card, CardContent, Typography } from "@mui/material";
import "./listCustomer.css";

export const ListCustomer = () => {
  const history = useNavigate(); // Access the history object

  // State to keep track of the clicked card index
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  // Array of colors to cycle through
  const colors = ["#ff6f61", "#6b5b95", "#88b04b", "#f7cac9", "#92a8d1"];

  // Function to handle card click
  const handleCardClick = (index: React.SetStateAction<number>) => {
    setSelectedCardIndex(index);
    // Navigate to the route with the ID of the clicked card
    history(`/details/${index}`);
  };

  return (
    <div className="list">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
        <Card
          className="Card"
          key={index}
          onClick={() => handleCardClick(index)}
          style={{
            cursor: "pointer",
            backgroundColor:
              index === selectedCardIndex ? colors[index] : "white",
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              Customer {index + 1}
            </Typography>
            <Typography color="textSecondary">Click to change color</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
