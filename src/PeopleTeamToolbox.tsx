import type { SVGProps } from "react";

export function PeopleTeamToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm4.5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-11 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0ZM5 15c.033 0 .067 0 .1-.002c.068.338.171.665.304.975A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.129a2.237 2.237 0 0 0-.365 1H3.25a.25.25 0 0 0-.25.25V13a2 2 0 0 0 2 2Zm12-5.5a2.5 2.5 0 0 1 .958 1.542l.042.008v-1.8C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1h1.764a.25.25 0 0 1 .25.25v.25Zm-1.5.5h-2a1.5 1.5 0 0 0-1.5 1.5v.5h-.5a1.5 1.5 0 0 0-1.5 1.5V15h2v-.5a.5.5 0 0 1 1 0v.5h3v-.5a.5.5 0 0 1 1 0v.5h2v-1.5a1.5 1.5 0 0 0-1.5-1.5H17v-.5a1.5 1.5 0 0 0-1.5-1.5ZM7.25 9a.25.25 0 0 0-.25.25V14c0 1.306.835 2.418 2 2.83v.67c0 .13.01.257.029.381A4.002 4.002 0 0 1 6 14V9.25C6 8.56 6.56 8 7.25 8h5.5c.605 0 1.11.43 1.225 1H7.25ZM13 12v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5h-3Zm4 4v.5a.5.5 0 0 1-1 0V16h-3v.5a.5.5 0 0 1-1 0V16h-2v1.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V16h-2Z"
      />
    </svg>
  );
}
export default PeopleTeamToolbox;
