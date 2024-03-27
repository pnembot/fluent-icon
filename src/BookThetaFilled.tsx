import type { SVGProps } from "react";

export function BookThetaFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm1 7c0-1.059.306-2.038.825-2.765C8.345 5.508 9.106 5 10 5c.894 0 1.656.508 2.175 1.235C12.695 6.962 13 7.94 13 9c0 1.059-.306 2.038-.825 2.765C11.655 12.492 10.894 13 10 13c-.894 0-1.656-.508-2.175-1.235C7.305 11.038 7 10.06 7 9Zm4.972.5c-.076.667-.301 1.25-.611 1.684c-.386.54-.874.816-1.361.816s-.975-.275-1.36-.816c-.31-.434-.536-1.017-.612-1.684h3.944Zm0-1c-.076-.667-.301-1.25-.611-1.684C10.975 6.276 10.487 6 10 6s-.975.275-1.36.816c-.31.434-.536 1.017-.612 1.684h3.944Z"
      />
    </svg>
  );
}
export default BookThetaFilled;
