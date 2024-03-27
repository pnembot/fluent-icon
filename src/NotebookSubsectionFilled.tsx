import type { SVGProps } from "react";

export function NotebookSubsectionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5.5A3.5 3.5 0 0 1 7.5 2H10c.818 0 1.544.393 2 1H7.5A2.5 2.5 0 0 0 5 5.5V15a2.496 2.496 0 0 1-1-2V5.5ZM13.5 2l-.068.005c-.244.04-.432.291-.432.595V4H7.5A1.5 1.5 0 0 0 6 5.5v10A1.5 1.5 0 0 0 7.5 17H13v.4l.005.081c.033.293.242.519.495.519c.276 0 .5-.269.5-.6V2.6l-.005-.081C13.962 2.226 13.753 2 13.5 2Z"
      />
    </svg>
  );
}
export default NotebookSubsectionFilled;
