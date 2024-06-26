import type { SVGProps } from "react";

export function DesktopSpeakerOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4c0-.37.101-.718.277-1.016l-.13-.13a.5.5 0 1 1 .707-.708l15 15a.5.5 0 0 1-.707.707L14 14.708V17.5a.5.5 0 0 1-.854.354L11.293 16H10.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.793l.5-.5l-8.76-8.759C3.013 3.824 3 3.911 3 4v9a1 1 0 0 0 1 1h5v1H8v2h2.879l1 1H5.5a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4Zm16.5 10.5a7.42 7.42 0 0 1-.186 1.693l-.862-.863a6.95 6.95 0 0 0 .048-.83c0-.814-.13-1.505-.343-2.074a3.476 3.476 0 0 0-.239-.52l-.068-.106a.5.5 0 0 1 .8-.6c.121.162.285.453.443.875c.255.68.407 1.489.407 2.425Zm-2.276-1.533c.158.473.258.95.274 1.41l-1.293-1.293a3.946 3.946 0 0 0-.152-.36a.5.5 0 1 1 .894-.448c.073.145.175.385.277.69ZM16 3H5.121l-1-1H16a2 2 0 0 1 2 2v6.2a1.506 1.506 0 0 0-1-.18V4a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
}
export default DesktopSpeakerOff;
