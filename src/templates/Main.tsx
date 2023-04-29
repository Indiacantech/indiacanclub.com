import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="h-screen w-screen antialiased">
    {props.meta}

    {props.children}
  </div>
);

export { Main };
