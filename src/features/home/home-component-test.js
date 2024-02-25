import React from "react";
import { describe } from "riteway";
import render from "riteway/render-component";
import match from "riteway/match";

import Home from "./home-component.js";

describe("Home", async (assert) => {
  const text = "Sign Up";
  const $ = render(<Home />);
  const contains = match($(".sign-up-link").html());

  assert({
    given: "no arguments",
    should: "render the signup link",
    actual: contains(text),
    expected: text,
  });
});
