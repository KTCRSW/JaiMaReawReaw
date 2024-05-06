'use client'

import react,{useState, useEffect} from 'react';

import QRcode from 'qrcode';
import generatePayload from 'promptpay-qr';
import { resolve } from 'path';
import { rejects } from 'assert';

const mobileNumber = '095-961-1962';
const amount = 4.22;
const payLoad = generatePayload(mobileNumber, {amount});
console.log(payLoad);


const options = {types: 'svg', color: {dark : '#000000', light : '#ffffff'}};
  QRcode.toString(payLoad, options, (err, svg)=> {
    if(err) return rejects;
    resolve(svg)
  });

export default function Home() {
  return (
    <>
    </>
  );
}
