import type { SVGProps } from "react";

export function MailEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.5 3.001a2.5 2.5 0 0 1 2.5 2.5v3.633a2.88 2.88 0 0 0-1-.131V6.962l-6.746 3.97a.5.5 0 0 1-.426.038l-.082-.038L3 6.964v6.537a1.5 1.5 0 0 0 1.5 1.5h5.484c-.227.3-.4.639-.51 1H4.5a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h11Zm0 1h-11a1.5 1.5 0 0 0-1.5 1.5v.302l7 4.118l7-4.119v-.301a1.5 1.5 0 0 0-1.5-1.5Zm-4.52 11.376l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default MailEdit;
