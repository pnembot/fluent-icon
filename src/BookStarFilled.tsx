import type { SVGProps } from "react";

export function BookStarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6.454 1.29a.5.5 0 0 0-.907 0l-.822 1.77l-1.938.234a.5.5 0 0 0-.28.863l1.43 1.328L7.56 11.4a.5.5 0 0 0 .734.533L10 10.985l1.705.948a.5.5 0 0 0 .734-.533l-.375-1.915l1.43-1.328a.5.5 0 0 0-.281-.863l-1.938-.235l-.821-1.77Zm-.94 2.443L10 6.687l.486 1.046a.5.5 0 0 0 .393.286l1.145.138l-.845.785a.5.5 0 0 0-.15.463l.222 1.131l-1.008-.56a.5.5 0 0 0-.486 0l-1.008.56l.222-1.131a.5.5 0 0 0-.15-.463l-.844-.785L9.12 8.02a.5.5 0 0 0 .393-.286Z"
      />
    </svg>
  );
}
export default BookStarFilled;
