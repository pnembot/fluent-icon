import type { SVGProps } from "react";

export function DesktopSpeakerOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.146 2.853a.5.5 0 0 1 .707-.707l15 15a.5.5 0 0 1-.707.707L14 14.708V17.5a.5.5 0 0 1-.854.354L11.293 16H10.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.793l.5-.5l-.707-.707l-.207.207H10.5A1.5 1.5 0 0 0 9 13.5V15H8v2h2.879l1 1H5.5a.5.5 0 0 1 0-1H7v-2H3.5A1.5 1.5 0 0 1 2 13.5v-10c0-.232.052-.45.146-.647ZM18.5 14.5a7.42 7.42 0 0 1-.186 1.693l-.862-.863a6.95 6.95 0 0 0 .048-.83c0-.814-.13-1.505-.343-2.074a3.476 3.476 0 0 0-.239-.52l-.068-.106a.5.5 0 0 1 .8-.6c.121.162.285.453.443.875c.255.68.407 1.489.407 2.425Zm-2.276-1.533c.158.473.258.95.274 1.41l-1.293-1.293a3.946 3.946 0 0 0-.152-.36a.5.5 0 1 1 .894-.448c.073.145.175.385.277.69Zm-2.15-2.853a1.5 1.5 0 0 0-1.572.266L4.122 2H16.5A1.5 1.5 0 0 1 18 3.5v6.7a1.5 1.5 0 0 0-2.176.835a1.494 1.494 0 0 0-.877.07a1.5 1.5 0 0 0-.873-.99Z"
      />
    </svg>
  );
}
export default DesktopSpeakerOffFilled;
