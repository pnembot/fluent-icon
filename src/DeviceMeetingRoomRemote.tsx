import type { SVGProps } from "react";

export function DeviceMeetingRoomRemote(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.658 4.946A2.5 2.5 0 0 1 6.096 3h7.807a2.5 2.5 0 0 1 2.438 1.946l1.591 7A2.5 2.5 0 0 1 15.494 15H9v-1h6.494a1.5 1.5 0 0 0 1.463-1.832l-1.59-7A1.5 1.5 0 0 0 13.902 4H6.096a1.5 1.5 0 0 0-1.462 1.168L4.217 7H3.5c-.106 0-.21.007-.313.02l.471-2.074ZM8.95 17h5.55a.5.5 0 0 0 0-1H9v.5c0 .171-.017.338-.05.5ZM5 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM2 9.5A1.5 1.5 0 0 1 3.5 8h3A1.5 1.5 0 0 1 8 9.5v7A1.5 1.5 0 0 1 6.5 18h-3A1.5 1.5 0 0 1 2 16.5v-7ZM3.5 9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-3Z"
      />
    </svg>
  );
}
export default DeviceMeetingRoomRemote;
