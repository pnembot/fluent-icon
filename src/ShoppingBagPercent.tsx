import type { SVGProps } from "react";

export function ShoppingBagPercent(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 2c.563 0 1.082.186 1.5.5a2.5 2.5 0 0 1 4 2V6h1a1 1 0 0 1 1 1v3.879l-1 1V7h-3v2c-.35 0-.687.06-1 .17V7H5v8a2 2 0 0 0 2 2h3.085a1.506 1.506 0 0 0 0 1H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1V4.5A2.5 2.5 0 0 1 8.5 2Zm0 1A1.5 1.5 0 0 0 7 4.5V6h3V4.5A1.5 1.5 0 0 0 8.5 3Zm3 0c-.308 0-.595.093-.833.252c.212.368.333.794.333 1.248V6h2V4.5A1.5 1.5 0 0 0 11.5 3Zm.5 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm5 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm0-3a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm.854-4.146a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6Z"
      />
    </svg>
  );
}
export default ShoppingBagPercent;
