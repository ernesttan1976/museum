import React from 'react'
import {render, screen} from "@testing-library/react";
import App from "./App";
import { expect, it } from 'vitest'

import * as config from "vitest/config"

it("Should have Exhibitions", async()=>{
  await render(
  <App />
  );
  const message = await screen.findAllByText(/Exhibitions/i);
  expect(message).toHaveLength>0;
})
