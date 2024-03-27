import type { SVGProps } from "react";

export function StarCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.898 2.9a1 1 0 0 0-1.794 0l-1.93 3.91l-4.317.628a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l3.05-1.604a5.485 5.485 0 0 1-.176-1.037l-3.34 1.756l.738-4.3a1 1 0 0 0-.287-.885L3 8.428L7.318 7.8a1 1 0 0 0 .753-.547L10 3.342l1.93 3.911a1 1 0 0 0 .753.547L17 8.428l-.847.825c.348.11.681.253.995.426l.55-.535a1 1 0 0 0-.554-1.706l-4.317-.627l-1.93-3.912ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default StarCheckmark;
