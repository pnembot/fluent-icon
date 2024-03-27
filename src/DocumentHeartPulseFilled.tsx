import type { SVGProps } from "react";

export function DocumentHeartPulseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H8.451l2.427-2.427a3.85 3.85 0 0 0-4.875-5.916A3.84 3.84 0 0 0 4 9.003V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25Zm-.832 8.585a2.85 2.85 0 0 0-4.031 0l-.136.136l-.137-.136A2.85 2.85 0 0 0 1.002 13h1.696l.554-.832a1.5 1.5 0 0 1 2.535.06l.352.587l.161-.215a1.5 1.5 0 0 1 2.261-.16l.56.56H11a2.843 2.843 0 0 0-.83-2.165ZM5.647 18.68L2.967 16H4.55l.163.272A1.5 1.5 0 0 0 7.2 16.4l.3-.4h1.534l-2.68 2.68a.5.5 0 0 1-.707 0ZM4.512 12.5a.5.5 0 0 1 .417.243l1.118 1.862L7.1 13.2a.5.5 0 0 1 .754-.054l.854.854H10a.5.5 0 0 1 0 1H8.5a.5.5 0 0 1-.354-.146l-.592-.593L6.4 15.8a.5.5 0 0 1-.828-.043l-1.094-1.822l-.561.842A.5.5 0 0 1 3.5 15H2a.5.5 0 0 1 0-1h1.233l.851-1.277a.5.5 0 0 1 .428-.223Z"
      />
    </svg>
  );
}
export default DocumentHeartPulseFilled;
