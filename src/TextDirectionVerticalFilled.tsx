import type { SVGProps } from "react";

export function TextDirectionVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V3.75Zm8 9a.75.75 0 0 1 1.5 0v1.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.747.747 0 0 1-1.06 0l-2-2a.762.762 0 0 1 0-1.07a.75.75 0 0 1 1.06.01l.72.72v-1.69ZM13.5 3a.75.75 0 0 1 .696.471l3 7.5a.75.75 0 0 1-1.392.557L14.992 9.5h-2.984l-.812 2.028a.75.75 0 0 1-1.392-.556l3-7.5A.75.75 0 0 1 13.5 3Zm0 2.77L12.608 8h1.784L13.5 5.77Z"
      />
    </svg>
  );
}
export default TextDirectionVerticalFilled;
