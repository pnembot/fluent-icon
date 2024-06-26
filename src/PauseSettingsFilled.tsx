import type { SVGProps } from "react";

export function PauseSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 3.5A1.5 1.5 0 0 1 13.5 2h2A1.5 1.5 0 0 1 17 3.5v6.1a5.47 5.47 0 0 0-2.5-.6c-.9 0-1.75.216-2.5.6V3.5Zm-9 0A1.5 1.5 0 0 1 4.5 2h2A1.5 1.5 0 0 1 8 3.5v13A1.5 1.5 0 0 1 6.5 18h-2A1.5 1.5 0 0 1 3 16.5v-13Zm9.065 7.942a2 2 0 0 1-1.43 2.478l-.461.118a4.735 4.735 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.423c.257.203.537.377.835.517l.325-.344a2 2 0 0 1 2.909.002l.337.358c.293-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.461-.118a4.731 4.731 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.822.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default PauseSettingsFilled;
