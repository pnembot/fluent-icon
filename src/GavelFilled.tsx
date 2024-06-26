import type { SVGProps } from "react";

export function GavelFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.666 7.59a1.5 1.5 0 0 1-.226-2.307L9.281 2.44a1.5 1.5 0 0 1 2.278.184l.473.657l-4.733 4.732l-.633-.424Zm1.48.991l4.478-4.477l1.322 1.836a.5.5 0 0 0 .113.114l1.837 1.323l-4.478 4.477l-1.257-1.877a.5.5 0 0 0-.137-.137L8.146 8.58Zm3.84 4.12l4.732-4.732l.655.472a1.5 1.5 0 0 1 .184 2.278l-2.84 2.841a1.5 1.5 0 0 1-2.307-.225l-.425-.634ZM8.188 9.814l-5.775 5.775a1.412 1.412 0 1 0 1.997 1.997l5.775-5.775l-.801-1.196l-1.196-.801ZM12 16.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h2a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1h2a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default GavelFilled;
