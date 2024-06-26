import type { SVGProps } from "react";

export function DatabaseWindowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3s2.686 3 6 3Zm4.69.016c.47-.235.927-.534 1.31-.896V9h-4.5A2.5 2.5 0 0 0 9 11.5v6c0 .158.015.312.043.462C6.184 17.732 4 16.494 4 15V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9c1.778 0 3.438-.358 4.69-.984ZM10 11.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v.5h-9v-.5Zm0 1.5h9v4.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V13Z"
      />
    </svg>
  );
}
export default DatabaseWindowFilled;
