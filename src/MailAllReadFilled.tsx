import type { SVGProps } from "react";

export function MailAllReadFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 17a2.496 2.496 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-6c.607.456 1 1.182 1 2v4a4.5 4.5 0 0 1-4.5 4.5h-7ZM9.237 2.06a.5.5 0 0 0-.474 0L3.052 5.135c-.314.169-.57.414-.751.706l.416.208L9 8.95l6.275-2.896l.415-.226a1.999 1.999 0 0 0-.742-.692L9.237 2.06Zm6.76 4.738l-.258.14a.51.51 0 0 1-.03.016l-6.5 3a.5.5 0 0 1-.419 0l-6.5-3l-.014-.007l-.274-.137A2.016 2.016 0 0 0 2 6.896V12.5A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V6.896c0-.033 0-.065-.002-.098Z"
      />
    </svg>
  );
}
export default MailAllReadFilled;
