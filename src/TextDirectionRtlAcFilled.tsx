import type { SVGProps } from "react";

export function TextDirectionRtlAcFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="none">
        <path
          d="M15 2.75a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V7.5h1.25a.75.75 0 0 0 0-1.5H15V2.75zM8 3a.75.75 0 0 0 0 1.5h3.25V5c0 .922-.188 1.949-.682 2.72C10.105 8.446 9.341 9 8 9a.75.75 0 0 0 0 1.5c1.859 0 3.095-.82 3.832-1.97c.706-1.104.918-2.452.918-3.53V3.75A.75.75 0 0 0 12 3H8zM4.22 4.22a.75.75 0 0 1 1.06 1.06L4.56 6h1.19a.75.75 0 0 1 0 1.5H4.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.748.748 0 0 1 0-1.06l2-2zm0 7.5a.75.75 0 0 1 1.06 1.06l-.72.72h11.69a.75.75 0 0 1 0 1.5H4.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextDirectionRtlAcFilled;
