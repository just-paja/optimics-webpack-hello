# Charles demo

We mapped ceskytunak.cz to this testing prcat server using charles proxy.

To start in dev environment

```shell
npm run dev
```

To build

```shell
npm run build
```

## Mapping

You need to map few things from original website:

* https://ceskytunak.cz/wp-includes/js/jquery/jquery.js to https://localhost:3001/main.js to load local scripts
* https://ceskytunak.cz/*hot-update* to https://localhost:3001/ to enable hot module reload (HMR)
