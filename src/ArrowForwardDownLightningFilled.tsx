import type { SVGProps } from "react";

export function ArrowForwardDownLightningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m15.69 7l-2.256-2.255a.75.75 0 0 1 .977-1.133l.084.072L18.03 7.22l.069.078l.04.06l.05.094l.032.092l.016.068l.01.062l.003.093l-.004.06l-.015.093l-.03.1l-.047.098l-.035.056a.747.747 0 0 1-.089.106l-3.535 3.536a.75.75 0 0 1-1.133-.977l.072-.084l2.256-2.254L12 8.5c-3.651 0-6.133-2.077-6.246-5.037L5.75 3.25a.75.75 0 0 1 1.5 0c0 2.129 1.692 3.658 4.492 3.746L12 7h3.69ZM11 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.12-3a.5.5 0 0 0-.472.334l-.88 2.5a.5.5 0 0 0 .472.665h.776l-.508 1.87a.5.5 0 0 0 .903.4l2.25-3.5A.5.5 0 0 0 8 12h-.746l.28-.841a.5.5 0 0 0-.474-.659H5.88Z"
      />
    </svg>
  );
}
export default ArrowForwardDownLightningFilled;
