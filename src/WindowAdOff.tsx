import type { SVGProps } from "react";

export function WindowAdOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m2.854 2.146l15 15a.5.5 0 0 1-.708.708l-1.269-1.27c-.395.263-.87.416-1.38.416h-9a2.5 2.5 0 0 1-2.5-2.5v-9c0-.51.153-.985.415-1.38L2.146 2.854a.5.5 0 1 1 .708-.708Zm12.292 13.707L10 10.707V12.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1.793l-1-1H3.997v7.5a1.5 1.5 0 0 0 1.5 1.5h9c.232 0 .452-.053.649-.147ZM5.293 6L4.144 4.851a1.494 1.494 0 0 0-.147.649V6h1.296Zm3 3H6v3h3V9.707L8.293 9Zm7.704-3H8.121l1 1h6.876v6.876l.976.975c.016-.115.024-.232.024-.351V7H17V6h-.003v-.5a2.5 2.5 0 0 0-2.5-2.5h-9c-.12 0-.236.008-.351.024L6.12 4h8.376a1.5 1.5 0 0 1 1.5 1.5V6Z"
      />
    </svg>
  );
}
export default WindowAdOff;
