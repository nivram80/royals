import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/variables.scss', 'src/global/mixin.scss']
    })
  ],
  outputTargets: [
    {
      type: 'www'
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ]
};
