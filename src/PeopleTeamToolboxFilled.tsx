import type { SVGProps } from "react";

export function PeopleTeamToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm5 .5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm-13 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM6 9.25C6 8.56 6.56 8 7.25 8h5.5c.605 0 1.11.43 1.225 1H13.5a2.5 2.5 0 0 0-2.458 2.042A2.5 2.5 0 0 0 9 13.5v4c0 .13.01.257.029.381A4.002 4.002 0 0 1 6 14V9.25Zm11.958 1.792l.042.008v-1.8C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h.514a2.5 2.5 0 0 1 2.458 2.042ZM5 9.25c0-.463.14-.892.379-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973A4.983 4.983 0 0 1 5 14V9.25ZM12 12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 5V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0Z"
      />
    </svg>
  );
}
export default PeopleTeamToolboxFilled;
