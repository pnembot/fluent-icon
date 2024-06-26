import type { SVGProps } from "react";

export function TextDirectionRotate90RightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 6.5a.75.75 0 0 0-.471-.696l-7.5-3a.75.75 0 0 0-.557 1.392l2.028.812v2.984l-2.028.812a.75.75 0 1 0 .557 1.392l7.5-3A.75.75 0 0 0 17 6.5Zm-2.77 0L12 7.392V5.608l2.23.892ZM5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V3.75Zm8 7a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.748.748 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72v-3.69Z"
      />
    </svg>
  );
}
export default TextDirectionRotate90RightFilled;
