import type { SVGProps } from "react";

export function PeopleAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 5.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0ZM6.75 2.5a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5ZM1.5 12a2 2 0 0 1 2-2H10a2 2 0 0 1 .993.263c-.277.23-.531.486-.758.765A1.006 1.006 0 0 0 10 11H3.5a1 1 0 0 0-1 1v.078l.007.083a2.948 2.948 0 0 0 .498 1.336C3.492 14.201 4.513 15 6.75 15c.954 0 1.687-.145 2.252-.367c.008.35.049.69.12 1.02c-.645.217-1.426.347-2.372.347c-2.513 0-3.867-.92-4.568-1.934a3.948 3.948 0 0 1-.67-1.807a2.589 2.589 0 0 1-.012-.175V12ZM13 6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0ZM14.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default PeopleAdd;
