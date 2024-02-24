import { describe } from "riteway";

describe("Test suite", async (assert) => {
  assert({
    given: "the project is new and this is the only test",
    should: "run the test suite",
    actual: true,
    expected: true,
  });
});
