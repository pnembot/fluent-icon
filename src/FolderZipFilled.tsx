import type { SVGProps } from "react";

export function FolderZipFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.005 4.5h-1.44L8.158 7.033l-.111.106a1.5 1.5 0 0 1-.823.353L7.07 7.5H2v7l.005.164A2.5 2.5 0 0 0 4.5 17h8.504v-1.941a.515.515 0 0 1 0-.117L13.002 14h-.498a.5.5 0 0 1 0-1h.497v-2H12.5a.5.5 0 0 1 0-1h.5V9h-.495a.5.5 0 0 1-.5-.5v-4Zm2 0h-1V8h1V4.5Zm1 0h.495a2.5 2.5 0 0 1 2.479 2.174l.016.162L18 7v7.5a2.5 2.5 0 0 1-2.336 2.495L15.5 17h-1.496v-1.5h.496a.5.5 0 0 0 0-1h-.497v-.955a.478.478 0 0 0 0-.09V12.5h.502a.5.5 0 1 0 0-1h-.503L14 9h.505a.5.5 0 0 0 .5-.5v-4ZM7.932 3.21A1.5 1.5 0 0 0 7.167 3H4.5l-.164.005A2.5 2.5 0 0 0 2 5.5v1h5.07l.082-.007a.5.5 0 0 0 .22-.094l.061-.055L9.385 4.29L8.067 3.3l-.135-.09Z"
      />
    </svg>
  );
}
export default FolderZipFilled;
