import type { SVGProps } from "react";

export function DocumentCssFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v7.67c.552.196 1.03.548 1.38 1.004A2.498 2.498 0 0 1 9.5 12a2.5 2.5 0 0 1 4.5 1.5c0 .444-.193.843-.5 1.118c.319.425.5.949.5 1.5v.382a2.49 2.49 0 0 1-.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM3 12a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0a.5.5 0 0 0-1 0a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0a.5.5 0 0 0 1 0a2 2 0 0 0-2-2Zm8.5 0a1.5 1.5 0 0 0-1.5 1.5v.382a1.5 1.5 0 0 0 .83 1.342l.894.447a.5.5 0 0 1 .276.447v.382a.5.5 0 0 1-1 0a.5.5 0 0 0-1 0a1.5 1.5 0 0 0 3 0v-.382a1.5 1.5 0 0 0-.83-1.342l-.894-.447a.5.5 0 0 1-.276-.447V13.5a.5.5 0 0 1 1 0a.5.5 0 0 0 1 0a1.5 1.5 0 0 0-1.5-1.5ZM6 13.5a1.5 1.5 0 0 1 3 0a.5.5 0 0 1-1 0a.5.5 0 0 0-1 0v.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 9 16.118v.382a1.5 1.5 0 0 1-3 0a.5.5 0 0 1 1 0a.5.5 0 0 0 1 0v-.382a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 6 13.882V13.5Z"
      />
    </svg>
  );
}
export default DocumentCssFilled;
