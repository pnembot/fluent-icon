import type { SVGProps } from "react";

export function CommunicationPerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 11a7 7 0 0 1 13.79-1.71c.476.228.882.576 1.18 1.006a8 8 0 1 0-13.63 6.359a.5.5 0 0 0 .707-.707A6.976 6.976 0 0 1 3 11Zm11.637-1.874A5.002 5.002 0 0 0 5 11c0 1.378.558 2.627 1.46 3.531a.5.5 0 0 0 .708-.706a4 4 0 1 1 6.57-4.253a2.99 2.99 0 0 1 .899-.446ZM8 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm7.5 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default CommunicationPerson;
