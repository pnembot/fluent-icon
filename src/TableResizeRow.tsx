import type { SVGProps } from "react";

export function TableResizeRow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.854 7.354a.5.5 0 0 1-.708 0l-.646-.647v6.586l.646-.647a.5.5 0 0 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V6.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708ZM14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8Zm2-4h-3c0 .358-.127.716-.382 1H16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2h3.382A1.495 1.495 0 0 1 7 13H4V7h3c0-.358.127-.716.382-1H4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2h-3.382c.255.284.382.642.382 1h3v6Z"
      />
    </svg>
  );
}
export default TableResizeRow;
