import type { SVGProps } from "react";

export function MentionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 1.75A8.25 8.25 0 0 1 18.25 10c0 2.827-1.224 4.75-3.25 4.75c-1.204 0-2.125-.68-2.674-1.824c-.652.825-1.624 1.324-2.826 1.324c-2.293 0-3.75-1.816-3.75-4.25c0-2.464 1.41-4.25 3.75-4.25c.896 0 1.656.262 2.253.724a.746.746 0 0 1 .747-.724a.75.75 0 0 1 .743.648l.007.102V10c0 2.102.73 3.25 1.75 3.25s1.75-1.148 1.75-3.25a6.75 6.75 0 1 0-4.452 6.349a.75.75 0 0 1 .51 1.41A8.25 8.25 0 1 1 10 1.75Zm-.5 5.5c-1.423 0-2.25 1.047-2.25 2.75c0 1.67.867 2.75 2.25 2.75s2.25-1.08 2.25-2.75c0-1.703-.827-2.75-2.25-2.75Z"
      />
    </svg>
  );
}
export default MentionFilled;
