import type { SVGProps } from "react";

export function DualScreenArrowUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.854-2.353l-2 2a.5.5 0 0 0 .708.707L14 4.707V7.5a.5.5 0 0 0 1 0V4.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2A.499.499 0 0 0 14.503 3h-.006a.498.498 0 0 0-.348.144l-.003.003ZM17 16v-5.6a5.507 5.507 0 0 0 1-.657V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.022a5.5 5.5 0 0 0 .185 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.794a5.51 5.51 0 0 0 1 1.48V17H16a1 1 0 0 0 1-1Zm-11-.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm7.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Z"
      />
    </svg>
  );
}
export default DualScreenArrowUp;
