import type { SVGProps } from "react";

export function DocumentPageBottomRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.928 10.556a.5.5 0 1 0-.99-.145l-.086.587h-1.24l.066-.442a.5.5 0 1 0-.99-.145l-.086.587H9a.5.5 0 0 0 0 1h.456l-.22 1.5H8.5a.5.5 0 0 0 0 1h.59l-.137.93a.5.5 0 0 0 .99.144l.157-1.074h1.24l-.137.93a.5.5 0 0 0 .99.144l.157-1.074H13a.5.5 0 0 0 0-1h-.503l.22-1.5h.783a.5.5 0 0 0 0-1h-.637l.065-.442Zm-2.681 2.942l.22-1.5h1.239l-.22 1.5h-1.24ZM14 18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8Zm0-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1Z"
      />
    </svg>
  );
}
export default DocumentPageBottomRight;
