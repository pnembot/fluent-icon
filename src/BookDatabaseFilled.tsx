import type { SVGProps } from "react";

export function BookDatabaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm4.483 2.345C8.126 6.552 8 6.787 8 7c0 .213.126.448.483.655C8.841 7.863 9.374 8 10 8c.626 0 1.159-.137 1.517-.345c.357-.207.483-.442.483-.655c0-.213-.126-.448-.483-.655C11.159 6.137 10.626 6 10 6c-.626 0-1.159.137-1.517.345Zm-.502-.865C7.434 5.798 7 6.313 7 7v4c0 .627.452 1.135.968 1.456C8.506 12.79 9.224 13 10 13s1.494-.21 2.032-.544c.516-.32.968-.829.968-1.456V7c0-.687-.434-1.202-.981-1.52C11.472 5.163 10.755 5 10 5c-.755 0-1.472.163-2.019.48ZM12 11V8.53c-.544.31-1.254.47-2 .47c-.747 0-1.456-.16-2-.47V11c0 .123.107.365.496.607c.367.228.9.393 1.504.393s1.137-.165 1.504-.393c.389-.242.496-.484.496-.607Z"
      />
    </svg>
  );
}
export default BookDatabaseFilled;
