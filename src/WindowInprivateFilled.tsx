import type { SVGProps } from "react";

export function WindowInprivateFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.498 3.001a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5V8h.003V6.5h-.003v-.999a2.5 2.5 0 0 0-2.5-2.5h-9ZM15.5 6v.5h-1.29l1.145-1.145c.093.195.146.414.146.645Zm-.851-1.353L12.794 6.5H9.967l2-2H14c.232 0 .451.053.648.147ZM10.553 4.5l-2 2H5.724l2-2h2.829Zm-4.243 0L4.5 6.31V6A1.5 1.5 0 0 1 6 4.5h.31ZM7.053 8L4.5 10.552V8h2.553ZM4.5 11.966L8.467 8h2.828l-6.648 6.648A1.494 1.494 0 0 1 4.5 14v-2.034ZM12.71 8h2.79v.037L8.039 15.5H6c-.23 0-.45-.052-.645-.146L12.71 8Zm2.79 1.452v2.828l-3.22 3.22H9.453l6.049-6.048Zm0 4.242V14a1.5 1.5 0 0 1-1.5 1.5h-.305l1.806-1.806Z"
      />
    </svg>
  );
}
export default WindowInprivateFilled;
