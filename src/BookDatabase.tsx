import type { SVGProps } from "react";

export function BookDatabase(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8ZM8.483 6.345C8.126 6.552 8 6.787 8 7c0 .213.126.448.483.655C8.841 7.863 9.374 8 10 8c.626 0 1.159-.137 1.517-.345c.357-.207.483-.442.483-.655c0-.213-.126-.448-.483-.655C11.159 6.137 10.626 6 10 6c-.626 0-1.159.137-1.517.345ZM12 8.531c-.544.31-1.254.469-2 .469c-.747 0-1.456-.16-2-.47V11c0 .123.107.365.496.607c.367.228.9.393 1.504.393s1.137-.165 1.504-.393c.389-.242.496-.484.496-.607V8.53ZM7 7c0-.687.434-1.202.981-1.52C8.528 5.163 9.245 5 10 5c.755 0 1.472.163 2.019.48c.547.318.981.833.981 1.52v4c0 .627-.452 1.135-.968 1.456c-.538.334-1.256.544-2.032.544s-1.494-.21-2.032-.544C7.452 12.136 7 11.627 7 11V7Z"
      />
    </svg>
  );
}
export default BookDatabase;
