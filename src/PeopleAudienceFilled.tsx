import type { SVGProps } from "react";

export function PeopleAudienceFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.215 5.217a2.227 2.227 0 1 0-4.455 0a2.227 2.227 0 0 0 4.455 0ZM2.515 12h2.99V9.014l.008-.18c.026-.297.118-.575.26-.82H3.016l-.117.007a1 1 0 0 0-.883.993V11.5a.5.5 0 0 0 .5.5Zm15.475-.5a.5.5 0 0 1-.5.5h-3.016V9.014l-.006-.149a1.987 1.987 0 0 0-.262-.851h2.784a1 1 0 0 1 .993.884l.007.116V11.5Zm-4.523-2.602a1 1 0 0 0-.994-.884H7.505l-.117.007a1 1 0 0 0-.883.993V12h6.968V9.014l-.006-.116Zm1.508-5.28a1.913 1.913 0 1 1 0 3.826a1.913 1.913 0 0 1 0-3.827ZM6.929 5.53a1.913 1.913 0 1 0-3.826 0a1.913 1.913 0 0 0 3.826 0ZM2.5 13a.5.5 0 0 0-.5.5v1A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-.5-.5h-15Z"
      />
    </svg>
  );
}
export default PeopleAudienceFilled;
