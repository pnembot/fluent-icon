import type { SVGProps } from "react";

export function CubeAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.304c.57.227.943.779.943 1.392v4.08A5.477 5.477 0 0 0 14.5 9a5.484 5.484 0 0 0-4 1.725v-1.9l4.203-1.868a.5.5 0 1 0-.406-.914L10 7.952l-4.297-1.91a.5.5 0 1 0-.406.914L9.5 8.824v3.381A5.48 5.48 0 0 0 9 14.5c0 1.224.4 2.355 1.076 3.268a3.498 3.498 0 0 1-1.376-.25l-5.757-2.302A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392L8.7 2.48ZM17 18.24a4.5 4.5 0 1 1-5-7.483a4.5 4.5 0 0 1 5 7.484Zm-2.146-6.094a.5.5 0 0 0-.854.353v1.5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0v-1.5h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354Z"
      />
    </svg>
  );
}
export default CubeAddFilled;
