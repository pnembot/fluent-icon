import type { SVGProps } from "react";

export function TableDeleteRowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 6H8V2h4v4ZM3.5 2H7v4H5a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 .5-.5ZM15 6h-2V2h3.5a.5.5 0 0 1 .5.5V4a2 2 0 0 1-2 2Zm1.5 12a.5.5 0 0 0 .5-.5V16a2 2 0 0 0-2-2h-2v4h3.5ZM12 18v-4H8v4h4Zm-5 0H3.5a.5.5 0 0 1-.5-.5V16a2 2 0 0 1 2-2h2v4Zm10.5-7.5a.5.5 0 0 0 0-1h-4.887c-.106.125-.224.24-.342.353l-.143.14l.143.14c.122.119.245.237.353.367H17.5Zm-15-1h4.887a5 5 0 0 0 .342.353l.143.14l-.143.14a4.833 4.833 0 0 0-.353.367H2.5a.5.5 0 0 1 0-1Zm9.354 2.354a.5.5 0 0 0 0-.708L10.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L10 9.293L8.854 8.146a.5.5 0 1 0-.708.708L9.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L10 10.707l1.146 1.147a.5.5 0 0 0 .708 0Z"
      />
    </svg>
  );
}
export default TableDeleteRowFilled;
