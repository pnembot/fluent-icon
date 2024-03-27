import type { SVGProps } from "react";

export function FolderMoveFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9zm1-5.5a2.5 2.5 0 0 1 2.479 2.174l.016.162L18 7v3.257a5.5 5.5 0 0 0-8.522 6.49L9.6 17H4.5a2.5 2.5 0 0 1-2.495-2.336L2 14.5v-7h5.07c.36 0 .706-.13.977-.361l.111-.106L10.565 4.5H15.5zm-.646 7.646a.5.5 0 0 0-.765.638l.057.07L15.293 14H12.5a.5.5 0 0 0-.09.992l.09.008h2.793l-1.147 1.146a.5.5 0 0 0 .638.765l.07-.057l2-2a.504.504 0 0 0 .141-.285l.005-.066a.508.508 0 0 0-.102-.306l-.044-.05l-2-2zM7.167 3c.27 0 .535.073.765.21l.135.09l1.319.99l-1.953 2.054a.5.5 0 0 1-.281.15l-.081.006H2v-1a2.5 2.5 0 0 1 2.336-2.495L4.5 3h2.667z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default FolderMoveFilled;
