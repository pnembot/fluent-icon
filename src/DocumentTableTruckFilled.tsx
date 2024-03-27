import type { SVGProps } from "react";

export function DocumentTableTruckFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.872 11.43c.043.015.086.03.128.047V10h-.5a.5.5 0 0 0-.478.354c.388.256.69.633.85 1.077ZM13 13H9.324l.465.93a2 2 0 0 1 .211.894V15h2.5a.5.5 0 0 0 .5-.5V13Zm-7.167-3c.084 0 .166.005.248.014A1.5 1.5 0 0 1 7.5 9h5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H10v1c0 .364-.097.706-.268 1H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5V10h1.833Zm7.167.5V12H9v-2h3.5a.5.5 0 0 1 .5.5Zm-2-4V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM2.167 11C1.522 11 1 11.522 1 12.167v4.666c0 .474.282.88.686 1.064A1.334 1.334 0 0 0 4.291 18h.751a1.334 1.334 0 0 0 2.583 0H8a1 1 0 0 0 1-1v-2.176a1 1 0 0 0-.106-.447l-.745-1.49a1 1 0 0 0-.894-.554H7v-.166C7 11.522 6.478 11 5.833 11H2.167ZM7 14.333V13h.255c.126 0 .241.071.298.184l.574 1.15H7Zm-4.667 3.334a.667.667 0 1 1 1.334 0a.667.667 0 0 1-1.334 0Zm4 .666a.667.667 0 1 1 0-1.333a.667.667 0 0 1 0 1.333Z"
      />
    </svg>
  );
}
export default DocumentTableTruckFilled;
