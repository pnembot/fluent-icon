import type { SVGProps } from "react";

export function HeadsetAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5Zm0 7.5v-.022a5.489 5.489 0 0 0 1-.185V11a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-1.6c.317.162.651.294 1 .393V12h1a1 1 0 0 0 1-1Zm-4.747-8.995a5.51 5.51 0 0 0-.662 1.011A5 5 0 0 0 5 8h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5v1a2 2 0 0 0 2 2h1a2 2 0 1 1 .268 1H7a3 3 0 0 1-3-3V8a6 6 0 0 1 6.253-5.995ZM5 12h2V9H5v3Zm4 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}
export default HeadsetAdd;
