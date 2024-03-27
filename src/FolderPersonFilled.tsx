import type { SVGProps } from "react";

export function FolderPersonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.5 4.5h-4.935L8.158 7.033l-.111.106a1.5 1.5 0 0 1-.823.353L7.07 7.5H2v7l.005.164A2.5 2.5 0 0 0 4.5 17h6.538a3.291 3.291 0 0 1-.038-.5a2.5 2.5 0 0 1 2.273-2.49A3 3 0 1 1 18 10.34V7l-.005-.164l-.016-.162A2.5 2.5 0 0 0 15.5 4.5ZM7.932 3.21A1.5 1.5 0 0 0 7.167 3H4.5l-.164.005A2.5 2.5 0 0 0 2 5.5v1h5.07l.082-.007a.5.5 0 0 0 .22-.094l.061-.055L9.385 4.29L8.067 3.3l-.135-.09ZM17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default FolderPersonFilled;
