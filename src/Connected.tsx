import type { SVGProps } from "react";

export function Connected(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.879 6.586a2.5 2.5 0 1 1 .707-.707L8.62 7.914A2.49 2.49 0 0 1 9.999 7.5c.51 0 .983.152 1.379.414l2.035-2.035a2.5 2.5 0 1 1 .707.707L12.086 8.62c.262.396.414.87.414 1.379c0 .51-.152.983-.414 1.379l2.035 2.035a2.5 2.5 0 1 1-.707.707l-2.035-2.035a2.49 2.49 0 0 1-1.379.414c-.51 0-.983-.152-1.379-.414L6.586 14.12a2.5 2.5 0 1 1-.707-.707l2.035-2.035A2.488 2.488 0 0 1 7.5 10c0-.51.152-.983.414-1.379L5.88 6.586ZM6 4.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Zm11 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0ZM4.5 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM17 15.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0ZM11.5 10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"
      />
    </svg>
  );
}
export default Connected;
