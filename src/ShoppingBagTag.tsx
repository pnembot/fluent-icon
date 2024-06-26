import type { SVGProps } from "react";

export function ShoppingBagTag(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2.5a2.5 2.5 0 0 0-4 2V6H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h4.53l-.979-1H7a2 2 0 0 1-2-2V7h6v2.052A2.52 2.52 0 0 1 11.51 9H12V7h3v2.077c.366.093.709.268 1 .514V7a1 1 0 0 0-1-1h-1V4.5a2.5 2.5 0 0 0-4-2Zm-3 2a1.5 1.5 0 1 1 3 0V6H7V4.5Zm3.667-1.248A1.5 1.5 0 0 1 13 4.5V6h-2V4.5c0-.454-.121-.88-.333-1.248Zm-.235 12.197A1.513 1.513 0 0 1 10 14.391v-2.88A1.51 1.51 0 0 1 11.51 10h2.873c.403 0 .789.161 1.072.447l3.107 3.14a1.513 1.513 0 0 1-.025 2.154l-2.947 2.837a1.508 1.508 0 0 1-2.124-.031l-3.034-3.098ZM12 12.75a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0Z"
      />
    </svg>
  );
}
export default ShoppingBagTag;
