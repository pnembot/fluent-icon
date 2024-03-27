import type { SVGProps } from "react";

export function ConvertRange(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5ZM4 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Zm3 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H7Zm4.879-3.5H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.085a1.506 1.506 0 0 1-1 0V16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6.085a1.49 1.49 0 0 1 .354-.56l.44-.44ZM18 7.5a.5.5 0 0 0-1 0v2a1.5 1.5 0 0 1-1.5 1.5h-1.793l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L13.707 12H15.5A2.5 2.5 0 0 0 18 9.5v-2Z"
      />
    </svg>
  );
}
export default ConvertRange;
