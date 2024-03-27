import type { SVGProps } from "react";

export function StarProhibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-.549.535a5.465 5.465 0 0 0-.996-.426l.847-.825l-4.317-.628a1 1 0 0 1-.752-.547l-1.93-3.911L8.07 7.253a1 1 0 0 1-.753.547L3 8.428l3.124 3.044a1 1 0 0 1 .287.885l-.737 4.3L9.016 14.9c.026.356.085.703.176 1.037L6.14 17.542a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627l1.93-3.912Zm.898 11.6a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9a3.484 3.484 0 0 1-.696-2.097Zm3.5 3.5a3.482 3.482 0 0 1-2.096-.697l4.9-4.899A3.5 3.5 0 0 1 14.502 18Z"
      />
    </svg>
  );
}
export default StarProhibited;
