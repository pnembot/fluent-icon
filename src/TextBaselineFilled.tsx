import type { SVGProps } from "react";

export function TextBaselineFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.698 3.475a.75.75 0 0 0-1.395 0l-3.75 9.5a.75.75 0 0 0 1.395.55L8.142 10.5h3.716l1.195 3.025a.75.75 0 0 0 1.395-.55l-3.75-9.5ZM11.266 9H8.734l1.267-3.207L11.266 9ZM2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
      />
    </svg>
  );
}
export default TextBaselineFilled;
