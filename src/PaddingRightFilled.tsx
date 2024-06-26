import type { SVGProps } from "react";

export function PaddingRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 3.75a.75.75 0 0 1 .75.75V15A.75.75 0 0 1 2 15V4.5a.75.75 0 0 1 .75-.75Zm14.5 0a.75.75 0 0 1 .75.75v1.313a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75Zm0 3.938a.75.75 0 0 1 .75.75v2.624a.75.75 0 0 1-1.5 0V8.438a.75.75 0 0 1 .75-.75Zm0 5.25a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0v-1.313a.75.75 0 0 1 .75-.75Zm-1.97-2.658a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 1 0-1.06 1.06L12.94 9H5.75a.75.75 0 0 0 0 1.5h7.19l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25Z"
      />
    </svg>
  );
}
export default PaddingRightFilled;
