import type { SVGProps } from "react";

export function ArrowSortFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.84 16.722a.762.762 0 0 1-.59.278a.731.731 0 0 1-.527-.22l-3.004-3.008a.75.75 0 0 1 0-1.06a.748.748 0 0 1 1.06 0l1.721 1.732V3.75a.75.75 0 0 1 1.5 0v10.684l1.722-1.718a.748.748 0 0 1 1.059 0a.75.75 0 0 1 0 1.06l-2.942 2.946ZM6.34 3.278A.762.762 0 0 0 5.75 3a.731.731 0 0 0-.527.22L2.22 6.228a.75.75 0 0 0 0 1.06a.748.748 0 0 0 1.06 0L5 5.557V16.25a.75.75 0 0 0 1.5 0V5.566l1.722 1.718a.748.748 0 0 0 1.059 0a.75.75 0 0 0 0-1.06L6.339 3.277Z"
      />
    </svg>
  );
}
export default ArrowSortFilled;
