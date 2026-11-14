# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## .

npm findings before: {"info": 0, "low": 9, "moderate": 129, "high": 84, "critical": 19, "total": 241}. After remediation: {"info": 0, "low": 8, "moderate": 129, "high": 59, "critical": 0, "total": 196}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "reactfooder",   "manifest_sha256": "0fdefcf18192e9a97564fa15408c8c30e245c65b73bc7c8c9ae7c432f6b6c403",   "lock_sha256": "8277ec4312a5418dea56698ea4d9afcd999fa347c1b40be912eb191e0ed4eeaa",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `@nivo/bar`: high; requires dependency migration. 
- `@nivo/pie`: high; requires dependency migration. 
- `@nivo/radar`: high; requires dependency migration. 
- `@testing-library/jest-dom`: high; requires dependency migration. 
- `axios`: high; requires dependency migration. https://github.com/advisories/GHSA-3g43-6gmg-66jw https://github.com/advisories/GHSA-3p68-rc4w-qgx5 https://github.com/advisories/GHSA-43fc-jf86-j433 https://github.com/advisories/GHSA-4w2v-q235-vp99 https://github.com/advisories/GHSA-5c9x-8gcm-mpgx https://github.com/advisories/GHSA-62hf-57xw-28j9 https://github.com/advisories/GHSA-6chq-wfr3-2hj9 https://github.com/advisories/GHSA-7q8q-rj6j-mhjq https://github.com/advisories/GHSA-898c-q2cr-xwhg https://github.com/advisories/GHSA-cph5-m8f7-6c5x https://github.com/advisories/GHSA-fvcv-3m26-pcqx https://github.com/advisories/GHSA-hfxv-24rg-xrqf https://github.com/advisories/GHSA-j5f8-grm9-p9fc https://github.com/advisories/GHSA-jr5f-v2jv-69x6 https://github.com/advisories/GHSA-m7pr-hjqh-92cm https://github.com/advisories/GHSA-mmx7-hfxf-jppx https://github.com/advisories/GHSA-p92q-9vqr-4j8v https://github.com/advisories/GHSA-pf86-5x62-jrwf https://github.com/advisories/GHSA-pjwm-pj3p-43mv https://github.com/advisories/GHSA-pmwg-cvhr-8vh7 https://github.com/advisories/GHSA-vf2m-468p-8v99 https://github.com/advisories/GHSA-w9j2-pvgh-6h63 https://github.com/advisories/GHSA-wf5p-g6vw-rhxx https://github.com/advisories/GHSA-xhjh-pmcv-23jw https://github.com/advisories/GHSA-xx6v-rp6x-q39c
- `react-scripts`: high; requires dependency migration. 

Do not treat compatible lockfile updates as completion of the framework migrations above.
