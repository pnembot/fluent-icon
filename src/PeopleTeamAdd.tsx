import type { SVGProps } from "react";

export function PeopleTeamAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM10 2a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm4.5 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-11 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0ZM5 15c.033 0 .067 0 .1-.002c.068.338.171.665.304.975A3 3 0 0 1 2 13V9.25C2 8.56 2.56 8 3.25 8h2.129a2.237 2.237 0 0 0-.365 1H3.25a.25.25 0 0 0-.25.25V13a2 2 0 0 0 2 2Zm8.975-6c-.116-.57-.62-1-1.225-1h-5.5C6.56 8 6 8.56 6 9.25V14a4 4 0 0 0 4.25 3.992a5.51 5.51 0 0 1-.665-1.02A3 3 0 0 1 7 14V9.25A.25.25 0 0 1 7.25 9h6.725Zm1.011 0h1.764a.25.25 0 0 1 .25.25v.35c.358.183.693.404 1 .657V9.25C18 8.56 17.44 8 16.75 8h-2.129c.196.292.325.633.365 1Zm-.486 1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9Zm0 2a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default PeopleTeamAdd;
