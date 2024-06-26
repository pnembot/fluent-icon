import type { SVGProps } from "react";

export function ShieldBadge(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1.569c-.555-.238-.816-.54-1-.816V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6v.5c0 .172.002.338.007.5H4a2 2 0 0 1-2-2V7Zm12.53 1.832a.5.5 0 0 1 .949.017c.01.021.03.06.062.108c.065.097.183.242.384.393c.397.298 1.16.65 2.575.65a.5.5 0 0 1 .5.5v2c0 1.034-.127 2.137-.69 3.123c-.573 1.001-1.558 1.82-3.152 2.351a.5.5 0 0 1-.316 0c-1.594-.53-2.579-1.35-3.151-2.35c-.564-.987-.691-2.09-.691-3.124v-2a.5.5 0 0 1 .5-.5c1.414 0 2.178-.352 2.575-.65c.201-.15.32-.296.384-.393a.884.884 0 0 0 .07-.125Zm.943.007v.001l-.001-.006v.002l.001.003Zm-.002-.007s0-.002 0 0Zm-.943.002l-.002.006l.002-.003v-.002Zm.147 1.316c-.537.403-1.378.762-2.675.836V12.5c0 .966.123 1.863.56 2.627c.41.72 1.134 1.378 2.44 1.844c1.306-.466 2.03-1.124 2.44-1.844c.437-.764.56-1.66.56-2.627v-1.514c-1.297-.074-2.138-.433-2.675-.836A2.888 2.888 0 0 1 15 9.867a2.888 2.888 0 0 1-.325.283Zm-.147-1.316l.001-.002v-.001"
      />
    </svg>
  );
}
export default ShieldBadge;
