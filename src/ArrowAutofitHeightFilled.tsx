import type { SVGProps } from "react";

export function ArrowAutofitHeightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m15.003 4.498l.71.735A.75.75 0 0 0 16.79 4.19l-1.82-1.886a1 1 0 0 0-1.44 0L11.71 4.19a.75.75 0 0 0 1.079 1.042l.713-.739V7.25a.75.75 0 0 0 1.5 0V4.498ZM3 5a2 2 0 0 1 2-2h4.25a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h4.25a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V5Zm12.712 9.767l-.71.735V12.75a.75.75 0 1 0-1.5 0v2.756l-.713-.739a.75.75 0 0 0-1.079 1.042l1.821 1.886a1 1 0 0 0 1.44 0l1.82-1.886a.75.75 0 0 0-1.079-1.042Z"
      />
    </svg>
  );
}
export default ArrowAutofitHeightFilled;
