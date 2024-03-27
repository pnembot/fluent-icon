import type { SVGProps } from "react";

export function DualScreenSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.065 2.441a2 2 0 0 1-1.43 2.478l-.461.118a4.734 4.734 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.423c.257.203.537.377.835.517l.325-.344a2 2 0 0 1 2.909.002l.337.358c.293-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.461-.118a4.732 4.732 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.32 4.32 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.315 4.315 0 0 0-.822.497l.156.557ZM14.5 6.499a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm0 4.5c1.33 0 2.55-.472 3.5-1.257v6.257a2 2 0 0 1-2 2h-5.5V9.274a5.485 5.485 0 0 0 4 1.725Zm-5-3.205a5.466 5.466 0 0 1-.478-1.795H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5V7.794ZM6 15.499a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 1 0 0-1h-1Z"
      />
    </svg>
  );
}
export default DualScreenSettingsFilled;
