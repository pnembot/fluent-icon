import type { SVGProps } from "react";

export function DocumentOnePageBeaker(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M9.59 4.992A.5.5 0 0 0 9.5 4h-3l-.09.008A.5.5 0 0 0 6.5 5h3l.09-.008Zm0 3.5a.5.5 0 0 0 .408-.445v-.095a.5.5 0 0 0-.006-.04a1.502 1.502 0 0 1-.61-.412H6.5l-.09.008a.5.5 0 0 0 .09.992h3l.09-.008ZM12 3v2h1V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.267c-.173-.3-.27-.645-.27-1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm-5.5 7.992h2.805l-.518 1H6.5A.5.5 0 0 1 6.41 11l.09-.008Zm7.496-1.587a2 2 0 0 0 .224.92l.35.675h-4.143l.347-.67a2 2 0 0 0 .224-.92V7H10.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-.504v2.405ZM9.909 12l-.798 1.54A1 1 0 0 0 10 15h4.998a1 1 0 0 0 .888-1.46L15.087 12H9.91Z"
      />
    </svg>
  );
}
export default DocumentOnePageBeaker;
