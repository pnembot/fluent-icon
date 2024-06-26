import type { SVGProps } from "react";

export function DocumentTableTruck(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 9a1.5 1.5 0 0 0-1.42 1.014c.345.04.665.16.942.34A.5.5 0 0 1 7.5 10H8v1.477a2 2 0 0 1 1.043.962l.281.561H13v1.5a.5.5 0 0 1-.5.5H10v1h2.5a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12.5 9h-5Zm5.5 3H9v-2h3.5a.5.5 0 0 1 .5.5V12Zm-9-2h1V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-4c0 .364-.097.706-.268 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6a2 2 0 0 0-2 2v6Zm10.793-3H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM2.167 11C1.522 11 1 11.522 1 12.167v4.666c0 .474.282.88.686 1.064A1.334 1.334 0 0 0 4.291 18h.751a1.334 1.334 0 0 0 2.583 0H8a1 1 0 0 0 1-1v-2.176a1 1 0 0 0-.106-.447l-.745-1.49a1 1 0 0 0-.894-.554H7v-.166C7 11.522 6.478 11 5.833 11H2.167ZM7 14.333V13h.255c.126 0 .241.071.298.184l.574 1.15H7Zm-4.667 3.334a.667.667 0 1 1 1.334 0a.667.667 0 0 1-1.334 0Zm4 .666a.667.667 0 1 1 0-1.333a.667.667 0 0 1 0 1.333Z"
      />
    </svg>
  );
}
export default DocumentTableTruck;
