import type { SVGProps } from "react";

export function DualScreenSettings(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.065 2.441a2 2 0 0 1-1.43 2.478l-.461.118a4.734 4.734 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.423c.257.203.537.377.835.517l.325-.344a2 2 0 0 1 2.909.002l.337.358c.293-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.461-.118a4.732 4.732 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.32 4.32 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.315 4.315 0 0 0-.822.497l.156.557ZM14.5 6.499a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm2.5 9.5v-5.6a5.507 5.507 0 0 0 1-.657v6.257a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.022a5.5 5.5 0 0 0 .185 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.794a5.51 5.51 0 0 0 1 1.48v7.725H16a1 1 0 0 0 1-1Zm-11-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1h-1Z"
      />
    </svg>
  );
}
export default DualScreenSettings;
