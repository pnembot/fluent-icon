import type { SVGProps } from "react";

export function ImageProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-1c-.786 0-1.512-.26-2.096-.697l4.9-4.899A3.5 3.5 0 0 1 5.5 9ZM2.697 7.596a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9ZM13 7.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM5.5 11a5.5 5.5 0 0 0 4.9-8H14a3 3 0 0 1 3 3v8c0 .65-.206 1.25-.557 1.742l-5.39-5.308a1.5 1.5 0 0 0-2.105 0l-5.39 5.308A2.986 2.986 0 0 1 3 14v-3.6c.75.384 1.6.6 2.5.6ZM14 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0ZM6 17a2.987 2.987 0 0 1-1.735-.552l5.384-5.3a.5.5 0 0 1 .702 0l5.384 5.3A2.987 2.987 0 0 1 14 17H6Z"
      />
    </svg>
  );
}
export default ImageProhibitedFilled;
