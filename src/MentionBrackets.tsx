import type { SVGProps } from "react";

export function MentionBrackets(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 3A1.5 1.5 0 0 0 3 4.5v11A1.5 1.5 0 0 0 4.5 17h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 2 15.5v-11A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm11 14a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 3h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2Zm-4-7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0ZM10 7.5c.563 0 1.082.186 1.5.5a.5.5 0 0 1 1 0v2.75a.75.75 0 0 0 1.5 0V10a4 4 0 1 0-4.239 3.993L9.758 14l.025-.006c.072.004.144.006.217.006c.45 0 .927-.084 1.36-.228c.3-.098.64.11.64.424a.552.552 0 0 1-.361.53A5 5 0 1 1 15 10v.749a1.75 1.75 0 0 1-3.198.983A2.5 2.5 0 1 1 10 7.5Z"
      />
    </svg>
  );
}
export default MentionBrackets;
