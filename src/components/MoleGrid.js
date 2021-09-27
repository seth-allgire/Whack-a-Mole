import React from "react";

export default function MoleGrid({ mole, setScore }) {
  const onClick = (clickedHole) => {
    if (mole === clickedHole) {
      setScore((score) => score + 1);
    }
  };

  return (
    <div>
      {Array(25)
        .fill()
        .map((holes, clickedHole) => {
          if (mole === clickedHole) {
            return (
              <div className="hole-container">
                <img
                  src="https://ca-times.brightspotcdn.com/dims4/default/00019b1/2147483647/strip/true/crop/3240x2160+352+0/resize/2400x1600!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6c%2F60%2F9782b5624396b1c1ee62cba95b8c%2Feagles-steelers-football-05890.jpg"
                  alt="hole"
                  className="border enemy"
                  onClick={() => onClick(mole)}
                />
              </div>
            );
          } else {
            return (
              <div className="hole-container">
                <div className="hole border"></div>
              </div>
            );
          }
        })}
    </div>
  );
}
