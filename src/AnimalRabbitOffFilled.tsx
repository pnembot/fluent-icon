import type { SVGProps } from "react";

export function AnimalRabbitOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L7.303 8.01a3.655 3.655 0 0 0-1.25.294a2.122 2.122 0 1 0-2.048 2.925a3.514 3.514 0 0 0-.005.177v2.033c0 .86.698 1.558 1.559 1.558H10V13.75c0-.16-.083-.336-.281-.49a1.347 1.347 0 0 0-.816-.26H7.501a.5.5 0 0 1 0-1h1.402c.535 0 1.043.172 1.428.47c.385.297.67.745.67 1.28v1.247h1.742c.427 0 .814-.172 1.096-.45l3.307 3.307a.5.5 0 0 0 .708-.708l-15-15Zm14.053 10.395a2.765 2.765 0 0 1-1.475.77l-5.307-5.307h.68c.47 0 .918.092 1.328.26a9.48 9.48 0 0 0 .078-.134c.109-.19.232-.404.378-.554l-1.553-1.552a1.16 1.16 0 1 1 1.641-1.641l4.23 4.23a2.778 2.778 0 0 1 0 3.928Z"
      />
    </svg>
  );
}
export default AnimalRabbitOffFilled;
