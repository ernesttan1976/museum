import {render, screen} from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";



it("Should have Exhibitions", async()=>{
  await render(
  <App />
  );
  const message = await screen.findAllByText(/Exhibitions/i);
  expect(message).toHaveLength>0;
})
