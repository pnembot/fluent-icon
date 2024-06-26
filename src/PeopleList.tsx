import type { SVGProps } from "react";

export function PeopleList(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 6.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0ZM6.75 3.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5ZM10 11c.398 0 .768.116 1.08.316a1.488 1.488 0 0 0-.54.842A.995.995 0 0 0 10 12H3.5a1 1 0 0 0-1 1v.078l.007.083a2.948 2.948 0 0 0 .498 1.336C3.492 15.201 4.513 16 6.75 16s3.258-.799 3.745-1.503l.005-.008v.011c0 .384.144.735.382 1a1.51 1.51 0 0 0-.194.273C9.894 16.471 8.656 17 6.75 17c-2.513 0-3.867-.92-4.568-1.934a3.948 3.948 0 0 1-.67-1.807a2.589 2.589 0 0 1-.012-.175V13a2 2 0 0 1 2-2H10Zm3-3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM14.5 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM12 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z"
      />
    </svg>
  );
}
export default PeopleList;
