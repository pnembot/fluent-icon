import type { SVGProps } from "react";

export function SlideSettings(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v3.507a5.503 5.503 0 0 0-1-.657V6.75A1.75 1.75 0 0 0 15.25 5H4.75A1.75 1.75 0 0 0 3 6.75v6.5c0 .966.784 1.75 1.75 1.75h4.272a5.5 5.5 0 0 0 .185 1H4.75A2.75 2.75 0 0 1 2 13.25v-6.5Zm10.065 4.692a2 2 0 0 1-1.43 2.478l-.461.118a4.734 4.734 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.455 2.519l-.126.422c.257.204.537.378.835.518l.325-.344a2 2 0 0 1 2.909.002l.337.358c.293-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.461-.117a4.731 4.731 0 0 0-.01-1.017l-.349-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.324.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.822.497l.156.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default SlideSettings;
