import type { SVGProps } from "react";

export function BeakerSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M7.25 4v4.747a2.5 2.5 0 0 1-.296 1.18L6.11 11.5h3.78a5.514 5.514 0 0 1 2.915-2.234a2.5 2.5 0 0 1-.054-.519V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75Zm-1.675 8.5h3.8a5.486 5.486 0 0 0-.375 2c0 .9.216 1.75.6 2.5H5.67a1.5 1.5 0 0 1-1.322-2.208L5.575 12.5Zm6.49-1.058a2 2 0 0 1-1.43 2.478l-.461.118a4.735 4.735 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.422c.257.204.537.378.835.518l.325-.344a2 2 0 0 1 2.909.002l.337.358c.293-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.461-.118a4.731 4.731 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.822.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default BeakerSettingsFilled;
