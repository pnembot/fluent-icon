import type { SVGProps } from "react";

export function LocalLanguage(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 1.996a.5.5 0 0 0 0 1H13v1.869C13 6.03 11.832 7 10.5 7a.5.5 0 0 0 0 1C12.21 8 14 6.742 14 4.865V2.496a.5.5 0 0 0-.5-.5h-4ZM7.961 5.307a.5.5 0 0 0-.923 0l-5 12a.5.5 0 1 0 .923.385l1.537-3.69H10.5l1.539 3.695a.5.5 0 1 0 .923-.385l-1.662-3.99a.552.552 0 0 0-.01-.022L7.963 5.307Zm2.122 7.696H4.915L7.5 6.8l2.584 6.203ZM15.5 1.996a.5.5 0 0 1 .5.5v3.505h1.5a.5.5 0 0 1 0 1H16v6.495a.5.5 0 1 1-1 0v-11a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default LocalLanguage;
