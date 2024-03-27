import type { SVGProps } from "react";

export function QuestionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3C7.796 3 6 4.796 6 7a.75.75 0 0 0 1.5 0c0-1.376 1.124-2.5 2.5-2.5s2.5 1.124 2.5 2.5c0 .597-.156.975-.368 1.27c-.232.325-.547.58-.969.92l-.01.008c-.4.323-.893.724-1.27 1.288c-.391.588-.633 1.313-.633 2.264v.5a.75.75 0 0 0 1.5 0v-.5c0-.674.164-1.105.382-1.432c.233-.349.552-.62.964-.953l.068-.055c.374-.302.834-.672 1.188-1.167C13.75 8.588 14 7.903 14 7c0-2.204-1.796-4-4-4Zm0 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default QuestionFilled;
