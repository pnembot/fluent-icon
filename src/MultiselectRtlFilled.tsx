import type { SVGProps } from "react";

export function MultiselectRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 2 5.25Zm0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm.75 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5ZM18.308 4.252a.75.75 0 1 0-1.116-1.004l-1.72 1.913l-.692-.691a.75.75 0 1 0-1.06 1.06l1.25 1.25a.75.75 0 0 0 1.088-.028l2.25-2.5Zm-.056 8.94a.75.75 0 0 1 .056 1.06l-2.25 2.5a.75.75 0 0 1-1.088.028l-1.25-1.25a.75.75 0 1 1 1.06-1.06l.691.69l1.721-1.912a.75.75 0 0 1 1.06-.055Z"
      />
    </svg>
  );
}
export default MultiselectRtlFilled;
