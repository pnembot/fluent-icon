import type { SVGProps } from "react";

export function LassoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.162 2.212a8.02 8.02 0 0 1 3.676 0a.75.75 0 0 1-.344 1.46a6.52 6.52 0 0 0-2.988 0a.75.75 0 0 1-.344-1.46ZM6.825 3.437a.75.75 0 0 1-.242 1.033A6.538 6.538 0 0 0 4.47 6.583a.75.75 0 0 1-1.275-.79a8.037 8.037 0 0 1 2.598-2.598a.75.75 0 0 1 1.032.242Zm6.35 0a.75.75 0 0 1 1.032-.242a8.039 8.039 0 0 1 2.598 2.598a.75.75 0 0 1-1.275.79a6.538 6.538 0 0 0-2.112-2.113a.75.75 0 0 1-.243-1.033ZM3.114 7.604a.75.75 0 0 1 .558.902a6.52 6.52 0 0 0 0 2.988a.75.75 0 0 1-1.46.344a8.021 8.021 0 0 1 0-3.676a.75.75 0 0 1 .902-.558Zm13.772 0a.75.75 0 0 1 .902.558a8.022 8.022 0 0 1 0 3.676a.75.75 0 0 1-1.46-.344a6.524 6.524 0 0 0 0-2.988a.75.75 0 0 1 .558-.902Zm-13.449 5.57a.75.75 0 0 1 1.033.244a6.538 6.538 0 0 0 2.113 2.112a.75.75 0 1 1-.79 1.275a8.039 8.039 0 0 1-2.598-2.598a.75.75 0 0 1 .242-1.032Zm13.673 1.262a.75.75 0 0 0-1.22-.872l-.003.004l-.017.022a8.492 8.492 0 0 1-.378.46c-.245.28-.594.643-1.027 1.013c-1.017-.73-2.34-1.313-3.965-1.313c-.752 0-1.388.244-1.84.677A2.173 2.173 0 0 0 7.987 16c0 .571.224 1.144.671 1.573c.453.433 1.088.677 1.841.677c1.532 0 2.868-.584 3.915-1.274l.055.054a8.362 8.362 0 0 1 1.285 1.67l.06.108l.012.024l.002.003c-.152-.266 0 .002 0 .002a.75.75 0 0 0 1.342-.672l-.001-.002v-.001l-.003-.005l-.007-.012l-.022-.043a8.583 8.583 0 0 0-.39-.643a9.89 9.89 0 0 0-1.136-1.406a11.79 11.79 0 0 0 1.363-1.44c.042-.052.074-.094.097-.125l.026-.036l.008-.01l.003-.004l.001-.002Zm-6.61.814c1.027 0 1.91.304 2.65.743c-.784.443-1.683.757-2.65.757c-.422 0-.668-.131-.803-.26a.673.673 0 0 1-.21-.49c0-.179.07-.356.21-.49c.135-.129.38-.26.803-.26Z"
      />
    </svg>
  );
}
export default LassoFilled;
