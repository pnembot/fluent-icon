import type { SVGProps } from "react";

export function ShapeSubtract(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v6.057c.011.488.162.941.414 1.322l.013.019a2.486 2.486 0 0 0 1.874 1.094h.007c.063.005.127.008.192.008H7v2.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H13V4.5a2.486 2.486 0 0 0-.414-1.379l-.013-.019A2.487 2.487 0 0 0 10.514 2H4.5Zm.643 1L3 5.143V4.5A1.5 1.5 0 0 1 4.5 3h.643ZM3 6.557L6.557 3h1.586L3 8.143V6.557ZM9.557 3h.943c.232 0 .45.052.647.146l-8 8A1.494 1.494 0 0 1 3 10.5v-.943L9.557 3Zm2.297.853c.094.196.146.415.146.647v.793L10.293 7H9.5c-.356 0-.695.074-1.001.209l3.355-3.356ZM7.209 8.5A2.491 2.491 0 0 0 7 9.5v.793L5.293 12H4.5c-.232 0-.45-.053-.647-.146L7.21 8.499ZM8 9.5A1.5 1.5 0 0 1 9.5 8h6A1.5 1.5 0 0 1 17 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 8 15.5v-6Z"
      />
    </svg>
  );
}
export default ShapeSubtract;
