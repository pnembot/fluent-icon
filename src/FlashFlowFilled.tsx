import type { SVGProps } from "react";

export function FlashFlowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.213 2c-.474 0-.891.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.021 1.354h1.268l-1.17 4.68c-.264 1.055 1.04 1.777 1.795.995l4.815-4.916L11.42 12h-.183a3 3 0 1 1 .593-3a2.5 2.5 0 0 1 2.18 1.37l1.524-1.555l.003-.004c.641-.667.18-1.811-.766-1.811h-2.564l1.261-3.594l.003-.008A1.062 1.062 0 0 0 12.462 2H7.213Zm10.713 13.773a2.01 2.01 0 0 0 .797-.756A2 2 0 1 0 15.268 13H14.22a.5.5 0 0 1-.475-.342l-.544-1.632A1.5 1.5 0 0 0 11.78 10H11a2 2 0 1 0-.268 1h1.047a.5.5 0 0 1 .475.342l.544 1.632l.008.026a1.5 1.5 0 0 0 1.414 1H15a2 2 0 0 0 2.926 1.773Zm-.44-.899A1 1 0 0 1 16 14.018V14a1 1 0 0 1 2-.013V14a1 1 0 0 1-.514.874ZM10 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"
      />
    </svg>
  );
}
export default FlashFlowFilled;
