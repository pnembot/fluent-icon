import type { SVGProps } from "react";

export function BuildingPeopleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 2A1.5 1.5 0 0 0 4 3.5v14a.5.5 0 0 0 .5.5h4.744A2.981 2.981 0 0 1 9 16.812c0-1.056.709-1.97 1.695-2.235a2.75 2.75 0 1 1 4.545-2.996a2.26 2.26 0 0 1 .76-.453V9.5A1.5 1.5 0 0 0 14.5 8H13V3.5A1.5 1.5 0 0 0 11.5 2h-6Zm2 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM6.75 8a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM9.75 5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm4 4a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Zm1.5 4.063c0 1.09-.857 2.187-3 2.187s-3-1.094-3-2.188c0-.724.576-1.312 1.286-1.312h3.428c.71 0 1.286.588 1.286 1.313Zm.477 1.687h.023c1.786 0 2.5-.941 2.5-1.875c0-.621-.48-1.125-1.071-1.125h-1.333c.256.375.404.829.404 1.313c0 .582-.166 1.173-.523 1.687ZM18 13.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"
      />
    </svg>
  );
}
export default BuildingPeopleFilled;
