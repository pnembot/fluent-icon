import React, { SVGProps } from "react";

export function CubeRotate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.952 3.535a2.5 2.5 0 0 1 2.096 0l4.662 2.151a.5.5 0 0 1 .29.454V8h1V6.14a1.5 1.5 0 0 0-.871-1.362l-4.662-2.151a3.5 3.5 0 0 0-2.934 0L3.871 4.778A1.5 1.5 0 0 0 3 6.14V8h1V6.14a.5.5 0 0 1 .29-.454l4.662-2.151ZM3.4 11a6.456 6.456 0 0 0 .758.535C5.605 12.42 7.668 13 10 13s4.395-.58 5.843-1.465c.053-.032.106-.066.158-.099a6.46 6.46 0 0 0 .6-.436c.145-.12.278-.242.4-.365c.205-.207.377-.42.518-.635H16a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0v-.98a6.194 6.194 0 0 1-1 .936a7.83 7.83 0 0 1-1 .643c-1.592.87-3.695 1.4-6 1.4s-4.408-.529-6-1.4a7.813 7.813 0 0 1-1-.642a6.2 6.2 0 0 1-1-.934V12a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H2.48c.142.216.315.429.52.636c.122.124.254.245.399.364Zm.6 2.725v.136a.5.5 0 0 0 .29.454l4.662 2.151a2.5 2.5 0 0 0 2.096 0l4.662-2.151a.5.5 0 0 0 .29-.454v-.137a9.994 9.994 0 0 0 1-.552v.689a1.5 1.5 0 0 1-.871 1.362l-4.662 2.151a3.5 3.5 0 0 1-2.934 0l-4.662-2.151A1.5 1.5 0 0 1 3 13.86v-.688c.315.199.649.383 1 .552Zm2.04-6.921a.5.5 0 0 1 .657-.263L10 7.957l3.303-1.416a.5.5 0 0 1 .394.92L10.5 8.83V11a.5.5 0 1 1-1 0V8.83L6.303 7.46a.5.5 0 0 1-.263-.657Z"
      />
    </svg>
  );
}
export default CubeRotate;
