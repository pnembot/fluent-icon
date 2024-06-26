import type { SVGProps } from "react";

export function CodeTextEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Zm3 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM4 11.25a.75.75 0 0 1 .75-.75h9.5c.06 0 .118.007.174.02L12.944 12H4.75a.75.75 0 0 1-.75-.75Zm6.274 3.42l.977-.978a.747.747 0 0 0-.501-.192h-8a.75.75 0 0 0 0 1.5h7.236a3.21 3.21 0 0 1 .288-.33ZM12.5 8.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM10.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm.23 10.877l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default CodeTextEditFilled;
