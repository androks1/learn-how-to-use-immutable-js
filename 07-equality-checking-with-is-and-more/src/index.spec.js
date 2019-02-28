import { expect } from "chai";
import { Map, is, List } from "immutable";

describe("Equality Checking with .is() and More", () => {
  it("should find different maps equal if keys and values are the same", () => {
    const map1 = Map({ a: 1, b: 1, c: List.of(1) });
    const map2 = Map({ a: 1, b: 1, c: List.of(1) });

    expect(map1).to.not.equal(map2);
    expect(is(map1, map2)).to.be.true;
  });

  it("should be equal if subset is equal", () => {
    const map1 = Map({ a: 1, b: 1 });
    const map2 = Map({ a: 1, b: 1, c: 3 });

    expect(map1.isSubset(map2)).to.be.true;
    expect(map2.isSubset(map1)).to.not.be.true;
  });

  it("should be equal if superset is equal", () => {
    const map1 = Map({ a: 1, b: 1 });
    const map2 = Map({ a: 1, b: 1, c: 3 });

    expect(map2.isSuperset(map1)).to.be.true;
    expect(map1.isSuperset(map2)).to.not.be.true;
  });
});
