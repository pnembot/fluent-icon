import type { SVGProps } from "react";

export function KeyResetFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 2C9.424 2 7 4.424 7 7.5c0 .397.04.796.122 1.175c.058.27-.008.504-.142.638l-4.54 4.54A1.5 1.5 0 0 0 2 14.915V16.5A1.5 1.5 0 0 0 3.5 18h2A1.5 1.5 0 0 0 7 16.5V16h1a1 1 0 0 0 1-1v-1c0-.51.255-.962.646-1.233L8.439 11.56a1.5 1.5 0 0 1 0-2.122l2-2A1.5 1.5 0 0 1 12.915 9H14a5 5 0 0 1 3.29 1.236C17.744 9.434 18 8.5 18 7.5C18 4.424 15.576 2 12.5 2ZM14 5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-2.146 3.854a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.707 11H14a3 3 0 1 1-3 3a.5.5 0 1 0-1 0a4 4 0 1 0 4-4h-3.293l1.147-1.146Z"
      />
    </svg>
  );
}
export default KeyResetFilled;
