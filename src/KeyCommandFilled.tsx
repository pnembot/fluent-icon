import type { SVGProps } from "react";

export function KeyCommandFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.75 4.5C6.44 4.5 7 5.06 7 5.75V7H5.75a1.25 1.25 0 1 1 0-2.5ZM8.5 7V5.75A2.75 2.75 0 1 0 5.75 8.5H7v3H5.75a2.75 2.75 0 1 0 2.75 2.75V13h3v1.25a2.75 2.75 0 1 0 2.75-2.75H13v-3h1.25a2.75 2.75 0 1 0-2.75-2.75V7h-3Zm0 1.5h3v3h-3v-3ZM13 7V5.75A1.25 1.25 0 1 1 14.25 7H13Zm0 6h1.25A1.25 1.25 0 1 1 13 14.25V13Zm-6 0v1.25A1.25 1.25 0 1 1 5.75 13H7Z"
      />
    </svg>
  );
}
export default KeyCommandFilled;
