import type { SVGProps } from "react";

export function DocumentOnePageAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4.257a5.503 5.503 0 0 1-.657-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.022a5.5 5.5 0 0 1 1 .185V4a2 2 0 0 0-2-2Zm-1 4.5a.5.5 0 0 1-.41.492L12.5 7h-5a.5.5 0 0 1-.09-.992L7.5 6h5a.5.5 0 0 1 .5.5ZM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5Zm-7-2h3.837c-.403.284-.767.62-1.08 1H7.5a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default DocumentOnePageAdd;
