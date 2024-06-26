import type { SVGProps } from "react";

export function BookTemplate(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 3.5A2.5 2.5 0 0 1 4.5 1h9A2.5 2.5 0 0 1 16 3.5V6h-1V3.5A1.5 1.5 0 0 0 13.5 2h-9A1.5 1.5 0 0 0 3 3.5v9A1.5 1.5 0 0 0 4.5 14H8v1H4.5A2.5 2.5 0 0 1 2 12.5v-9ZM5.5 6H11a2.99 2.99 0 0 0-2.236 1H5.5a.5.5 0 0 1 0-1Zm2.67 2H5.5a.5.5 0 0 0 0 1H8c0-.35.06-.687.17-1ZM5.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM18 9a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6.5a.5.5 0 0 0 0-1H11a1 1 0 0 1-1-1v-.003h7.5a.5.5 0 0 0 .5-.5V9Zm-8 6.997V9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6.997h-7Z"
      />
    </svg>
  );
}
export default BookTemplate;
