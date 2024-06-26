import type { SVGProps } from "react";

export function TextColumnOneWideLightningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.75 5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Zm0 3a.75.75 0 0 0 0 1.5h8.456A5.48 5.48 0 0 1 14.5 9c.743 0 1.452.147 2.098.414A.75.75 0 0 0 16.25 8H3.75Zm0 3h6.507a5.495 5.495 0 0 0-.882 1.5H3.75a.75.75 0 0 1 0-1.5Zm0 3h5.272a5.571 5.571 0 0 0 .069 1.5H3.75a.75.75 0 0 1 0-1.5Zm15.25.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.472.334l-.88 2.5A.5.5 0 0 0 13 15h.776l-.508 1.869a.5.5 0 0 0 .903.401l2.25-3.5A.5.5 0 0 0 16 13h-.746l.28-.842a.5.5 0 0 0-.474-.658h-1.18Z"
      />
    </svg>
  );
}
export default TextColumnOneWideLightningFilled;
