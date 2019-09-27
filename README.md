# fints-api

[![npm](https://img.shields.io/npm/v/fints-api.svg)](https://www.npmjs.com/package/fints-api)

A client library for communicating with banks using their [FinTS](https://www.hbci-zka.de/) interface.

Based on  [nodejs-fints](https://github.com/guidoMueller/nodejs-fints) and enhanced to work after the banks changed
their implementations for SCA to be compliant with PSD2.


## Features

- Load list of accounts.
- Load list of statements and transactions in specified range.
- Parse statement [MT940](https://en.wikipedia.org/wiki/MT940) format.
- Parse transaction descriptions.
- Extract [reference tags](https://www.dzbank.de/content/dam/dzbank_de/de/home/produkte_services/Firmenkunden/PDF-Dokumente/transaction%20banking/elektronicBanking/SEPA-Belegungsregeln_MT940-DK_082016.~644b217ec96b35dfffcaf18dc2df800a.pdf) from transactions.
- List supported TAN methods.
- Parse basic metadata.

## Missing

- Get current balance.
- List holdings.
- Initiate any kind of SEPA transfers or debits.

## Resources

- [Official specification](https://www.hbci-zka.de/spec/3_0.htm)
- [Database of banks with their URLs](https://github.com/jhermsmeier/fints-institute-db)
