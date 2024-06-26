import type { SVGProps } from "react";

export function MailUnread(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 5.95a2.5 2.5 0 1 0-1.002-4.9A2.5 2.5 0 0 0 18 5.95ZM4.5 3h9.535a3.538 3.538 0 0 0 0 1H4.5A1.5 1.5 0 0 0 3 5.5v.302l7 4.118l5.754-3.386c.375.217.795.365 1.241.43l-6.742 3.967a.5.5 0 0 1-.425.038l-.082-.038L3 6.963V13.5A1.5 1.5 0 0 0 4.5 15h11a1.5 1.5 0 0 0 1.5-1.5V6.965a3.53 3.53 0 0 0 1 0V13.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5v-8A2.5 2.5 0 0 1 4.5 3Z"
      />
    </svg>
  );
}
export default MailUnread;
