import type { SVGProps } from "react";

export function PersonQuestionMarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm.624-1.995a.625.625 0 1 1-1.249 0a.625.625 0 0 1 1.25 0Zm1.23-3.552c0 .586-.215.908-.728 1.319l-.277.214c-.246.194-.329.3-.346.448l-.011.156A.5.5 0 0 1 14 15.5c0-.57.21-.884.716-1.288l.278-.215c.288-.23.36-.342.36-.544c0-.558-.382-.95-.854-.95c-.494 0-.859.366-.854.945a.5.5 0 1 1-1 .01c-.01-1.137.806-1.955 1.854-1.955c1.031 0 1.853.846 1.853 1.95ZM9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01Z"
      />
    </svg>
  );
}
export default PersonQuestionMarkFilled;
