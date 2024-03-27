import type { SVGProps } from "react";

export function CloudLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246h-.07C3.468 8.246 2 9.758 2 11.623C2 13.488 3.47 15 5.282 15h3.753a3.5 3.5 0 0 1 3.465-4h4c.532 0 1.036.119 1.488.331c-.144-1.728-1.553-3.085-3.27-3.085h-.071ZM12.5 12a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default CloudLinkFilled;
