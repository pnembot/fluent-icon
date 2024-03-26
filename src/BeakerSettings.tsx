import React, { SVGProps } from "react";

export function BeakerSettings(props: SVGProps<SVGSVGElement>) {
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
        d="M6.5 4h.75v4.747a2.5 2.5 0 0 1-.296 1.18l-2.606 4.865A1.5 1.5 0 0 0 5.67 17H9.6a5.458 5.458 0 0 1-.393-1H5.67a.5.5 0 0 1-.44-.736L6.71 12.5h2.665c.137-.352.31-.687.514-1H7.246l.589-1.1a3.5 3.5 0 0 0 .415-1.653V4h3.5v4.747c0 .312.041.621.123.92c.295-.161.607-.296.931-.4a2.5 2.5 0 0 1-.054-.52V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1Zm5.565 7.442a2 2 0 0 1-1.43 2.478l-.461.118a4.735 4.735 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.422c.257.204.537.378.835.518l.325-.344a2 2 0 0 1 2.909.002l.337.358c.293-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.461-.118a4.731 4.731 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.822.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default BeakerSettings;