import { Rubik } from '@next/font/google';
import cx from 'classnames';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title}`}
          description={`${AppConfig.description}`}
        />
      }
    >
      <div className="flex h-full w-full items-center justify-center bg-slate-900">
        <h1
          className={cx(
            'text-5xl text-slate-50 font-mono',
            `${rubik.className}`
          )}
        >
          INDIACAN CLUB
        </h1>
      </div>
    </Main>
  );
};

export default Index;
