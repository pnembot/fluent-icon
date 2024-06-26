import type { SVGProps } from "react";

export function StarEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.898 2.9a1 1 0 0 0-1.794 0l-1.93 3.91l-4.317.628a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l3.426-1.801c.16-.4.4-.764.707-1.07l.09-.091a1 1 0 0 0-.827.047l-3.861 2.03l.737-4.3a1 1 0 0 0-.287-.885L3 8.428L7.318 7.8a1 1 0 0 0 .753-.547L10 3.342l1.93 3.911a1 1 0 0 0 .753.547L17 8.428l-.719.7a2.884 2.884 0 0 1 1.485-.057a1 1 0 0 0-.622-1.633l-4.317-.627l-1.93-3.912Zm4.911 7.648l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.185 2.185 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default StarEdit;
