import type { SVGProps } from "react";

export function PortHdmiFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.854 7.44A1.5 1.5 0 0 1 5.914 7h8.172a1.5 1.5 0 0 1 1.06.44l2.415 2.414a1.5 1.5 0 0 1 .439 1.06v.586a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 11.5v-.586c0-.398.158-.78.44-1.06l2.414-2.415ZM6.5 9.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"
      />
    </svg>
  );
}
export default PortHdmiFilled;
