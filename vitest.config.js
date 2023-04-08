  
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
      include: [...configDefaults.include],
      exclude: [...configDefaults.exclude, 'test/**/*.test.js' ],
    },
  })


  // test: {
  //   include: [...configDefaults.include, 'src/**/*.test.js'],
  //   exclude: [...configDefaults.exclude, 'test/**/*.test.js' ],
  // },