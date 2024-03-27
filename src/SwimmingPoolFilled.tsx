import type { SVGProps } from "react";

export function SwimmingPoolFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.75 4a.75.75 0 0 0-.75.75v.5a.75.75 0 0 1-1.5 0v-.5a2.25 2.25 0 0 1 4.5 0V7.5h5V4.75a.75.75 0 1 0-1.5 0v.5a.75.75 0 1 1-1.5 0v-.5a2.25 2.25 0 0 1 4.5 0v7.031a4.66 4.66 0 0 1-1.5.22V9H8v1.229a7.163 7.163 0 0 0-1.5-.221V4.75A.75.75 0 0 0 5.75 4Zm.063 8.527a3.35 3.35 0 0 0-1.612.613a.75.75 0 0 1-.894-1.205a4.847 4.847 0 0 1 2.337-.898c1.143-.13 2.572.089 4.234 1.052c2.933 1.702 5.303.579 5.997.172a.75.75 0 1 1 .759 1.294c-.915.537-3.905 1.922-7.51-.168c-1.41-.818-2.517-.95-3.311-.86Zm0 3a3.35 3.35 0 0 0-1.612.613a.75.75 0 0 1-.894-1.205a4.847 4.847 0 0 1 2.337-.898c1.143-.13 2.572.089 4.234 1.052c2.933 1.702 5.303.579 5.997.172a.75.75 0 1 1 .759 1.294c-.915.537-3.905 1.922-7.51-.168c-1.41-.818-2.517-.95-3.311-.86Z"
      />
    </svg>
  );
}
export default SwimmingPoolFilled;
