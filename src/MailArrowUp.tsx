import type { SVGProps } from "react";

export function MailArrowUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.146-2.353l-.003-.003A.498.498 0 0 0 14.503 3h-.006a.499.499 0 0 0-.35.147l-2 2a.5.5 0 0 0 .707.707L14 4.707V7.5a.5.5 0 1 0 1 0V4.707l1.146 1.147a.5.5 0 1 0 .707-.708l-2-2ZM17 14.5v-4.1a5.507 5.507 0 0 0 1-.657V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h4.707a5.48 5.48 0 0 0-.185 1H4.5A1.5 1.5 0 0 0 3 6.5v.302l7 4.118l1.441-.848a5.49 5.49 0 0 0 1.043.547l-2.23 1.312a.5.5 0 0 1-.426.038l-.082-.038L3 7.963V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5Z"
      />
    </svg>
  );
}
export default MailArrowUp;
