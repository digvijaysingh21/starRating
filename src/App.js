import "./styles.css";
import React, { useState } from "react";
import StartRating from "./StarRating";
export default function App() {
  return <StartRating limit={5} rating={2} />;
}
