import type { SVGProps } from "react";

export function DocumentQueueMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m12.384 3.746l1.11 1.127L16 7.38v-.67c0-.46-.18-.9-.503-1.228l-2.4-2.437A3.5 3.5 0 0 0 10.603 2H5.75a1.75 1.75 0 0 0-1.746 1.625A2.739 2.739 0 0 1 5.75 3h4.853a2.5 2.5 0 0 1 1.781.746ZM2.5 13a.5.5 0 0 1 .5.5v1A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 14.5v-1a.5.5 0 0 1 .5-.5ZM10 4v4.5a1.5 1.5 0 0 0 1.5 1.5H16v4.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9A1.5 1.5 0 0 1 5.5 4H10ZM6 7.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 11.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Zm5-7.25V8.5a.5.5 0 0 0 .5.5h4.25L11 4.25Z"
      />
    </svg>
  );
}
export default DocumentQueueMultipleFilled;
