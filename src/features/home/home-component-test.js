import React from "react";

import { describe } from "riteway";
import render from "riteway/render-component";
import match from "riteway/match";
import HomePage from "../path/to/HomePage"; // Update this path to the actual location of your HomePage component

describe("HomePage component", async (assert) => {
  const $ = render(<HomePage />);
  const signupLinkText = "Sign Up"; // The text used in your signup link. Update this if it's different.

  assert({
    given: "the homepage is rendered",
    should: "display a signup link",
    actual: match($('a:contains("Sign Up")').text(), signupLinkText),
    expected: signupLinkText,
  });
});
