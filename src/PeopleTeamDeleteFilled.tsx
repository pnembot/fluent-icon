import type { SVGProps } from "react";

export function PeopleTeamDeleteFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5a1.25 1.25 0 0 1 1.23 1.024a5.5 5.5 0 0 0-3.73 8.968A4 4 0 0 1 6 14V9.25Zm8.989-.229c1.139.1 2.178.548 3.011 1.236V9.25C18 8.56 17.44 8 16.75 8h-2.129c.2.298.33.646.367 1.021ZM5 9.25c0-.463.14-.892.379-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973A4.983 4.983 0 0 1 5 14V9.25Zm14 5.25a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5Z"
      />
    </svg>
  );
}
export default PeopleTeamDeleteFilled;
