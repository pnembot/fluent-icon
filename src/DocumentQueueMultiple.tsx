import type { SVGProps } from "react";

export function DocumentQueueMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m12.384 3.746l1.11 1.127L16 7.38v-.67c0-.46-.18-.9-.503-1.228l-2.4-2.437A3.5 3.5 0 0 0 10.603 2H5.75a1.75 1.75 0 0 0-1.746 1.625A2.739 2.739 0 0 1 5.75 3h4.853a2.5 2.5 0 0 1 1.781.746ZM2.5 13a.5.5 0 0 1 .5.5v1A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 14.5v-1a.5.5 0 0 1 .5-.5ZM6 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm10-1.994V9.48a1.75 1.75 0 0 0-.513-1.199L11.72 4.513A1.75 1.75 0 0 0 10.5 4H5.75A1.75 1.75 0 0 0 4 5.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 16 14.25V9.506ZM5 5.75A.75.75 0 0 1 5.75 5H10v3.5a1.5 1.5 0 0 0 1.5 1.5H15v4.25a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-8.5Zm6-.543l.013.013l3.767 3.767l.013.013H11.5a.5.5 0 0 1-.5-.5V5.207Z"
      />
    </svg>
  );
}
export default DocumentQueueMultiple;
