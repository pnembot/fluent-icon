import type { SVGProps } from "react";

export function StarDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-.55.535a5.467 5.467 0 0 0-.995-.426L17 8.428L12.684 7.8a1 1 0 0 1-.752-.547l-1.93-3.911L8.07 7.253a1 1 0 0 1-.753.547L3 8.428l3.124 3.044a1 1 0 0 1 .287.885l-.737 4.3l3.34-1.756c.025.356.085.703.175 1.037l-3.05 1.604a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627l1.93-3.912ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.707L14.5 13.793l-1.146-1.146a.5.5 0 0 0-.708.707l1.147 1.146l-1.147 1.147a.5.5 0 0 0 .708.707l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.707L15.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default StarDismiss;
