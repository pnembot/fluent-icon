import type { SVGProps } from "react";

export function StarAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-.549.535a5.465 5.465 0 0 0-.996-.426l.847-.825l-4.317-.628a1 1 0 0 1-.752-.547l-1.93-3.911L8.07 7.253a1 1 0 0 1-.753.547L3 8.428l3.124 3.044a1 1 0 0 1 .287.885l-.737 4.3L9.016 14.9c.026.356.085.703.176 1.037L6.14 17.542a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627l1.93-3.912Zm9.898 11.6a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1h1.5v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1h-1.5v-1.5Z"
      />
    </svg>
  );
}
export default StarAdd;
