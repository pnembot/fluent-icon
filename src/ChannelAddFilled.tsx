import type { SVGProps } from "react";

export function ChannelAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3a2.5 2.5 0 0 0-2.302 1.523A2 2 0 1 1 3 8.437V14.5A2.5 2.5 0 0 0 5.5 17h4.1a5.47 5.47 0 0 1-.6-2.5c0-.9.216-1.75.6-2.5H7.5a.5.5 0 0 1 0-1h2.757A5.489 5.489 0 0 1 14.5 9c.9 0 1.75.216 2.5.6V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM7 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-3.5-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm15.5 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default ChannelAddFilled;
