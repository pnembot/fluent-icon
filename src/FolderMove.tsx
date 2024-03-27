import type { SVGProps } from "react";

export function FolderMove(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9zM7.167 3c.27 0 .535.073.765.21l.135.09l1.6 1.2H15.5a2.5 2.5 0 0 1 2.495 2.336L18 7v3.257a5.508 5.508 0 0 0-.736-.513L17 9.6V7a1.5 1.5 0 0 0-1.356-1.493L15.5 5.5H9.62L8.157 7.034a1.5 1.5 0 0 1-.934.458l-.153.008H3v7a1.5 1.5 0 0 0 1.356 1.493L4.5 16h4.707c.074.261.167.515.277.76L9.6 17H4.5a2.5 2.5 0 0 1-2.495-2.336L2 14.5v-9a2.5 2.5 0 0 1 2.336-2.495L4.5 3h2.667zm6.98 9.146a.5.5 0 0 0-.058.638l.057.07L15.293 14H12.5a.5.5 0 0 0-.09.992l.09.008h2.793l-1.147 1.146a.5.5 0 0 0 .638.765l.07-.057l2-2a.504.504 0 0 0 .141-.285l.005-.066a.508.508 0 0 0-.102-.306l-.044-.05l-2-2a.5.5 0 0 0-.708 0zM7.166 4H4.5a1.5 1.5 0 0 0-1.493 1.356L3 5.5v1h4.071a.5.5 0 0 0 .302-.101l.06-.054L8.694 5.02L7.467 4.1a.5.5 0 0 0-.22-.094L7.167 4z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default FolderMove;
