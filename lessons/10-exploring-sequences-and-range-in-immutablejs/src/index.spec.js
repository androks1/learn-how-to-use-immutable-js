import { expect } from "chai";
import { range, memoize } from "lodash";
import { Seq, Range } from "immutable";

describe("Exploring Sequences and Range() in Immutable.js", () => {
  it("should see Seq() act like an Iterable", () => {
    const lodashRange = range(1000);
    let numberOfOperations = 0;

    let sequence = Seq.of(...lodashRange);

    expect(sequence.get(0)).to.equal(0);
  });

  it("should see that Seq() is lazy", () => {
    const lodashRange = range(1000);
    let numberOfOperations = 0;

    let powerOfTwo = Seq.of(...lodashRange).map(num => {
      numberOfOperations++;
      return num * 2;
    });

    expect(numberOfOperations).to.equal(0);

    powerOfTwo.take(10).toArray(); // compute total lazily

    expect(numberOfOperations).to.equal(10);
  });

  it("should not produce an overflow with infinite Range()", () => {
    let powerOfTwoRange = Range(1, Infinity);

    expect(powerOfTwoRange.size).to.equal(Infinity); // whoa

    let first1000Powers = powerOfTwoRange.take(1000).map(n => n * 2);

    expect(first1000Powers.size).to.equal(1000);
  });

  it("should cache results of Seq()", () => {
    let objects = Range(0, 1000).map(() => {
      return new Object();
    });

    let take100 = objects.take(100).toArray();
    let take100Again = objects.take(100).toArray();

    take100.forEach((obj, index) => {
      expect(obj === take100Again[index]).to.be.false;
    });

    let cachedObjects = Range(0, 1000)
      .map(() => {
        return new Object();
      })
      .cacheResult();

    expect(cachedObjects.size).to.equal(1000);

    let take100Cached = cachedObjects.take(100).toArray();
    let take100CachedAgain = cachedObjects.take(100).toArray();

    take100Cached.forEach((obj, index) => {
      expect(obj === take100CachedAgain[index]).to.be.true;
    });
  });

  it("should memoize results of Seq()", () => {
    let objects = Range(0, 1000).map(() => {
      return new Object();
    });

    let take100 = objects.take(100).toArray();
    let take100Again = objects.take(100).toArray();

    take100.forEach((obj, index) => {
      expect(obj === take100Again[index]).to.be.false;
    });

    let memoizedObjects = Range(0, Infinity).map(
      memoize(() => {
        return new Object();
      })
    );

    expect(memoizedObjects.size).to.equal(Infinity); // this should be impossible!

    let take100Memoized = memoizedObjects.take(100).toArray();
    let take100MemoizedAgain = memoizedObjects.take(100).toArray();

    take100Memoized.forEach((obj, index) => {
      expect(obj === take100MemoizedAgain[index]).to.be.true;
    });
  });
});
