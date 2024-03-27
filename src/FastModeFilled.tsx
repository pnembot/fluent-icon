import type { SVGProps } from "react";

export function FastModeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M12.677 4.383l4.23 4.23a2.777 2.777 0 0 1-2.606 4.666v.16c0 .86-.698 1.558-1.559 1.558H11V13.75c0-.535-.285-.983-.67-1.28A2.345 2.345 0 0 0 8.903 12H7.5a.5.5 0 1 0 0 1h1.402c.326 0 .617.107.815.26c.199.154.282.33.282.49v1.247H5.558c-.86 0-1.558-.698-1.558-1.558v-2.033c0-.06.001-.119.004-.177a2.121 2.121 0 1 1 2.048-2.925c.446-.194.942-.3 1.464-.3h3.288c.47 0 .919.092 1.329.26a9.48 9.48 0 0 0 .078-.134c.109-.19.231-.404.377-.554l-1.552-1.552a1.16 1.16 0 0 1 1.64-1.641z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default FastModeFilled;
