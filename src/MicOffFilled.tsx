import type { SVGProps } from "react";

export function MicOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 10c0 .27-.035.53-.102.777L7.002 4.881A3 3 0 0 1 13 5v5ZM7 7.708V10a3 3 0 0 0 4.738 2.445l1.07 1.07A4.5 4.5 0 0 1 5.5 10a.5.5 0 0 0-.999.001a5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-2.022a5.475 5.475 0 0 0 3.02-1.251l3.626 3.627a.5.5 0 0 0 .708-.707l-15-15a.5.5 0 1 0-.708.707L7 7.707Zm7.803 4.975A5.474 5.474 0 0 0 15.5 10a.5.5 0 0 0-1 0c0 .695-.157 1.353-.439 1.94l.742.742Z"
      />
    </svg>
  );
}
export default MicOffFilled;
