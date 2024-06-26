import type { SVGProps } from "react";

export function WindowAdOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m2.854 2.146l15 15a.5.5 0 0 1-.708.708l-1.267-1.268A2.49 2.49 0 0 1 14.5 17h-9A2.5 2.5 0 0 1 3 14.5v-9c0-.51.152-.983.414-1.379L2.146 2.854a.5.5 0 1 1 .708-.708Zm11.853 13.268L11 11.707v.793a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h.793l-1-1H4.5v7.25c0 .69.56 1.25 1.25 1.25h8.5c.161 0 .315-.03.457-.086ZM8.293 9H7v3h3v-1.293L8.293 9Zm7.207 4.379V7H9.121L5.146 3.025C5.262 3.008 5.38 3 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9c0 .12-.009.238-.025.354L15.5 13.379Z"
      />
    </svg>
  );
}
export default WindowAdOffFilled;
