import type { SVGProps } from "react";

export function TextDirectionRotate90LeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 13.5a.75.75 0 0 1-.471.696l-7.5 3a.75.75 0 0 1-.557-1.393l2.028-.811v-2.984l-2.028-.812a.75.75 0 0 1 .557-1.393l7.5 3A.75.75 0 0 1 17 13.5Zm-2.77 0L12 12.608v1.784l2.23-.892ZM5 16.25a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L5 5.56v10.69Zm8-7a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.748.748 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v3.69Z"
      />
    </svg>
  );
}
export default TextDirectionRotate90LeftFilled;
