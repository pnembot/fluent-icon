import type { SVGProps } from "react";

export function FolderOpenVertical(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3.5A1.5 1.5 0 0 1 5.5 2h9A1.5 1.5 0 0 1 16 3.5v3.877c0 .123-.015.245-.045.364L15 11.56v2.94a1.5 1.5 0 0 1-1.5 1.5H12v.742a1.5 1.5 0 0 1-2.04 1.4L5.6 16.46A2.5 2.5 0 0 1 4 14.128V3.5ZM7.186 3L10.4 4.24A2.5 2.5 0 0 1 12 6.572V15h1.5a.5.5 0 0 0 .5-.5v-3c0-.04.005-.082.015-.121l.97-3.88A.5.5 0 0 0 15 7.376V3.5a.5.5 0 0 0-.5-.5H7.186ZM5 3.958v10.17a1.5 1.5 0 0 0 .96 1.4l4.36 1.681a.5.5 0 0 0 .68-.466V6.572a1.5 1.5 0 0 0-.96-1.4L5.68 3.49a.5.5 0 0 0-.68.467Z"
      />
    </svg>
  );
}
export default FolderOpenVertical;
