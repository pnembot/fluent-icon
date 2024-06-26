import type { SVGProps } from "react";

export function PhoneLock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.041a3.02 3.02 0 0 0-1 0V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v1H7a2 2 0 0 1-2-2V4Zm3.5 10H10v1H8.5a.5.5 0 0 1 0-1Zm4-2v1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default PhoneLock;
