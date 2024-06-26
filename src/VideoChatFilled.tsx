import type { SVGProps } from "react";

export function VideoChatFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 5.5A2.5 2.5 0 0 0 11.5 3h-6A2.5 2.5 0 0 0 3 5.5v3.1a5.5 5.5 0 0 1 7.794 6.4h.706a2.5 2.5 0 0 0 2.5-2.5v-7Zm1 1.43v4.152l2.764 2.35A.75.75 0 0 0 19 12.86V5.193a.75.75 0 0 0-1.23-.575L15 6.93ZM5.5 18a4.5 4.5 0 1 0-3.936-2.318l-.545 1.789a.41.41 0 0 0 .51.51l1.79-.544A4.48 4.48 0 0 0 5.5 18ZM3 12.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z"
      />
    </svg>
  );
}
export default VideoChatFilled;
