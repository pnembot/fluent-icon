import type { SVGProps } from "react";

export function RecycleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.9 3.038a1.25 1.25 0 0 1 2.203 0l1.66 3.093l-1.026-.342a.75.75 0 0 0-.474 1.423l3 1a.75.75 0 0 0 .977-.589l.5-3a.75.75 0 1 0-1.48-.246l-.174 1.046l-1.662-3.095C11.387.396 8.617.396 7.58 2.328L5.844 5.56a.75.75 0 0 0 1.321.71L8.9 3.037Zm8.04 10.872l-1.911-3.56a.75.75 0 1 1 1.321-.71l1.912 3.56c.983 1.832-.344 4.05-2.423 4.05h-3.526l.719.72a.75.75 0 1 1-1.061 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06l-.72.72h3.528a1.25 1.25 0 0 0 1.1-1.84Zm-9.69 1.84a.75.75 0 0 1 0 1.5H4.164c-2.08 0-3.406-2.218-2.423-4.05l1.847-3.439l-1.35.45a.75.75 0 1 1-.475-1.422l3-1.001a.75.75 0 0 1 .949.474l1 3.001a.75.75 0 1 1-1.423.474l-.406-1.217l-1.82 3.39a1.25 1.25 0 0 0 1.101 1.84H7.25Z"
      />
    </svg>
  );
}
export default RecycleFilled;
