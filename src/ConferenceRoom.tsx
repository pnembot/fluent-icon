import type { SVGProps } from "react";

export function ConferenceRoom(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.487 10a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM9.605 2.014A.5.5 0 0 0 9 2.502v15a.5.5 0 0 0 .605.489l7-1.501a.5.5 0 0 0 .394-.49V4a.5.5 0 0 0-.395-.488l-7-1.499ZM10 16.883V3.12l6 1.285v11.192l-6 1.286Zm-1.998.115v-1H4V4.003h4.002v-1H3.5a.5.5 0 0 0-.5.5v12.995a.5.5 0 0 0 .5.5h4.502Z"
      />
    </svg>
  );
}
export default ConferenceRoom;
