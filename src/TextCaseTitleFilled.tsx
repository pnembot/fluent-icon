import type { SVGProps } from "react";

export function TextCaseTitleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 3.25a.75.75 0 0 1 .75.75v4.657A2.71 2.71 0 0 1 15 8c1.657 0 3 1.567 3 3.5S16.657 15 15 15a2.71 2.71 0 0 1-1.75-.657v.157a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75ZM15 13.5c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2s-1.5.67-1.5 2s.88 2 1.5 2ZM6.495 3.25a.75.75 0 0 1 .698.504l3.652 10.5a.75.75 0 1 1-1.417.492L8.647 12.5H4.06l-.86 2.266a.75.75 0 0 1-1.402-.532l3.984-10.5a.75.75 0 0 1 .712-.484ZM4.63 11h3.495L6.454 6.195L4.63 11Z"
      />
    </svg>
  );
}
export default TextCaseTitleFilled;
