import type { SVGProps } from "react";

export function PeopleTeamFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0V9.25Zm-1 0c0-.463.14-.892.379-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973A4.983 4.983 0 0 1 5 14V9.25ZM15 14c0 .7-.144 1.368-.404 1.973A3 3 0 0 0 18 13V9.25C18 8.56 17.44 8 16.75 8h-2.129c.24.358.379.787.379 1.25V14Z"
      />
    </svg>
  );
}
export default PeopleTeamFilled;
